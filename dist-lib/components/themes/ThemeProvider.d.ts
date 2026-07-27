import { ResolveEditContextMenuItems } from '../desktop/EditContextMenu';
import { AppConfig } from '../../types/app';
import { WallpaperConfig } from '../../types/desktop';
import { SimpleModeProp } from '../../types/simple-mode';
import { ColorScheme, OSTheme } from '../../types/theme';
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
    /** Sets or overrides the active OS theme / platform ('macos' | 'windows' | 'ipad' | 'iphone' | 'android'). */
    osTheme?: OSTheme;
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
    /**
     * Host TOÀN QUYỀN can thiệp danh sách item của context menu Copy/Paste tự vẽ (EditContextMenu)
     * — thêm/bớt/ghi đè/sắp xếp lại, tuỳ theo `info.target` (vd chỉ can thiệp khi target nằm trong
     * 1 app cụ thể qua `target.closest('[data-app-id="..."]')`). Trả `null`/`undefined` = dùng
     * `defaultItems` y nguyên. Trả `[]` = tắt hẳn context menu tại vùng đó. Không truyền prop này =
     * dùng menu mặc định của device-layout cho mọi nơi (như trước khi có tuỳ chỉnh này) — thêm sau
     * feedback thật (2026-07-23): device-layout không nên "khoá cứng" context menu, chặn các app
     * nhúng (vd sky-app) tích hợp thêm mục riêng của chúng.
     */
    resolveEditContextMenuItems?: ResolveEditContextMenuItems;
}
/**
 * ThemeProvider — single root component.
 *
 * The desktop canvas (Wallpaper + IconGrid + WindowManager) is rendered
 * DIRECTLY inside this component and NEVER remounts on theme switch.
 * Only the chrome overlays (MacOSChrome, WindowsChrome, etc.) swap.
 * This prevents useWindowUrlSync from re-running and creating duplicate windows.
 */
export declare function ThemeProvider({ apps, defaultApps: defaultAppsProp, builtInApps, isSimpleMode, colorScheme: colorSchemeProp, osTheme: osThemeProp, fallbackMenuBarAppId, resolveEditContextMenuItems, }?: ThemeProviderProps): import("react").JSX.Element;
