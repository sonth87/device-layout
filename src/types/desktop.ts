export type StackGroupBy =
  | 'kind'
  | 'shared-by'
  | 'date-last-opened'
  | 'date-added'
  | 'date-modified'
  | 'date-created'
  | 'tags';

export interface IconPosition {

  appId: string;
  x: number; // pixel offset from grid container left
  y: number; // pixel offset from grid container top
}

export type WallpaperKind = 'picture' | 'color' | 'live';

/** How the image fills the desktop — mirrors macOS's Wallpaper settings dropdown. */
export type WallpaperFitMode = 'fill' | 'fit' | 'stretch' | 'center' | 'tile';

export interface WallpaperConfig {
  id: string;
  name: string;
  kind: WallpaperKind;
  /** picture/live only */
  url?: string;
  thumbnail?: string;
  themes?: string[]; // which OS themes this looks good on; empty = all
  videoUrl?: string;
  /** color only — CSS color (hex/rgb) */
  colorHex?: string;
}

/** How often auto-cycle picks a new wallpaper from the active group. */
export type WallpaperCycleInterval =
  | '5m' | '10m' | '30m' | '1h' | '2h' | '5h' | '1d';

export interface WallpaperCycleConfig {
  enabled: boolean;
  interval: WallpaperCycleInterval;
  /** true = pick randomly from the group; false = step through in order */
  randomOrder: boolean;
  /**
   * Which group auto-cycle draws from — 'builtin' (Pictures), 'custom' (the
   * user's imported folder), or a specific custom folder id once multiple
   * folders are supported. Colors aren't cycled (matches macOS: Colors has
   * no shuffle control in the picker).
   */
  group: 'builtin' | 'custom';
}

export interface DesktopConfig {
  wallpaper: string;
  iconLayout: IconPosition[];
  dockAppIds: string[];
}
