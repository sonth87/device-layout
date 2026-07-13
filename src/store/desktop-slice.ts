import type {
  IconPosition,
  StackGroupBy,
  WallpaperConfig,
  WallpaperFitMode,
  WallpaperCycleConfig,
} from '@/types/desktop';
import { DEFAULT_WALLPAPER_ID } from '@/config/wallpapers.config';
import { DEFAULT_DOCK_APPS } from '@/config/apps.config';

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
  useStacks: boolean;
  stackGroupBy: StackGroupBy;
  language: 'en' | 'vi' | 'ja' | 'ko' | 'zh' | 'th';
  desktopIconSize: number;
  desktopGridSpacing: number;
  desktopTextSize: number;
  desktopLabelPosition: 'bottom' | 'right';
  desktopSortBy: 'none' | 'name' | 'kind';
  desktopViewOptionsOpen: boolean;

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
  toggleStacks: () => void;
  setStackGroupBy: (by: StackGroupBy) => void;
  setLanguage: (lang: 'en' | 'vi' | 'ja' | 'ko' | 'zh' | 'th') => void;
  setDesktopIconSize: (size: number) => void;
  setDesktopGridSpacing: (spacing: number) => void;
  setDesktopTextSize: (size: number) => void;
  setDesktopLabelPosition: (pos: 'bottom' | 'right') => void;
  setDesktopSortBy: (by: 'none' | 'name' | 'kind') => void;
  setDesktopViewOptionsOpen: (open: boolean) => void;
}

type S = DesktopSlice;
type Setter = (fn: (state: S) => void) => void;

export function createDesktopSlice(set: Setter): DesktopSlice {
  return {
    wallpaperId: DEFAULT_WALLPAPER_ID,
    wallpaperFitMode: 'fill',
    customWallpapers: [],
    wallpaperCycle: {
      enabled: false,
      interval: '30m',
      randomOrder: true,
      group: 'builtin',
    },
    iconLayout: [],
    dockAppIds: DEFAULT_DOCK_APPS,
    // 43px ≈ previous hardcoded 54px BASE_SIZE − 20%. Magnification 0.48
    // preserves the old fixed MAX_SIZE=80 ratio ((80−54)/54) so hover-zoom
    // feels the same as before, just starting from a smaller base.
    dockSize: 43,
    dockMagnification: 0.48,
    dockAutoHide: false,
    showOpenAppIndicators: true,
    useStacks: false,
    stackGroupBy: 'kind',
    language: 'en',
    desktopIconSize: 64,
    desktopGridSpacing: 50,
    desktopTextSize: 12,
    desktopLabelPosition: 'bottom',
    desktopSortBy: 'none',
    desktopViewOptionsOpen: false,

    setWallpaper(id) {
      set((state) => { state.wallpaperId = id; });
    },

    setWallpaperFitMode(mode) {
      set((state) => { state.wallpaperFitMode = mode; });
    },

    addCustomWallpaper(wallpaper) {
      set((state) => {
        if (!state.customWallpapers.some((w) => w.id === wallpaper.id)) {
          state.customWallpapers.push(wallpaper);
        }
      });
    },

    removeCustomWallpaper(id) {
      set((state) => {
        state.customWallpapers = state.customWallpapers.filter((w) => w.id !== id);
        // Falls back to default if the removed wallpaper was active — a
        // dangling wallpaperId would otherwise resolve to nothing and show
        // the raw fallback color everywhere it's read.
        if (state.wallpaperId === id) state.wallpaperId = DEFAULT_WALLPAPER_ID;
      });
    },

    setWallpaperCycle(config) {
      set((state) => {
        state.wallpaperCycle = { ...state.wallpaperCycle, ...config };
      });
    },

    moveIcon(appId, x, y) {
      set((state) => {
        const existing = state.iconLayout.find((i) => i.appId === appId);
        if (existing) {
          existing.x = x;
          existing.y = y;
        } else {
          state.iconLayout.push({ appId, x, y });
        }
      });
    },

    setIconLayout(layout) {
      set((state) => { state.iconLayout = layout; });
    },

    pinToDock(appId) {
      set((state) => {
        if (!state.dockAppIds.includes(appId)) state.dockAppIds.push(appId);
      });
    },

    unpinFromDock(appId) {
      set((state) => {
        state.dockAppIds = state.dockAppIds.filter((id) => id !== appId);
      });
    },

    reorderDock(appIds) {
      set((state) => { state.dockAppIds = appIds; });
    },

    setDockSize(size) {
      set((state) => { state.dockSize = size; });
    },

    setDockMagnification(magnification) {
      set((state) => { state.dockMagnification = magnification; });
    },

    setDockAutoHide(hide) {
      set((state) => { state.dockAutoHide = hide; });
    },

    setShowOpenAppIndicators(show) {
      set((state) => { state.showOpenAppIndicators = show; });
    },

    toggleStacks() {
      set((state) => { state.useStacks = !state.useStacks; });
    },

    setStackGroupBy(by) {
      set((state) => { state.stackGroupBy = by; });
    },

    setLanguage(lang) {
      set((state) => { state.language = lang; });
    },

    setDesktopIconSize(size) {
      set((state) => { state.desktopIconSize = size; });
    },

    setDesktopGridSpacing(spacing) {
      set((state) => { state.desktopGridSpacing = spacing; });
    },

    setDesktopTextSize(size) {
      set((state) => { state.desktopTextSize = size; });
    },

    setDesktopLabelPosition(pos) {
      set((state) => { state.desktopLabelPosition = pos; });
    },

    setDesktopSortBy(by) {
      set((state) => { state.desktopSortBy = by; });
    },

    setDesktopViewOptionsOpen(open) {
      set((state) => { state.desktopViewOptionsOpen = open; });
    },
  };
}

