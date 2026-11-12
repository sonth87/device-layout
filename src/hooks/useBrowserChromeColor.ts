'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/store';
import { useResolvedWallpaper } from '@/hooks/useResolvedWallpaper';
import { resolveAssetUrl, useAssetBase } from '@/lib/asset-base';

/** Fallback when the wallpaper colour cannot be sampled (e.g. CORS-tainted canvas). */
const FALLBACK_COLOR = '#000000';
/** Matches MobileAppViewer's header: bg-white / dark:bg-neutral-900. */
const APP_VIEWER_LIGHT = '#ffffff';
const APP_VIEWER_DARK = '#171717';

const sampledCache = new Map<string, string>();

/** Average colour of the image's top strip — what sits right under the browser's top bar. */
function sampleTopColor(url: string): Promise<string> {
  const cached = sampledCache.get(url);
  if (cached) return Promise.resolve(cached);
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const w = 32;
        const h = 8;
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) return resolve(FALLBACK_COLOR);
        const srcH = Math.max(1, Math.round(img.naturalHeight * 0.08));
        ctx.drawImage(img, 0, 0, img.naturalWidth, srcH, 0, 0, w, h);
        const data = ctx.getImageData(0, 0, w, h).data;
        let r = 0, g = 0, b = 0;
        const n = data.length / 4;
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }
        const hex = (v: number) => Math.round(v / n).toString(16).padStart(2, '0');
        const color = `#${hex(r)}${hex(g)}${hex(b)}`;
        sampledCache.set(url, color);
        resolve(color);
      } catch {
        resolve(FALLBACK_COLOR);
      }
    };
    img.onerror = () => resolve(FALLBACK_COLOR);
    img.src = url;
  });
}

/**
 * On a real phone the browser draws its own status bar / toolbar areas around
 * the page and tints them from the page background (`<html>` background and
 * `<meta name="theme-color">`). Left alone they render white, which looks like
 * blank bands above and below the simulated phone. Keep them matched to what
 * is on screen: the open app's header colour, or the wallpaper otherwise.
 */
export function useBrowserChromeColor(enabled: boolean) {
  const hasOpenWindow = useStore((s) => Object.values(s.windows).some((w) => !w.isMinimized));
  const resolvedColorScheme = useStore((s) => s.resolvedColorScheme);
  const wallpaper = useResolvedWallpaper();
  const assetBase = useAssetBase();
  const [wallpaperColor, setWallpaperColor] = useState(FALLBACK_COLOR);

  const samplePath = wallpaper.kind === 'color' ? '' : (wallpaper.thumbnail || wallpaper.url || '');
  const sampleUrl = samplePath ? resolveAssetUrl(assetBase, samplePath) : '';

  useEffect(() => {
    if (!enabled) return;
    if (wallpaper.kind === 'color') {
      setWallpaperColor(wallpaper.colorHex || FALLBACK_COLOR);
      return;
    }
    if (!sampleUrl) {
      setWallpaperColor(FALLBACK_COLOR);
      return;
    }
    let cancelled = false;
    sampleTopColor(sampleUrl).then((c) => {
      if (!cancelled) setWallpaperColor(c);
    });
    return () => {
      cancelled = true;
    };
  }, [enabled, wallpaper.kind, wallpaper.colorHex, sampleUrl]);

  const color = hasOpenWindow
    ? (resolvedColorScheme === 'dark' ? APP_VIEWER_DARK : APP_VIEWER_LIGHT)
    : wallpaperColor;

  useEffect(() => {
    if (!enabled) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlBg = html.style.backgroundColor;
    const prevBodyBg = body.style.backgroundColor;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    const createdMeta = !meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    const prevMeta = meta.content;

    html.style.backgroundColor = color;
    body.style.backgroundColor = color;
    meta.content = color;

    return () => {
      html.style.backgroundColor = prevHtmlBg;
      body.style.backgroundColor = prevBodyBg;
      if (createdMeta) meta!.remove();
      else meta!.content = prevMeta;
    };
  }, [enabled, color]);
}
