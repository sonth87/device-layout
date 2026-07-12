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
  useStacks: boolean;
  stackGroupBy: StackGroupBy;
  language: 'en' | 'vi' | 'ja' | 'ko' | 'zh' | 'th';

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
  toggleStacks: () => void;
  setStackGroupBy: (by: StackGroupBy) => void;
  setLanguage: (lang: 'en' | 'vi' | 'ja' | 'ko' | 'zh' | 'th') => void;
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
    useStacks: false,
    stackGroupBy: 'kind',
    language: 'en',

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

    toggleStacks() {
      set((state) => { state.useStacks = !state.useStacks; });
    },

    setStackGroupBy(by) {
      set((state) => { state.stackGroupBy = by; });
    },

    setLanguage(lang) {
      set((state) => { state.language = lang; });
    },
  };
}

