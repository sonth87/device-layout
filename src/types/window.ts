export type ResizeEdge = 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';

export interface WindowRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface WindowState {
  id: string;
  appId: string;
  rect: WindowRect;
  /** Saved before maximize so we can restore */
  prevRect: WindowRect | null;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  /**
   * True macOS fullscreen (green traffic light) — distinct from isMaximized
   * (double-click title bar / "zoom"): fullscreen fills the ENTIRE viewport
   * (over the menu bar + dock, which auto-hide), whereas maximized only
   * fills the space between them. A window can't be both at once — entering
   * one clears the other (see window-slice.ts's enterFullScreen/toggleMaximize).
   */
  isFullScreen: boolean;
  isFocused: boolean;
  title: string;
  hasMenuBar: boolean;
  hasStatusBar: boolean;
}
