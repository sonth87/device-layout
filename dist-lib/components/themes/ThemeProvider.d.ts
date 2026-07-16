import { AppConfig } from '../../types/app';
export interface ThemeProviderProps {
    /**
     * Apps to register on mount. Defaults to the built-in APPS_CONFIG so
     * existing (Next.js) callers are unaffected. A host embedding this as a
     * library (see src/lib.tsx) passes its own app list here instead.
     */
    apps?: AppConfig[];
    /** Enables Simple Mode layout (no Dock, no default apps, no wallpaper image, no widgets, minimal top menu). */
    isSimpleMode?: boolean;
}
/**
 * ThemeProvider — single root component.
 *
 * The desktop canvas (Wallpaper + IconGrid + WindowManager) is rendered
 * DIRECTLY inside this component and NEVER remounts on theme switch.
 * Only the chrome overlays (MacOSChrome, WindowsChrome, etc.) swap.
 * This prevents useWindowUrlSync from re-running and creating duplicate windows.
 */
export declare function ThemeProvider({ apps, isSimpleMode }?: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
