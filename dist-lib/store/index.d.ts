import 'zustand/middleware/immer';
import { Mutate, StoreApi, UseBoundStore } from 'zustand';
import { WindowSlice } from './window-slice';
import { AppSlice } from './app-slice';
import { ThemeSlice } from './theme-slice';
import { DesktopSlice } from './desktop-slice';
import { NotificationSlice } from './notification-slice';
import { VFSSlice } from './vfs-slice';
import { WidgetSlice } from './widget-slice';
export type RootStore = WindowSlice & AppSlice & ThemeSlice & DesktopSlice & NotificationSlice & VFSSlice & WidgetSlice;
/**
 * Explicit return type — without it, TypeScript's declaration emitter tries
 * to name zustand/immer's internal `WritableNonArrayDraft` type (not
 * publicly exported by immer) and fails with TS4023, which silently drops
 * store/index.d.ts from the library build (see sky-app's device-layout port
 * notes). Mutate<...> mirrors the middleware stack (immer(persist(...)) —
 * outer-to-inner) so .persist.* stays typed instead of being annotated away.
 */
type StoreWithMiddlewares = Mutate<StoreApi<RootStore>, [
    ['zustand/immer', never],
    ['zustand/persist', unknown]
]>;
export declare const useStore: UseBoundStore<StoreWithMiddlewares>;
export declare const useWindows: () => Record<string, import('../types/window').WindowState>;
export declare const useApps: () => Record<string, import('../lib').AppConfig>;
export declare const useOSTheme: () => import('../lib').OSTheme;
export declare const useColorScheme: () => "light" | "dark";
export declare const useGlassEnabled: () => boolean;
export declare const useNotifications: () => import('../types/notification').AppNotification[];
export declare const useUnreadCount: (appId?: string) => number;
export {};
