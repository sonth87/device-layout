'use client';

import { useEffect } from 'react';
import { useStore } from '@/store';
import { ALL_WALLPAPERS } from '@/config/wallpapers.config';

/** Height of the top strip to sample (matches --menubar-height). */
const SAMPLE_HEIGHT = 28;
const SAMPLE_WIDTH = 120;

const LS_PREFIX = 'wallpaper_luma_';

/** Compute average luminance (0–255) for a solid hex color. */
function hexLuminance(hex: string): number {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function readCache(key: string): 'light' | 'dark' | null {
  try {
    const v = localStorage.getItem(LS_PREFIX + key);
    if (v === 'light' || v === 'dark') return v;
  } catch { /* SSR / private browsing */ }
  return null;
}

function writeCache(key: string, value: 'light' | 'dark'): void {
  try {
    localStorage.setItem(LS_PREFIX + key, value);
  } catch { /* ignore */ }
}

/** In-process memory cache — survives hot reloads, reset on full page reload. */
const memCache = new Map<string, 'light' | 'dark'>();

function analyseImageUrl(url: string): Promise<'light' | 'dark'> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = SAMPLE_WIDTH;
        canvas.height = SAMPLE_HEIGHT;
        const ctx = canvas.getContext('2d');
        if (!ctx) { resolve('dark'); return; }
        ctx.drawImage(
          img,
          0, 0, img.naturalWidth, Math.min(img.naturalHeight, SAMPLE_HEIGHT * 2),
          0, 0, SAMPLE_WIDTH, SAMPLE_HEIGHT
        );
        const data = ctx.getImageData(0, 0, SAMPLE_WIDTH, SAMPLE_HEIGHT).data;
        let total = 0;
        for (let i = 0; i < data.length; i += 4) {
          total += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        }
        resolve(total / (data.length / 4) > 128 ? 'light' : 'dark');
      } catch { resolve('dark'); }
    };
    img.onerror = () => resolve('dark');
    img.src = url;
  });
}

/**
 * Detects wallpaper top-strip luminance and keeps wallpaperTextTheme in the
 * store in sync.  Only runs when osTheme === 'macos'.
 */
export function useWallpaperLuminance() {
  const osTheme = useStore((s) => s.osTheme);
  const wallpaperId = useStore((s) => s.wallpaperId);

  useEffect(() => {
    // Only active in macOS mode
    if (osTheme !== 'macos') return;

    const wallpaper = ALL_WALLPAPERS.find((w) => w.id === wallpaperId);
    if (!wallpaper) return;

    // Getter for the setter — stable Zustand reference, not in deps
    const setTheme = (result: 'light' | 'dark') =>
      useStore.getState().setWallpaperTextTheme(result);

    // 1. In-memory cache — only analyse once per unique wallpaperId
    if (memCache.has(wallpaperId)) {
      setTheme(memCache.get(wallpaperId)!);
      return;
    }

    // 2. localStorage persistent cache
    const persisted = readCache(wallpaperId);
    if (persisted) {
      memCache.set(wallpaperId, persisted);
      setTheme(persisted);
      return;
    }

    // 3. Solid color — instant hex calculation, no canvas needed
    if (wallpaper.kind === 'color' && wallpaper.colorHex) {
      const result: 'light' | 'dark' = hexLuminance(wallpaper.colorHex) > 128 ? 'light' : 'dark';
      memCache.set(wallpaperId, result);
      writeCache(wallpaperId, result);
      setTheme(result);
      return;
    }

    // 4. Picture / live wallpaper — canvas analysis runs exactly once per URL
    if (!wallpaper.url) return;
    analyseImageUrl(wallpaper.url).then((result) => {
      memCache.set(wallpaperId, result);
      writeCache(wallpaperId, result);
      setTheme(result);
    });
  // Only depends on what changes meaningfully: mode switch or wallpaper change
  }, [osTheme, wallpaperId]);
}
