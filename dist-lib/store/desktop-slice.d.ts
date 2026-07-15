import { IconPosition, StackGroupBy, WallpaperConfig, WallpaperFitMode, WallpaperCycleConfig } from '../types/desktop';
export interface DesktopSlice {
    wallpaperId: string;
    /** How the current wallpaper image fills the desktop (Fill/Fit/Stretch/Center/Tile). No effect on solid colors. */
    wallpaperFitMode: WallpaperFitMode;
    /**
     * User-imported wallpapers (macOS's "wallpapers" custom folder section in
     * the picker). Electron: file copied into userData by the host, this only
     * stores the resolved path/thumbnail — see docs/guides in sky-app for the
     * IPC contract. Persisted like the rest of DesktopSlice.
     */
    customWallpapers: WallpaperConfig[];
    wallpaperCycle: WallpaperCycleConfig;
    iconLayout: IconPosition[];
    dockAppIds: string[];
    /** Base dock icon size in px (macOS's "Size" slider — Small↔Large). See dock/DockItem.tsx's BASE_SIZE. */
    dockSize: number;
    /**
     * Magnification factor applied to the icon nearest the cursor — 0 = "Off"
     * (macOS's leftmost slider position, no hover zoom). MAX_SIZE = dockSize *
     * (1 + dockMagnification), e.g. dockSize=43, magnification=0.6 → 68.8px max.
     */
    dockMagnification: number;
    dockAutoHide: boolean;
    showOpenAppIndicators: boolean;
    glassMode: 'clear' | 'tinted';
    useStacks: boolean;
    stackGroupBy: StackGroupBy;
    language: 'en' | 'vi' | 'ja' | 'ko' | 'zh' | 'th';
    desktopIconSize: number;
    desktopGridSpacing: number;
    desktopTextSize: number;
    desktopLabelPosition: 'bottom' | 'right';
    desktopSortBy: 'none' | 'name' | 'kind';
    desktopViewOptionsOpen: boolean;
    /** Luminance of the top strip of the current wallpaper (macOS only). */
    wallpaperTextTheme: 'light' | 'dark';
    setWallpaper: (id: string) => void;
    setWallpaperFitMode: (mode: WallpaperFitMode) => void;
    addCustomWallpaper: (wallpaper: WallpaperConfig) => void;
    removeCustomWallpaper: (id: string) => void;
    setWallpaperCycle: (config: Partial<WallpaperCycleConfig>) => void;
    moveIcon: (appId: string, x: number, y: number) => void;
    setIconLayout: (layout: IconPosition[]) => void;
    pinToDock: (appId: string) => void;
    unpinFromDock: (appId: string) => void;
    reorderDock: (appIds: string[]) => void;
    setDockSize: (size: number) => void;
    setDockMagnification: (magnification: number) => void;
    setDockAutoHide: (hide: boolean) => void;
    setShowOpenAppIndicators: (show: boolean) => void;
    setGlassMode: (mode: 'clear' | 'tinted') => void;
    toggleStacks: () => void;
    setStackGroupBy: (by: StackGroupBy) => void;
    setLanguage: (lang: 'en' | 'vi' | 'ja' | 'ko' | 'zh' | 'th') => void;
    setDesktopIconSize: (size: number) => void;
    setDesktopGridSpacing: (spacing: number) => void;
    setDesktopTextSize: (size: number) => void;
    setDesktopLabelPosition: (pos: 'bottom' | 'right') => void;
    setDesktopSortBy: (by: 'none' | 'name' | 'kind') => void;
    setDesktopViewOptionsOpen: (open: boolean) => void;
    setWallpaperTextTheme: (theme: 'light' | 'dark') => void;
}
type S = DesktopSlice;
type Setter = (fn: (state: S) => void) => void;
export declare function createDesktopSlice(set: Setter): DesktopSlice;
export {};
