'use client';

import { useEffect, useRef } from 'react';
import { useStore } from '@/store';
import { WALLPAPERS } from '@/config/wallpapers.config';
import type { WallpaperCycleInterval } from '@/types/desktop';

const INTERVAL_MS: Record<WallpaperCycleInterval, number> = {
  '5m': 5 * 60_000,
  '10m': 10 * 60_000,
  '30m': 30 * 60_000,
  '1h': 60 * 60_000,
  '2h': 2 * 60 * 60_000,
  '5h': 5 * 60 * 60_000,
  '1d': 24 * 60 * 60_000,
};

/**
 * Mounted once at the desktop root (see ThemeProvider.tsx). Auto-advances
 * wallpaperId on a timer per wallpaperCycle's config — macOS's "Shuffle"
 * option in the Wallpaper picker, simplified to a fixed interval rather
 * than time-of-day/sunrise-sunset (see docs/dev/history.md's decision on
 * this — deliberately not doing the Dynamic Desktop day/night variant).
 * Colors are never included (matches macOS: Colors has no shuffle control).
 */
export function useWallpaperCycle() {
  const cycle = useStore((s) => s.wallpaperCycle);
  const customWallpapers = useStore((s) => s.customWallpapers);
  const wallpaperId = useStore((s) => s.wallpaperId);
  const setWallpaper = useStore((s) => s.setWallpaper);
  const orderIndexRef = useRef(0);

  useEffect(() => {
    if (!cycle.enabled) return;

    const pool = cycle.group === 'custom' ? customWallpapers : WALLPAPERS;
    if (pool.length === 0) return;

    const advance = () => {
      if (cycle.randomOrder) {
        // Avoid repeating the current wallpaper back-to-back when the pool has more than one option.
        let next = pool[Math.floor(Math.random() * pool.length)];
        if (pool.length > 1) {
          let guard = 0;
          while (next.id === wallpaperId && guard < 10) {
            next = pool[Math.floor(Math.random() * pool.length)];
            guard += 1;
          }
        }
        setWallpaper(next.id);
      } else {
        orderIndexRef.current = (orderIndexRef.current + 1) % pool.length;
        setWallpaper(pool[orderIndexRef.current].id);
      }
    };

    const id = setInterval(advance, INTERVAL_MS[cycle.interval]);
    return () => clearInterval(id);
    // wallpaperId intentionally excluded — re-subscribing on every tick would
    // reset the interval timer each time advance() fires.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle.enabled, cycle.interval, cycle.randomOrder, cycle.group, customWallpapers, setWallpaper]);
}
