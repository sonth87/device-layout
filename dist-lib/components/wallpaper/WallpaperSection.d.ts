import { WallpaperConfig } from '../../types/desktop';
interface WallpaperSectionProps {
    title: string;
    items: WallpaperConfig[];
    selectedId: string;
    cyclingGroup?: boolean;
    onSelect: (id: string) => void;
    /** Rendered before the swatches — macOS's Colors section has shuffle + add buttons here. */
    leadingActions?: React.ReactNode;
    shape?: 'card' | 'circle';
}
/**
 * One labelled horizontally-scrolling row (macOS's Wallpaper settings
 * "Pictures" / "Colors" / custom-folder sections) with a "Show All (N)"
 * toggle that unrolls straight down into a wrapping grid in place — no
 * separate full-screen view, matches a single-column settings panel.
 */
export declare function WallpaperSection({ title, items, selectedId, cyclingGroup, onSelect, leadingActions, shape, }: WallpaperSectionProps): import("react").JSX.Element | null;
export {};
