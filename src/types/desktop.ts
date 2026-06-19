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

export interface WallpaperConfig {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
  themes?: string[]; // which OS themes this looks good on; empty = all
}

export interface DesktopConfig {
  wallpaper: string;
  iconLayout: IconPosition[];
  dockAppIds: string[];
}
