'use client';

import { useStore } from '@/store';
import { ALL_WALLPAPERS, DEFAULT_WALLPAPER_ID } from '@/config/wallpapers.config';
import type { WallpaperConfig } from '@/types/desktop';

/**
 * Resolves the active wallpaperId to its full WallpaperConfig, searching
 * both built-in (ALL_WALLPAPERS) and user-imported (customWallpapers) sets.
 * Falls back to the default built-in wallpaper if the id is missing/stale
 * (e.g. a custom wallpaper whose file no longer exists after a fresh
 * install — see removeCustomWallpaper in desktop-slice.ts for the normal
 * removal path, this is a defensive fallback for the persisted-but-gone case).
 */
export function useResolvedWallpaper(): WallpaperConfig {
  const wallpaperId = useStore((s) => s.wallpaperId);
  const customWallpapers = useStore((s) => s.customWallpapers);

  const found = [...ALL_WALLPAPERS, ...customWallpapers].find((w) => w.id === wallpaperId);
  if (found) return found;

  return ALL_WALLPAPERS.find((w) => w.id === DEFAULT_WALLPAPER_ID)!;
}
