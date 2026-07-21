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
import { useEffect } from 'react';
import { ThemeProvider, type ThemeProviderProps } from '@/components/themes/ThemeProvider';
import { AssetBaseProvider } from '@/lib/asset-base';
import { WallpaperImportProvider, type ImportWallpaperFn } from '@/lib/wallpaper-import';
import { WallpaperCatalogProvider, buildWallpaperCatalog } from '@/lib/wallpaper-catalog';
import { UpdateActionsProvider, useUpdateActions, type UpdateActions } from '@/lib/update-actions';
import { useUpdateStatusStore } from '@/lib/update-status-store';
import type { WallpaperConfig } from '@/types/desktop';
import type { SimpleModeProp } from '@/types/simple-mode';
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
  /**
   * Implements OTA-update status + native "pick an update file" (offline
   * install via .zip/.dmg/.exe chosen manually — see apps/shell-electron/
   * src/updates.ts). Omit to hide the Update Settings section's status/
   * action rows (e.g. a host with no updater, like a web build).
   */
  updateActions?: UpdateActions;
  /** Enables Simple Mode layout (boolean or detailed SimpleModeFeatures object). */
  isSimpleMode?: SimpleModeProp;
}

/** Fetches update status once on mount so SidebarItem's badge (Settings.tsx)
 * can show it even before the user ever opens Settings — not tied to
 * SettingsUpdate.tsx's own lifecycle. */
function UpdateStatusInitializer() {
  const actions = useUpdateActions();
  useEffect(() => {
    if (!actions) return;
    actions.checkUpdate().then(useUpdateStatusStore.getState().setStatus).catch(() => {});
  }, [actions]);
  return null;
}

export function DeviceLayout({ assetBaseUrl = '', apps, onImportWallpaper, wallpapers, updateActions, isSimpleMode }: DeviceLayoutProps) {
  const catalog = buildWallpaperCatalog(wallpapers);
  return (
    <AssetBaseProvider value={assetBaseUrl}>
      <WallpaperCatalogProvider value={catalog}>
        <WallpaperImportProvider value={onImportWallpaper ?? null}>
          <UpdateActionsProvider value={updateActions ?? null}>
            <UpdateStatusInitializer />
            <ThemeProvider apps={apps} isSimpleMode={isSimpleMode} />
          </UpdateActionsProvider>
        </WallpaperImportProvider>
      </WallpaperCatalogProvider>
    </AssetBaseProvider>
  );
}

export type { ThemeProviderProps } from '@/components/themes/ThemeProvider';
export type { AppConfig, AppContentProps, AppInstance, MenuBarMenu, MenuBarItem, ContextMenuAction } from '@/types/app';
export type { WallpaperConfig, WallpaperKind, WallpaperFitMode, WallpaperCycleInterval, WallpaperCycleConfig } from '@/types/desktop';
export type { SimpleModeProp, SimpleModeFeatures, NormalizedSimpleModeFeatures } from '@/types/simple-mode';

export type { ImportWallpaperFn } from '@/lib/wallpaper-import';
export type { UpdateActions, UpdateStatus, PickUpdateFileResult, CheckUpdateFn, PickUpdateFileFn, UpdateProgress, UpdateProgressPhase, OnProgressFn } from '@/lib/update-actions';
export { useUpdateStatusStore, hasAvailableUpdate } from '@/lib/update-status-store';
export { useAssetBase, resolveAssetUrl } from '@/lib/asset-base';
/**
 * Subscribe to menu-bar / context-menu action CustomEvents dispatched for a
 * given appId — see docs/integration.md's "Action events reference".
 */
export { useMenuAction, useContextAction } from '@/hooks/useMenuAction';
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
