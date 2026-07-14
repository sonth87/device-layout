export type OSTheme = 'macos' | 'ipad' | 'iphone' | 'windows' | 'android';
export type ColorScheme = 'light' | 'dark' | 'auto';
export type AccentColor = 'multicolor' | 'blue' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'graphite';
export type HighlightColor = 'automatic' | 'blue' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'graphite';

export interface ThemeInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface ThemeLayoutConfig {
  desktopInsets: ThemeInsets;
  chrome: {
    menuBarHeight: number;
    dockHeight: number;
    dockOffsetBottom: number;
    taskbarHeight: number;
    navBarHeight: number;
    statusBarHeight: number;
    windowChromeHeight: number;
  };
  window: {
    maximizeInsets: Pick<ThemeInsets, 'top' | 'bottom'>;
    dragTopInset: number;
    minTitleVisibleHeight: number;
  };
}

export interface ThemeConfig {
  id: OSTheme;
  name: string;
  description: string;
  hasLiquidGlass: boolean;
  hasFloatingWindows: boolean;
  hasDock: boolean;
  hasMenuBar: boolean;
  hasTaskbar: boolean;
  hasNavBar: boolean;
  defaultWallpaper: string;
  layout: ThemeLayoutConfig;
}
