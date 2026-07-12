'use client';

/**
 * Library entry point (Vite build — see vite.config.ts, mode "lib").
 *
 * This is a separate pipeline from the Next.js app (src/app/). It does NOT
 * import anything under src/app/ — a host application (e.g. an Electron
 * shell) embeds <DeviceLayout> directly instead of routing through Next.js.
 *
 * The Next.js app (src/app/desktop/page.tsx) continues to render
 * <ThemeProvider apps={APPS_CONFIG} /> unaffected by this file.
 */
import { ThemeProvider, type ThemeProviderProps } from '@/components/themes/ThemeProvider';
import { AssetBaseProvider } from '@/lib/asset-base';
import { WallpaperImportProvider, type ImportWallpaperFn } from '@/lib/wallpaper-import';
import { WallpaperCatalogProvider, buildWallpaperCatalog } from '@/lib/wallpaper-catalog';
import type { WallpaperConfig } from '@/types/desktop';
import './app/globals.css';

export interface DeviceLayoutProps extends ThemeProviderProps {
  /** Base URL prefix for static assets (wallpapers, icons). Default: '' (root-relative paths). */
  assetBaseUrl?: string;
  /**
   * Implements the Wallpaper picker's "Add a Photo" — open a native file
   * picker and return the imported WallpaperConfig. Omit to hide that
   * button (e.g. a host with no file-system access yet).
   */
  onImportWallpaper?: ImportWallpaperFn;
  /**
   * Overrides the "Pictures" section's built-in wallpaper list. Omit to use
   * device-layout's own full set (16 images) — a host that ships fewer
   * (e.g. to keep its own repo smaller) passes its own subset here instead.
   * Live wallpapers/colors are unaffected (device-layout still supplies those).
   */
  wallpapers?: WallpaperConfig[];
}

export function DeviceLayout({ assetBaseUrl = '', apps, onImportWallpaper, wallpapers }: DeviceLayoutProps) {
  const catalog = buildWallpaperCatalog(wallpapers);
  return (
    <AssetBaseProvider value={assetBaseUrl}>
      <WallpaperCatalogProvider value={catalog}>
        <WallpaperImportProvider value={onImportWallpaper ?? null}>
          <ThemeProvider apps={apps} />
        </WallpaperImportProvider>
      </WallpaperCatalogProvider>
    </AssetBaseProvider>
  );
}

export type { ThemeProviderProps } from '@/components/themes/ThemeProvider';
export type { AppConfig, AppContentProps, AppInstance, MenuBarMenu, MenuBarItem, ContextMenuAction } from '@/types/app';
export type { WallpaperConfig, WallpaperKind, WallpaperFitMode, WallpaperCycleInterval, WallpaperCycleConfig } from '@/types/desktop';
export type { ImportWallpaperFn } from '@/lib/wallpaper-import';
export { useAssetBase, resolveAssetUrl } from '@/lib/asset-base';
/**
 * Built-in demo apps (Finder, Notes, Calendar, Photos, Music, Terminal,
 * Settings, ...) — same list ThemeProvider defaults to when no `apps` prop
 * is passed. A host that wants both its own apps AND these built-ins
 * spreads both into the `apps` array: <DeviceLayout apps={[...APPS_CONFIG, ...myApps]} />.
 */
export { APPS_CONFIG } from '@/config/apps.config';
/**
 * Exposed so a host app can tell which app is currently active/focused —
 * e.g. to gate global keyboard listeners or a native OS menu so only the
 * focused app's handlers run (see docs/guides/adding-an-app.md in sky-app
 * for the R2-driven "1 app active at a time" contract this supports).
 */
export { useStore } from '@/store';
