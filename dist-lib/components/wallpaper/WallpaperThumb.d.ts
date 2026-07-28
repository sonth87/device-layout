import { WallpaperConfig } from '../../types/desktop';
interface WallpaperThumbProps {
    wallpaper: WallpaperConfig;
    selected: boolean;
    /** Shown as a small badge (top-left) when this item is the active auto-cycle source (macOS shows a shuffle glyph on the selected custom-folder thumbnail). */
    cycling?: boolean;
    onClick: () => void;
    /** Colors render as plain circular swatches (macOS style); pictures/live render as rounded rectangular cards. */
    shape?: 'card' | 'circle';
    size?: 'sm' | 'md';
}
export declare function WallpaperThumb({ wallpaper, selected, cycling, onClick, shape, size }: WallpaperThumbProps): import("react/jsx-runtime").JSX.Element;
export {};
