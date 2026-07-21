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

export function buildWallpaperCatalog(
  pictures?: WallpaperConfig[],
  liveWallpapers?: WallpaperConfig[],
  allowLiveWallpapers: boolean = true
): WallpaperCatalog {
  const picturesLive = pictures ? pictures.filter((w) => w.kind === 'live') : [];
  const customLive = (liveWallpapers && liveWallpapers.length > 0) ? liveWallpapers : picturesLive;

  const effectiveLive = allowLiveWallpapers
    ? (customLive.length > 0 ? customLive : LIVE_WALLPAPERS)
    : [];

  const effectivePictures = pictures
    ? pictures.filter((w) => w.kind !== 'live' && w.kind !== 'color')
    : WALLPAPERS;

  const effectiveColors = WALLPAPER_COLORS;
  const all = [...effectivePictures, ...effectiveLive, ...effectiveColors];

  return {
    pictures: effectivePictures,
    live: effectiveLive,
    colors: effectiveColors,
    all,
    defaultId: all[0]?.id ?? DEFAULT_WALLPAPER_ID,
  };
}
