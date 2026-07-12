import { create, type Mutate, type StoreApi, type UseBoundStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createWindowSlice, type WindowSlice } from './window-slice';
import { createAppSlice, type AppSlice } from './app-slice';
import { createThemeSlice, type ThemeSlice } from './theme-slice';
import { createDesktopSlice, type DesktopSlice } from './desktop-slice';
import { createNotificationSlice, type NotificationSlice } from './notification-slice';
import { createVFSSlice, type VFSSlice } from './vfs-slice';
import { createWidgetSlice, type WidgetSlice } from './widget-slice';

export type RootStore = WindowSlice & AppSlice & ThemeSlice & DesktopSlice & NotificationSlice & VFSSlice & WidgetSlice;

/**
 * Explicit return type — without it, TypeScript's declaration emitter tries
 * to name zustand/immer's internal `WritableNonArrayDraft` type (not
 * publicly exported by immer) and fails with TS4023, which silently drops
 * store/index.d.ts from the library build (see sky-app's device-layout port
 * notes). Mutate<...> mirrors the middleware stack (immer(persist(...)) —
 * outer-to-inner) so .persist.* stays typed instead of being annotated away.
 */
type StoreWithMiddlewares = Mutate<
  StoreApi<RootStore>,
  [['zustand/immer', never], ['zustand/persist', unknown]]
>;

export const useStore: UseBoundStore<StoreWithMiddlewares> = create<RootStore>()(
  immer(
    persist(
      // The set function passed by immer is typed as (fn: (state: RootStore) => void) => void
      // which is compatible with each slice factory's Setter type since RootStore extends each slice.
      // We cast to unknown first to bridge the structural mismatch in Zustand's internal types.
      (set, get) => {
        const s = set as unknown as (fn: (state: RootStore) => void) => void;
        const g = get as unknown as () => RootStore;
        return {
          ...createWindowSlice(s, g as unknown as () => WindowSlice & {
            setRunning: (appId: string, running: boolean) => void;
            setActiveApp: (appId: string | null) => void;
          }),
          ...createAppSlice(s),
          ...createThemeSlice(s),
          ...createDesktopSlice(s),
          ...createNotificationSlice(s),
          ...createVFSSlice(s, g),
          ...createWidgetSlice(s, g as unknown as () => WidgetSlice & {
            windows: Record<string, { id: string; isMinimized: boolean }>;
            minimizeWindow: (id: string) => void;
            restoreWindow: (id: string) => void;
          }),
        };
      },
      {
        name: 'desktop-layout-store',
        storage: createJSONStorage(() => {
          if (typeof window === 'undefined') {
            return { getItem: () => null, setItem: () => {}, removeItem: () => {} };
          }
          return localStorage;
        }),
        partialize: (state) => ({
          osTheme: state.osTheme,
          colorScheme: state.colorScheme,
          glassEnabled: state.glassEnabled,
          wallpaperId: state.wallpaperId,
          wallpaperFitMode: state.wallpaperFitMode,
          customWallpapers: state.customWallpapers,
          wallpaperCycle: state.wallpaperCycle,
          iconLayout: state.iconLayout,
          dockAppIds: state.dockAppIds,
          dockSize: state.dockSize,
          dockMagnification: state.dockMagnification,
          useStacks: state.useStacks,
          stackGroupBy: state.stackGroupBy,
          notifications: state.notifications,
          vfs: state.vfs,
          widgetInstances: state.widgetInstances,
          language: state.language,
        }),
      }
    )
  )
);

export const useWindows = () => useStore((s) => s.windows);
export const useApps = () => useStore((s) => s.apps);
export const useOSTheme = () => useStore((s) => s.osTheme);
export const useColorScheme = () => useStore((s) => s.resolvedColorScheme);
export const useGlassEnabled = () => useStore((s) => s.glassEnabled);
export const useNotifications = () => useStore((s) => s.notifications);
export const useUnreadCount = (appId?: string) =>
  useStore((s) => s.notifications.filter((n) => !n.read && (!appId || n.appId === appId)).length);
