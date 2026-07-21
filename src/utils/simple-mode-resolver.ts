import { OSTheme } from '@/types/theme';
import { SimpleModeProp, SimpleModeFeatures, NormalizedSimpleModeFeatures } from '@/types/simple-mode';

const ALL_OS_THEMES: OSTheme[] = ['macos', 'windows', 'ipad', 'iphone', 'android'];

/**
 * Resolves a `SimpleModeProp` (`boolean | SimpleModeFeatures`) and `osTheme` into a fully normalized,
 * predictable feature flag object for internal rendering.
 */
export function resolveSimpleModeFeatures(
  isSimpleMode?: SimpleModeProp,
  osTheme: OSTheme = 'macos'
): NormalizedSimpleModeFeatures {
  // Case 1: Simple Mode is disabled or false (Full OS Mode)
  if (!isSimpleMode) {
    return {
      isSimpleModeActive: false,
      wallpaper: true,
      contextMenu: true,
      wallpaperPicker: true,
      iconGrid: true,
      menuBar: {
        enabled: true,
        clock: true,
        controlCenter: true,
        spotlight: true,
        appleMenu: true,
        appNameMenu: true,
        appSwitcher: true,
      },
      widgets: {
        showWidgets: true,
        allowGalleryEdit: true,
      },
      dock: true,
      defaultApps: true,
      allowedOSThemes: ALL_OS_THEMES,
      allowDarkModeToggle: true,
    };
  }

  // Case 2: Simple Mode is boolean `true` (Full Minimal Mode)
  if (isSimpleMode === true) {
    return {
      isSimpleModeActive: true,
      wallpaper: false,
      contextMenu: false,
      wallpaperPicker: false,
      iconGrid: false,
      menuBar: {
        enabled: true, // Render container top bar
        clock: false,
        controlCenter: false,
        spotlight: false,
        appleMenu: false,
        appNameMenu: true,
        appSwitcher: false,
      },
      widgets: {
        showWidgets: false,
        allowGalleryEdit: false,
      },
      dock: false,
      defaultApps: false,
      allowedOSThemes: [osTheme], // Default to current OS theme only
      allowDarkModeToggle: true,
    };
  }

  // Case 3: Simple Mode is a custom `SimpleModeFeatures` object
  const custom = isSimpleMode as SimpleModeFeatures;

  // Resolve MenuBar
  let menuBarConfig = {
    enabled: true,
    clock: false,
    controlCenter: false,
    spotlight: false,
    appleMenu: false,
    appNameMenu: true,
    appSwitcher: false,
  };

  if (typeof custom.menuBar === 'boolean') {
    menuBarConfig = {
      enabled: custom.menuBar,
      clock: custom.menuBar,
      controlCenter: custom.menuBar,
      spotlight: custom.menuBar,
      appleMenu: custom.menuBar,
      appNameMenu: custom.menuBar,
      appSwitcher: custom.menuBar,
    };
  } else if (typeof custom.menuBar === 'object' && custom.menuBar !== null) {
    menuBarConfig = {
      enabled: true,
      clock: Boolean(custom.menuBar.clock),
      controlCenter: Boolean(custom.menuBar.controlCenter),
      spotlight: Boolean(custom.menuBar.spotlight),
      appleMenu: Boolean(custom.menuBar.appleMenu),
      appNameMenu: custom.menuBar.appNameMenu ?? true,
      appSwitcher: Boolean(custom.menuBar.appSwitcher),
    };
  }

  // Resolve Widgets
  let widgetsConfig = {
    showWidgets: false,
    allowGalleryEdit: false,
  };

  if (typeof custom.widgets === 'boolean') {
    widgetsConfig = {
      showWidgets: custom.widgets,
      allowGalleryEdit: custom.widgets,
    };
  } else if (typeof custom.widgets === 'object' && custom.widgets !== null) {
    widgetsConfig = {
      showWidgets: Boolean(custom.widgets.showWidgets),
      allowGalleryEdit: Boolean(custom.widgets.allowGalleryEdit),
    };
  }

  // Resolve Allowed OS Themes
  const allowedOSThemes = custom.allowedOSThemes && custom.allowedOSThemes.length > 0
    ? custom.allowedOSThemes
    : [osTheme];

  return {
    isSimpleModeActive: true,
    wallpaper: Boolean(custom.wallpaper),
    contextMenu: Boolean(custom.contextMenu),
    wallpaperPicker: Boolean(custom.wallpaperPicker ?? custom.wallpaper),
    iconGrid: Boolean(custom.iconGrid),
    menuBar: menuBarConfig,
    widgets: widgetsConfig,
    dock: Boolean(custom.dock),
    defaultApps: custom.defaultApps ?? false,
    allowedOSThemes,
    allowDarkModeToggle: custom.allowDarkModeToggle ?? true,
  };
}
