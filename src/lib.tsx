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
import { MenuBarExtrasProvider, type MenuBarExtraItem } from '@/lib/menu-bar-extras';
import { CustomOSIconProvider } from '@/contexts/CustomOSIconContext';
import type { WallpaperConfig } from '@/types/desktop';
import type { SimpleModeProp } from '@/types/simple-mode';
import type { ColorScheme, OSTheme } from '@/types/theme';
import type { ResolveEditContextMenuItems } from '@/components/desktop/EditContextMenu';
import type { AppConfig } from '@/types/app';
import './app/globals.css';

export interface DeviceLayoutProps extends ThemeProviderProps {
  /** List of host applications to register and render on desktop/dock */
  apps?: AppConfig[];
  /** Controls which built-in default apps (Finder, Notes, Calculator...) to register (boolean | string[]). */
  defaultApps?: boolean | string[];
  /** Alias for defaultApps (e.g. builtInApps={false}). */
  builtInApps?: boolean;
  /** Enables Simple Mode layout (boolean or detailed SimpleModeFeatures object). */
  isSimpleMode?: SimpleModeProp;
  /** Sets or overrides active color scheme ('dark' | 'light' | 'auto'). */
  colorScheme?: ColorScheme;
  /** Sets or overrides the active OS theme / platform ('macos' | 'windows' | 'ipad' | 'iphone' | 'android'). */
  osTheme?: OSTheme;
  /** App ID to display in top MenuBar when no window is selected/focused. Default: null */
  fallbackMenuBarAppId?: string | null;
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
   * device-layout's own full set.
   */
  wallpapers?: WallpaperConfig[];
  /**
   * Overrides or supplies custom "Live Wallpapers".
   */
  liveWallpapers?: WallpaperConfig[];
  /**
   * Controls whether to show or hide the "Live Wallpapers" section in the wallpaper picker.
   * Default: true
   */
  allowLiveWallpapers?: boolean;
  /**
   * Implements OTA-update status + native "pick an update file" (offline
   * install via .zip/.dmg/.exe chosen manually — see apps/shell-electron/
   * src/updates.ts). Omit to hide the Update Settings section's status/
   * action rows (e.g. a host with no updater, like a web build).
   */
  updateActions?: UpdateActions;
  /**
   * Icon trạng thái host đăng ký trên menu bar, cạnh đồng hồ hệ thống — giống "menu bar
   * extras" của macOS thật (icon app nền như Dropbox/1Password). Bấm vào hiện popover
   * với nội dung do host cung cấp qua `content`. Ẩn hoàn toàn khi để trống/không truyền.
   */
  menuBarExtras?: MenuBarExtraItem[];
  /** Custom icon for macOS Apple menu (replaces the Apple glyph) */
  macOSAppleIcon?: React.ReactNode;
  /** Custom icon for Windows Start button (replaces the Windows SVG logo) */
  windowsStartIcon?: React.ReactNode;
  /** Host TOÀN QUYỀN can thiệp danh sách item của context menu Copy/Paste tự vẽ */
  resolveEditContextMenuItems?: ResolveEditContextMenuItems;
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

export function DeviceLayout(props: DeviceLayoutProps) {
  const {
    assetBaseUrl = 'https://device-layout.vercel.app',
    apps,
    defaultApps,
    builtInApps,
    onImportWallpaper,
    wallpapers,
    liveWallpapers,
    allowLiveWallpapers = true,
    updateActions,
    isSimpleMode,
    colorScheme,
    osTheme,
    fallbackMenuBarAppId,
    resolveEditContextMenuItems,
    menuBarExtras,
    macOSAppleIcon,
    windowsStartIcon,
  } = props;
  const catalog = buildWallpaperCatalog(wallpapers, liveWallpapers, allowLiveWallpapers);
  return (
    <AssetBaseProvider value={assetBaseUrl}>
      <WallpaperCatalogProvider value={catalog}>
        <WallpaperImportProvider value={onImportWallpaper ?? null}>
          <UpdateActionsProvider value={updateActions ?? null}>
            <MenuBarExtrasProvider value={menuBarExtras ?? []}>
              <CustomOSIconProvider config={{ macOSAppleIcon, windowsStartIcon }}>
                <UpdateStatusInitializer />
                <ThemeProvider
                  apps={apps}
                  defaultApps={defaultApps}
                  builtInApps={builtInApps}
                  isSimpleMode={isSimpleMode}
                  colorScheme={colorScheme}
                  osTheme={osTheme}
                  fallbackMenuBarAppId={fallbackMenuBarAppId}
                  wallpapers={wallpapers}
                  liveWallpapers={liveWallpapers}
                  allowLiveWallpapers={allowLiveWallpapers}
                  resolveEditContextMenuItems={resolveEditContextMenuItems}
                />
              </CustomOSIconProvider>
            </MenuBarExtrasProvider>
          </UpdateActionsProvider>
        </WallpaperImportProvider>
      </WallpaperCatalogProvider>
    </AssetBaseProvider>
  );
}

export type { ThemeProviderProps } from '@/components/themes/ThemeProvider';
export type { AppConfig, AppContentProps, AppInstance, MenuBarMenu, MenuBarItem, ContextMenuAction } from '@/types/app';
/**
 * Host (vd sky-app) truyền `resolveEditContextMenuItems` vào <DeviceLayout> để tự quyết định
 * danh sách item của context menu Copy/Paste tự vẽ — xem EditContextMenu.tsx's doc comment.
 */
export type { EditMenuEntry, EditContextMenuInfo, ResolveEditContextMenuItems } from '@/components/desktop/EditContextMenu';
export type { WallpaperConfig, WallpaperKind, WallpaperFitMode, WallpaperCycleInterval, WallpaperCycleConfig } from '@/types/desktop';
export type { SimpleModeProp, SimpleModeFeatures, NormalizedSimpleModeFeatures } from '@/types/simple-mode';

export type { MenuBarExtraItem, MenuBarExtraStatus } from '@/lib/menu-bar-extras';
/**
 * Cửa sổ nổi kéo-thả kiểu "About This Mac" — dùng cho panel thông tin/log ngắn hạn không
 * cần quản lý bởi WindowManager (không windowId, không vào Dock/App Switcher). `blocking`
 * mặc định true (chặn tương tác phía sau, giống About thật); đặt false cho cửa sổ tiện ích
 * muốn giữ mở song song khi vẫn thao tác app khác — vd cửa sổ xem log.
 */
export { FloatingWindow } from '@/components/shared/FloatingWindow';
export type { FloatingWindowProps } from '@/components/shared/FloatingWindow';
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
export type { ColorScheme, OSTheme } from '@/types/theme';
export { useStore } from '@/store';
