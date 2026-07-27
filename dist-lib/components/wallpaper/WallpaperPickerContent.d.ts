/**
 * Full wallpaper picker content: the selected wallpaper's config panel on
 * top (preview + Fit Mode + Shuffle — macOS puts this at the top of the
 * right-hand pane, but with only one column here it reads better above the
 * lists), then Pictures / Colors / custom-folder sections stacked below,
 * each scrolling horizontally with "Show All" unrolling straight down in
 * place (no separate full-screen view — matches the flow of a single-column
 * settings panel). Rendered by both WallpaperPicker (desktop right-click
 * modal) and SettingsWallpaper (Settings app page).
 */
export declare function WallpaperPickerContent({ variant }?: {
    variant?: 'vertical' | 'horizontal';
}): import("react").JSX.Element;
