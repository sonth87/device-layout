import type { IconPosition, StackGroupBy } from '@/types/desktop';
import { DEFAULT_WALLPAPER_ID } from '@/config/wallpapers.config';
import { DEFAULT_DOCK_APPS } from '@/config/apps.config';

export interface DesktopSlice {
  wallpaperId: string;
  iconLayout: IconPosition[];
  dockAppIds: string[];
  useStacks: boolean;
  stackGroupBy: StackGroupBy;
  language: 'en' | 'vi' | 'ja' | 'ko' | 'zh' | 'th';

  setWallpaper: (id: string) => void;
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
    iconLayout: [],
    dockAppIds: DEFAULT_DOCK_APPS,
    useStacks: false,
    stackGroupBy: 'kind',
    language: 'en',

    setWallpaper(id) {
      set((state) => { state.wallpaperId = id; });
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

