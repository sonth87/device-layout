import { WindowState, WindowRect } from '../types/window';
import { AppConfig } from '../types/app';
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
    syncWindowRect: (id: string, rect: WindowRect) => void;
    setWindowTitle: (id: string, title: string) => void;
    hydrateWindows: (windows: WindowState[]) => void;
}
type S = WindowSlice;
type Setter = (fn: (state: S) => void) => void;
type Getter = () => WindowSlice & {
    setRunning: (appId: string, running: boolean) => void;
    setActiveApp: (appId: string | null) => void;
};
export declare function createWindowSlice(set: Setter, get: Getter): WindowSlice;
export {};
