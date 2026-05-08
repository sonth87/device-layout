export type OSTheme = 'macos' | 'ipad' | 'iphone' | 'windows' | 'android';
export type ColorScheme = 'light' | 'dark' | 'auto';

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
}
