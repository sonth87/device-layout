import type { WallpaperFitMode } from '@/types/desktop';
import type { CSSProperties } from 'react';

/** Maps macOS's Wallpaper fit dropdown (Fill/Fit/Stretch/Center/Tile) to CSS background-* properties. */
export function wallpaperFitToCss(mode: WallpaperFitMode): Pick<CSSProperties, 'backgroundSize' | 'backgroundRepeat' | 'backgroundPosition'> {
  switch (mode) {
    case 'fill':
      return { backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' };
    case 'fit':
      return { backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' };
    case 'stretch':
      return { backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' };
    case 'center':
      return { backgroundSize: 'auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' };
    case 'tile':
      return { backgroundSize: 'auto', backgroundRepeat: 'repeat', backgroundPosition: 'top left' };
  }
}
