import { AppConfig } from '../../types/app';
import { WallpaperConfig } from '../../types/desktop';
import { SimpleModeProp } from '../../types/simple-mode';
import { ColorScheme } from '../../types/theme';
export interface ThemeProviderProps {
    /**
     * Apps to register on mount. Defaults to the built-in APPS_CONFIG so
     * existing (Next.js) callers are unaffected. A host embedding this as a
     * library (see src/lib.tsx) passes its own app list here instead.
     */
    apps?: AppConfig[];
    /** Controls which built-in default apps (Finder, Notes, Calculator...) to register (boolean | string[]). */
    defaultApps?: boolean | string[];
    /** Alias for defaultApps (e.g. builtInApps={false}). */
    builtInApps?: boolean;
    /** Enables Simple Mode layout (boolean or detailed SimpleModeFeatures object). */
    isSimpleMode?: SimpleModeProp;
    /** Sets or overrides active color scheme ('dark' | 'light' | 'auto'). */
    colorScheme?: ColorScheme;
    /**
     * App ID to display in top MenuBar when no window is selected/focused.
     * Default: null (no app name or menus rendered when no window is focused).
     */
    fallbackMenuBarAppId?: string | null;
    /** Overrides the "Pictures" section's built-in wallpaper list. */
    wallpapers?: WallpaperConfig[];
    /** Overrides or supplies custom "Live Wallpapers". */
    liveWallpapers?: WallpaperConfig[];
    /** Controls whether to show or hide the "Live Wallpapers" section in wallpaper picker. Default: true */
    allowLiveWallpapers?: boolean;
}
/**
 * ThemeProvider — single root component.
 *
 * The desktop canvas (Wallpaper + IconGrid + WindowManager) is rendered
 * DIRECTLY inside this component and NEVER remounts on theme switch.
 * Only the chrome overlays (MacOSChrome, WindowsChrome, etc.) swap.
 * This prevents useWindowUrlSync from re-running and creating duplicate windows.
 */
export declare function ThemeProvider({ apps, defaultApps: defaultAppsProp, builtInApps, isSimpleMode, colorScheme: colorSchemeProp, fallbackMenuBarAppId, }?: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
