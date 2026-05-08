import { nanoid } from 'nanoid';
import type { WindowState, WindowRect } from '@/types/window';
import type { AppConfig } from '@/types/app';
import { fitWindowRectToViewport } from '@/lib/window-math';

export interface WindowOpenOptions extends Partial<WindowRect> {
  isMaximized?: boolean;
  prevRect?: WindowRect | null;
}

export interface LaunchAppOptions extends WindowOpenOptions {
  forceNewWindow?: boolean;
}

export interface WindowSlice {
  windows: Record<string, WindowState>;
  zCounter: number;
  focusedWindowId: string | null;

  launchApp: (appConfig: AppConfig, options?: LaunchAppOptions) => string;
  openWindow: (appConfig: AppConfig, options?: WindowOpenOptions) => string;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  maximizeWindow: (id: string, viewportRect: WindowRect) => void;
  toggleMaximize: (id: string, viewportRect: WindowRect) => void;
  focusWindow: (id: string) => void;
  moveWindow: (id: string, x: number, y: number) => void;
  resizeWindow: (id: string, rect: WindowRect) => void;
  setWindowTitle: (id: string, title: string) => void;
  hydrateWindows: (windows: WindowState[]) => void;
}

type S = WindowSlice;
type Setter = (fn: (state: S) => void) => void;
type Getter = () => WindowSlice & {
  setRunning: (appId: string, running: boolean) => void;
  setActiveApp: (appId: string | null) => void;
};

function defaultRect(appConfig: AppConfig, overrides?: WindowOpenOptions): WindowRect {
  const width = overrides?.width ?? appConfig.defaultSize?.width ?? 800;
  const height = overrides?.height ?? appConfig.defaultSize?.height ?? 600;
  const x = overrides?.x ?? appConfig.defaultPosition?.x ?? Math.round((typeof window !== 'undefined' ? window.innerWidth : 1280) / 2 - width / 2);
  const y = overrides?.y ?? appConfig.defaultPosition?.y ?? Math.round((typeof window !== 'undefined' ? window.innerHeight : 800) / 2 - height / 2);

  if (typeof window === 'undefined') return { x, y, width, height };

  return fitWindowRectToViewport(
    { x, y, width, height },
    { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
    {
      minWidth: appConfig.minSize?.width ?? 320,
      minHeight: appConfig.minSize?.height ?? 240,
    }
  );
}

export function createWindowSlice(set: Setter, get: Getter): WindowSlice {
  return {
    windows: {},
    zCounter: 10,
    focusedWindowId: null,

    launchApp(appConfig, options) {
      const forceNewWindow = options?.forceNewWindow ?? false;
      const appWindows = Object.values(get().windows).filter((w) => w.appId === appConfig.id);

      if (!forceNewWindow) {
        const openWin = appWindows.find((w) => !w.isMinimized);
        if (openWin) {
          get().focusWindow(openWin.id);
          return openWin.id;
        }

        const minimizedWin = appWindows.find((w) => w.isMinimized);
        if (minimizedWin) {
          get().restoreWindow(minimizedWin.id);
          return minimizedWin.id;
        }
      }

      if (appConfig.launchMode !== 'multi' && appWindows[0]) {
        get().focusWindow(appWindows[0].id);
        return appWindows[0].id;
      }

      return get().openWindow(appConfig, options);
    },

    openWindow(appConfig, options) {
      const id = nanoid(8);
      set((state) => {
        state.zCounter += 1;
        state.windows[id] = {
          id,
          appId: appConfig.id,
          rect: defaultRect(appConfig, options),
          prevRect: options?.prevRect ?? null,
          zIndex: state.zCounter,
          isMinimized: false,
          isMaximized: options?.isMaximized ?? false,
          isFocused: true,
          title: appConfig.name,
          hasMenuBar: appConfig.hasMenuBar ?? false,
          hasStatusBar: appConfig.hasStatusBar ?? false,
        };
        for (const win of Object.values(state.windows)) {
          if (win.id !== id) win.isFocused = false;
        }
        state.focusedWindowId = id;
      });
      get().setRunning(appConfig.id, true);
      get().setActiveApp(appConfig.id);
      return id;
    },

    closeWindow(id) {
      const appId = get().windows[id]?.appId;
      set((state) => {
        delete state.windows[id];
        if (state.focusedWindowId === id) {
          const sorted = Object.values(state.windows).sort((a, b) => b.zIndex - a.zIndex);
          state.focusedWindowId = sorted[0]?.id ?? null;
          if (state.focusedWindowId) state.windows[state.focusedWindowId].isFocused = true;
        }
      });
      if (appId && !Object.values(get().windows).some((win) => win.appId === appId)) {
        get().setRunning(appId, false);
      }
    },

    minimizeWindow(id) {
      set((state) => {
        if (state.windows[id]) {
          state.windows[id].isMinimized = true;
          state.windows[id].isFocused = false;
        }
        if (state.focusedWindowId === id) {
          const sorted = Object.values(state.windows)
            .filter((w) => !w.isMinimized && w.id !== id)
            .sort((a, b) => b.zIndex - a.zIndex);
          state.focusedWindowId = sorted[0]?.id ?? null;
          if (state.focusedWindowId) state.windows[state.focusedWindowId].isFocused = true;
        }
      });
      const appId = get().windows[id]?.appId;
      if (appId && !Object.values(get().windows).some((win) => win.appId === appId && !win.isMinimized)) {
        get().setActiveApp(null);
      }
    },

    restoreWindow(id) {
      set((state) => {
        if (!state.windows[id]) return;
        state.windows[id].isMinimized = false;
        state.zCounter += 1;
        state.windows[id].zIndex = state.zCounter;
        for (const win of Object.values(state.windows)) {
          win.isFocused = win.id === id;
        }
        state.focusedWindowId = id;
      });
      const appId = get().windows[id]?.appId ?? null;
      get().setActiveApp(appId);
    },

    maximizeWindow(id, viewportRect) {
      set((state) => {
        if (!state.windows[id]) return;
        const win = state.windows[id];
        win.prevRect = { ...win.rect };
        win.isMaximized = true;
        win.rect = { ...viewportRect };
      });
    },

    toggleMaximize(id, viewportRect) {
      set((state) => {
        if (!state.windows[id]) return;
        const win = state.windows[id];
        if (win.isMaximized && win.prevRect) {
          win.rect = { ...win.prevRect };
          win.prevRect = null;
          win.isMaximized = false;
        } else {
          win.prevRect = { ...win.rect };
          win.isMaximized = true;
          win.rect = { ...viewportRect };
        }
      });
    },

    focusWindow(id) {
      set((state) => {
        if (!state.windows[id]) return;
        state.zCounter += 1;
        for (const win of Object.values(state.windows)) {
          win.isFocused = win.id === id;
        }
        state.windows[id].zIndex = state.zCounter;
        state.focusedWindowId = id;
      });
      const appId = get().windows[id]?.appId ?? null;
      get().setActiveApp(appId);
    },

    moveWindow(id, x, y) {
      set((state) => {
        if (state.windows[id]) {
          state.windows[id].rect.x = x;
          state.windows[id].rect.y = y;
        }
      });
    },

    resizeWindow(id, rect) {
      set((state) => {
        if (state.windows[id]) state.windows[id].rect = rect;
      });
    },

    setWindowTitle(id, title) {
      set((state) => {
        if (state.windows[id]) state.windows[id].title = title;
      });
    },

    hydrateWindows(windows) {
      set((state) => {
        state.windows = {};
        for (const win of windows) state.windows[win.id] = win;
        const maxZ = Math.max(0, ...windows.map((w) => w.zIndex));
        state.zCounter = maxZ;
        const focused = windows.find((w) => w.isFocused);
        state.focusedWindowId = focused?.id ?? null;
      });
      const runningAppIds = Array.from(new Set(windows.map((w) => w.appId)));
      for (const appId of runningAppIds) get().setRunning(appId, true);
    },
  };
}
