import { WallpaperConfig } from '../../types/desktop';
interface WallpaperDetailPanelProps {
    wallpaper: WallpaperConfig;
    cycleGroup: 'builtin' | 'custom';
    variant?: 'vertical' | 'horizontal';
}
export declare function WallpaperDetailPanel({ wallpaper, cycleGroup, variant }: WallpaperDetailPanelProps): import("react").JSX.Element;
export {};
