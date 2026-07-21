import { OSTheme } from './theme';

export interface SimpleModeFeatures {
  /** --- 1. Desktop & Wallpaper --- */
  /** Render wallpaper (image/video/color) instead of solid flat color. Default in simple mode: false */
  wallpaper?: boolean;
  /** Desktop right-click context menu. Default in simple mode: false */
  contextMenu?: boolean;
  /** Quick wallpaper picker modal on "Change Wallpaper..." click. Default in simple mode: false */
  wallpaperPicker?: boolean;
  /** Desktop icon grid for opening apps directly from desktop canvas. Default in simple mode: false */
  iconGrid?: boolean;

  /** --- 2. Top MenuBar --- */
  /** Sub-feature toggles for top status bar (or boolean to toggle all). Default in simple mode: false */
  menuBar?: boolean | {
    clock?: boolean;
    controlCenter?: boolean;
    spotlight?: boolean;
    appleMenu?: boolean;
    appNameMenu?: boolean;
    appSwitcher?: boolean;
  };

  /** --- 3. Widgets --- */
  /** Enable desktop widgets & widget gallery panel. Default in simple mode: false */
  widgets?: boolean | {
    showWidgets?: boolean;
    allowGalleryEdit?: boolean;
  };

  /** --- 4. Dock & Apps --- */
  /** Display bottom Dock element. Default in simple mode: false */
  dock?: boolean;
  /**
   * Auto-register default system apps.
   * - true: all built-in apps
   * - false: no built-in apps
   * - string[]: list of allowed app IDs (e.g. ['settings', 'calculator'])
   * Default in simple mode: false
   */
  defaultApps?: boolean | string[];

  /** --- 5. Theme & OS Switching --- */
  /**
   * Allowed OS themes in System Settings -> Appearance.
   * If array length is <= 1, OS theme selector in Settings is automatically hidden.
   * Default: ['macos'] (in simple mode) or all 5 OS themes (in full mode)
   */
  allowedOSThemes?: OSTheme[];
  /** Allow Light / Dark mode toggle. Default: true */
  allowDarkModeToggle?: boolean;
}

export type SimpleModeProp = boolean | SimpleModeFeatures;

/** Fully normalized simple mode features where every property is resolved to a concrete value */
export interface NormalizedSimpleModeFeatures {
  isSimpleModeActive: boolean;
  wallpaper: boolean;
  contextMenu: boolean;
  wallpaperPicker: boolean;
  iconGrid: boolean;
  menuBar: {
    enabled: boolean;
    clock: boolean;
    controlCenter: boolean;
    spotlight: boolean;
    appleMenu: boolean;
    appNameMenu: boolean;
    appSwitcher: boolean;
  };
  widgets: {
    showWidgets: boolean;
    allowGalleryEdit: boolean;
  };
  dock: boolean;
  defaultApps: boolean | string[];
  allowedOSThemes: OSTheme[];
  allowDarkModeToggle: boolean;
}
