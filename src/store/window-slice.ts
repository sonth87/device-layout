import { nanoid } from 'nanoid';
import type { WindowState, WindowRect } from '@/types/window';
import type { AppConfig } from '@/types/app';
import { fitWindowRectToViewport } from '@/lib/window-math';

export interface WindowOpenOptions extends Partial<WindowRect> {
  isMaximized?: boolean;
  isFullScreen?: boolean;
  prevRect?: WindowRect | null;
}

export interface LaunchAppOptions extends WindowOpenOptions {
  forceNewWindow?: boolean;
}

export interface WindowSlice {
  windows: Record<string, WindowState>;
  zCounter: number;
  focusedWindowId: string | null;
  /**
   * True while the menu bar + fullscreen window's title bar are peeking
   * (hover near top edge, or the auto-hide grace period) — ephemeral UI
   * state, NOT persisted. Lives here (not local state in MacOSTheme.tsx)
   * so Window.tsx can read the same value and slide its title bar down in
   * lockstep with the menu bar (see docs/dev/history.md's decision on this).
   */
  fullscreenChromeRevealed: boolean;
  setFullscreenChromeRevealed: (revealed: boolean) => void;

  urlHydrated: boolean;
  setUrlHydrated: (hydrated: boolean) => void;
  launchApp: (appConfig: AppConfig, options?: LaunchAppOptions) => string;
  openWindow: (appConfig: AppConfig, options?: WindowOpenOptions) => string;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  maximizeWindow: (id: string, viewportRect: WindowRect) => void;
  toggleMaximize: (id: string, viewportRect: WindowRect) => void;
  enterFullScreen: (id: string) => void;
  exitFullScreen: (id: string) => void;
  toggleFullScreen: (id: string) => void;
  focusWindow: (id: string) => void;
  moveWindow: (id: string, x: number, y: number) => void;
  resizeWindow: (id: string, rect: WindowRect, savePrev?: boolean) => void;
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
  const topInset = 30; // MenuBar height in macOS (plus 2px buffer)
  const bottomInset = 16;

  const winW = typeof window !== 'undefined' ? window.innerWidth : 1280;
  const winH = typeof window !== 'undefined' ? window.innerHeight : 800;

  const availableW = Math.max(1, winW);
  const availableH = Math.max(1, winH - topInset - bottomInset);

  const minW = appConfig.minSize?.width ?? 320;
  const minH = appConfig.minSize?.height ?? 240;

  const rawWidth = overrides?.width ?? appConfig.defaultSize?.width ?? 800;
  const rawHeight = overrides?.height ?? appConfig.defaultSize?.height ?? 600;

  // Clamp initial dimensions so they NEVER exceed maximum available viewport dimensions
  const width = Math.min(Math.max(rawWidth, Math.min(minW, availableW)), availableW);
  const height = Math.min(Math.max(rawHeight, Math.min(minH, availableH)), availableH);

  const defaultX = Math.max(0, Math.round((availableW - width) / 2));
  const defaultY = Math.max(topInset, Math.round(topInset + (availableH - height) / 2));

  const x = overrides?.x ?? appConfig.defaultPosition?.x ?? defaultX;
  const y = overrides?.y ?? appConfig.defaultPosition?.y ?? defaultY;

  if (typeof window === 'undefined') return { x, y, width, height };

  return fitWindowRectToViewport(
    { x, y, width, height },
    { x: 0, y: topInset, width: availableW, height: availableH },
    {
      minWidth: minW,
      minHeight: minH,
    }
  );
}

export function createWindowSlice(set: Setter, get: Getter): WindowSlice {
  return {
    windows: {},
    zCounter: 10,
    focusedWindowId: null,
    fullscreenChromeRevealed: false,
    setFullscreenChromeRevealed(revealed) {
      set((state) => { state.fullscreenChromeRevealed = revealed; });
    },
    urlHydrated: false,
    setUrlHydrated(hydrated) {
      set((state) => { state.urlHydrated = hydrated; });
    },

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
      // Prevent duplicate windows for single-instance apps (e.g. settings, calendar)
      if (appConfig.launchMode !== 'multi') {
        const existing = Object.values(get().windows).find((w) => w.appId === appConfig.id);
        if (existing) {
          get().focusWindow(existing.id);
          if (existing.isMinimized) {
            set((state) => {
              if (state.windows[existing.id]) {
                state.windows[existing.id].isMinimized = false;
              }
            });
          }
          return existing.id;
        }
      }

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
          isFullScreen: options?.isFullScreen ?? false,
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
      // Update active app based on new focused window
      const newFocusedId = get().focusedWindowId;
      if (newFocusedId) {
        const nextAppId = get().windows[newFocusedId]?.appId ?? null;
        get().setActiveApp(nextAppId);
      } else {
        get().setActiveApp(null);
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
      // Update active app based on new focused window
      const newFocusedId = get().focusedWindowId;
      if (newFocusedId) {
        const nextAppId = get().windows[newFocusedId]?.appId ?? null;
        get().setActiveApp(nextAppId);
      } else {
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
        if (win.isFullScreen || win.isMaximized) {
          if (win.prevRect) {
            win.rect = { ...win.prevRect };
            win.prevRect = null;
          } else {
            const defaultW = Math.min(800, viewportRect.width);
            const defaultH = Math.min(600, viewportRect.height);
            win.rect = {
              x: Math.round(viewportRect.width / 2 - defaultW / 2),
              y: Math.round(viewportRect.height / 2 - defaultH / 2),
              width: defaultW,
              height: defaultH,
            };
          }
          win.isFullScreen = false;
          win.isMaximized = false;
        } else {
          win.prevRect = { ...win.rect };
          win.isMaximized = true;
          win.rect = { ...viewportRect };
        }
      });
    },

    /**
     * True fullscreen (green traffic light) — chiếm TOÀN viewport, đè lên cả
     * menu bar/dock (chúng tự ẩn — xem MacOSChrome.tsx). Khác toggleMaximize:
     * không đổi win.rect (không cần biết insets), chỉ set flag; Window.tsx tự
     * quyết định style render dựa vào isFullScreen giống cách đã làm với
     * isMaximized. Không giữ prevRect riêng vì rect gốc không hề bị ghi đè.
     */
    enterFullScreen(id) {
      set((state) => {
        const win = state.windows[id];
        if (!win || win.isFullScreen) return;
        if (!win.prevRect) {
          win.prevRect = { ...win.rect };
        }
        win.isMaximized = false;
        win.isFullScreen = true;
      });
    },

    exitFullScreen(id) {
      set((state) => {
        const win = state.windows[id];
        if (!win || !win.isFullScreen) return;
        win.isFullScreen = false;
        if (win.prevRect) {
          win.rect = { ...win.prevRect };
          win.prevRect = null;
        }
      });
    },

    toggleFullScreen(id) {
      const win = get().windows[id];
      if (!win) return;
      if (win.isFullScreen) get().exitFullScreen(id);
      else get().enterFullScreen(id);
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

    resizeWindow(id, rect, savePrev = false) {
      set((state) => {
        const win = state.windows[id];
        if (win) {
          if (win.isFullScreen || win.isMaximized) {
            win.isFullScreen = false;
            win.isMaximized = false;
            win.prevRect = null;
          } else if (savePrev) {
            if (!win.prevRect) {
              win.prevRect = { ...win.rect };
            }
          } else {
            win.prevRect = null;
          }
          win.rect = rect;
        }
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
