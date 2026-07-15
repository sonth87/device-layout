import { WallpaperConfig } from '../types/desktop';
/** "Pictures" section — built-in static photos, shown in the picker's horizontal scroller. */
export declare const WALLPAPERS: WallpaperConfig[];
/** "Live Wallpapers" — each entry maps to a video in /wallpapers/live/. */
export declare const LIVE_WALLPAPERS: WallpaperConfig[];
/**
 * "Colors" section — solid-color wallpapers, macOS-style swatch set. No
 * url/thumbnail (rendered as a plain background-color div, see Wallpaper.tsx).
 */
export declare const WALLPAPER_COLORS: WallpaperConfig[];
/** All built-in wallpapers (pictures + live + colors) — used for id lookups. */
export declare const ALL_WALLPAPERS: WallpaperConfig[];
export declare const DEFAULT_WALLPAPER_ID = "bg-1";
