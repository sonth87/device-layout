import { WallpaperConfig } from '../types/desktop';
/**
 * Resolves the active wallpaperId to its full WallpaperConfig, searching
 * both built-in (the active WallpaperCatalog — see wallpaper-catalog.ts,
 * hosts can override which pictures are built in) and user-imported
 * (customWallpapers) sets. Falls back to the catalog's default wallpaper if
 * the id is missing/stale (e.g. a custom wallpaper whose file no longer
 * exists after a fresh install — see removeCustomWallpaper in
 * desktop-slice.ts for the normal removal path, this is a defensive
 * fallback for the persisted-but-gone case).
 */
export declare function useResolvedWallpaper(): WallpaperConfig;
