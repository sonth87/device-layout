'use client';

import { createContext, useContext } from 'react';
import type { WallpaperConfig } from '@/types/desktop';
import { WALLPAPERS, LIVE_WALLPAPERS, WALLPAPER_COLORS, ALL_WALLPAPERS, DEFAULT_WALLPAPER_ID } from '@/config/wallpapers.config';

export interface WallpaperCatalog {
  pictures: WallpaperConfig[];
  live: WallpaperConfig[];
  colors: WallpaperConfig[];
  all: WallpaperConfig[];
  defaultId: string;
}

const DEFAULT_CATALOG: WallpaperCatalog = {
  pictures: WALLPAPERS,
  live: LIVE_WALLPAPERS,
  colors: WALLPAPER_COLORS,
  all: ALL_WALLPAPERS,
  defaultId: DEFAULT_WALLPAPER_ID,
};

const WallpaperCatalogContext = createContext<WallpaperCatalog>(DEFAULT_CATALOG);

export const WallpaperCatalogProvider = WallpaperCatalogContext.Provider;

/**
 * Lets a host override which built-in wallpapers show up in the picker —
 * e.g. sky-app ships only a handful of the full device-layout asset set to
 * keep repo size down (see docs/dev/history.md), so it passes a `wallpapers`
 * prop to <DeviceLayout> instead of shipping all 16 pictures + 2 live videos.
 * Falls back to device-layout's own full built-in set when a host doesn't
 * override it (e.g. the Next.js dev app, which has the full asset set).
 */
export function useWallpaperCatalog(): WallpaperCatalog {
  return useContext(WallpaperCatalogContext);
}

export function buildWallpaperCatalog(pictures?: WallpaperConfig[]): WallpaperCatalog {
  if (!pictures) return DEFAULT_CATALOG;
  return {
    pictures,
    live: LIVE_WALLPAPERS,
    colors: WALLPAPER_COLORS,
    all: [...pictures, ...LIVE_WALLPAPERS, ...WALLPAPER_COLORS],
    defaultId: pictures[0]?.id ?? DEFAULT_WALLPAPER_ID,
  };
}
