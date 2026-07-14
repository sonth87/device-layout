import type { OSTheme, ColorScheme, AccentColor, HighlightColor } from '@/types/theme';

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

export function createThemeSlice(set: Setter): ThemeSlice {
  return {
    osTheme: 'macos',
    colorScheme: 'auto',
    resolvedColorScheme: 'light',
    glassEnabled: true,
    accentColor: 'multicolor',
    highlightColor: 'automatic',
    allowDragOutOfBounds: true,

    setOSTheme(theme) {
      set((state) => { state.osTheme = theme; });
    },

    setColorScheme(scheme) {
      set((state) => { state.colorScheme = scheme; });
    },

    setGlassEnabled(enabled) {
      set((state) => { state.glassEnabled = enabled; });
    },

    resolveColorScheme(systemDark) {
      set((state) => {
        if (state.colorScheme === 'auto') {
          state.resolvedColorScheme = systemDark ? 'dark' : 'light';
        } else {
          state.resolvedColorScheme = state.colorScheme;
        }
      });
    },

    setAccentColor(color) {
      set((state) => { state.accentColor = color; });
    },

    setHighlightColor(color) {
      set((state) => { state.highlightColor = color; });
    },

    setAllowDragOutOfBounds(val) {
      set((state) => { state.allowDragOutOfBounds = val; });
    },
  };
}
