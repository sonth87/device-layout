import { WallpaperFitMode } from '../types/desktop';
import { CSSProperties } from 'react';
/** Maps macOS's Wallpaper fit dropdown (Fill/Fit/Stretch/Center/Tile) to CSS background-* properties. */
export declare function wallpaperFitToCss(mode: WallpaperFitMode): Pick<CSSProperties, 'backgroundSize' | 'backgroundRepeat' | 'backgroundPosition'>;
