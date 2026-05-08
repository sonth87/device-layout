import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createWindowSlice, type WindowSlice } from './window-slice';
import { createAppSlice, type AppSlice } from './app-slice';
import { createThemeSlice, type ThemeSlice } from './theme-slice';
import { createDesktopSlice, type DesktopSlice } from './desktop-slice';
import { createNotificationSlice, type NotificationSlice } from './notification-slice';
import { createVFSSlice, type VFSSlice } from './vfs-slice';

export type RootStore = WindowSlice & AppSlice & ThemeSlice & DesktopSlice & NotificationSlice & VFSSlice;

export const useStore = create<RootStore>()(
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
          iconLayout: state.iconLayout,
          dockAppIds: state.dockAppIds,
          notifications: state.notifications,
          vfs: state.vfs,
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
