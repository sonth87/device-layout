import { ThemeProviderProps } from './components/themes/ThemeProvider';
import { ImportWallpaperFn } from './lib/wallpaper-import';
import { UpdateActions } from './lib/update-actions';
import { WallpaperConfig } from './types/desktop';
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
}
export declare function DeviceLayout({ assetBaseUrl, apps, onImportWallpaper, wallpapers, updateActions }: DeviceLayoutProps): import("react/jsx-runtime").JSX.Element;
export type { ThemeProviderProps } from './components/themes/ThemeProvider';
export type { AppConfig, AppContentProps, AppInstance, MenuBarMenu, MenuBarItem, ContextMenuAction } from './types/app';
export type { WallpaperConfig, WallpaperKind, WallpaperFitMode, WallpaperCycleInterval, WallpaperCycleConfig } from './types/desktop';
export type { ImportWallpaperFn } from './lib/wallpaper-import';
export type { UpdateActions, UpdateStatus, PickUpdateFileResult, CheckUpdateFn, PickUpdateFileFn, UpdateProgress, UpdateProgressPhase, OnProgressFn } from './lib/update-actions';
export { useUpdateStatusStore, hasAvailableUpdate } from './lib/update-status-store';
export { useAssetBase, resolveAssetUrl } from './lib/asset-base';
/**
 * Subscribe to menu-bar / context-menu action CustomEvents dispatched for a
 * given appId — see docs/integration.md's "Action events reference".
 */
export { useMenuAction, useContextAction } from './hooks/useMenuAction';
/**
 * Built-in demo apps (Finder, Notes, Calendar, Photos, Music, Terminal,
 * Settings, ...) — same list ThemeProvider defaults to when no `apps` prop
 * is passed. A host that wants both its own apps AND these built-ins
 * spreads both into the `apps` array: <DeviceLayout apps={[...APPS_CONFIG, ...myApps]} />.
 */
export { APPS_CONFIG } from './config/apps.config';
/**
 * Exposed so a host app can tell which app is currently active/focused —
 * e.g. to gate global keyboard listeners or a native OS menu so only the
 * focused app's handlers run (see docs/guides/adding-an-app.md in sky-app
 * for the R2-driven "1 app active at a time" contract this supports).
 */
export { useStore } from './store';
