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
  isFocused: boolean;
  title: string;
  hasMenuBar: boolean;
  hasStatusBar: boolean;
}
