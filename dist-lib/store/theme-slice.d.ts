import { OSTheme, ColorScheme, AccentColor, HighlightColor } from '../types/theme';
export interface ThemeSlice {
    osTheme: OSTheme;
    colorScheme: ColorScheme;
    resolvedColorScheme: 'light' | 'dark';
    glassEnabled: boolean;
    accentColor: AccentColor;
    highlightColor: HighlightColor;
    allowDragOutOfBounds: boolean;
    setOSTheme: (theme: OSTheme) => void;
    setColorScheme: (scheme: ColorScheme) => void;
    setGlassEnabled: (enabled: boolean) => void;
    resolveColorScheme: (systemDark: boolean) => void;
    setAccentColor: (color: AccentColor) => void;
    setHighlightColor: (color: HighlightColor) => void;
    setAllowDragOutOfBounds: (val: boolean) => void;
}
type S = ThemeSlice;
type Setter = (fn: (state: S) => void) => void;
export declare function createThemeSlice(set: Setter): ThemeSlice;
export {};
