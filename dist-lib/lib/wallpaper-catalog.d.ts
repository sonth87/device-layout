import { WallpaperConfig } from '../types/desktop';
export interface WallpaperCatalog {
    pictures: WallpaperConfig[];
    live: WallpaperConfig[];
    colors: WallpaperConfig[];
    all: WallpaperConfig[];
    defaultId: string;
}
export declare const WallpaperCatalogProvider: import('react').Provider<WallpaperCatalog>;
/**
 * Lets a host override which built-in wallpapers show up in the picker —
 * e.g. sky-app ships only a handful of the full device-layout asset set to
 * keep repo size down (see docs/dev/history.md), so it passes a `wallpapers`
 * prop to <DeviceLayout> instead of shipping all 16 pictures + 2 live videos.
 * Falls back to device-layout's own full built-in set when a host doesn't
 * override it (e.g. the Next.js dev app, which has the full asset set).
 */
export declare function useWallpaperCatalog(): WallpaperCatalog;
export declare function buildWallpaperCatalog(pictures?: WallpaperConfig[], liveWallpapers?: WallpaperConfig[], allowLiveWallpapers?: boolean): WallpaperCatalog;
