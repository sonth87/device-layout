/**
 * Mounted once at the desktop root (see ThemeProvider.tsx). Auto-advances
 * wallpaperId on a timer per wallpaperCycle's config — macOS's "Shuffle"
 * option in the Wallpaper picker, simplified to a fixed interval rather
 * than time-of-day/sunrise-sunset (see docs/dev/history.md's decision on
 * this — deliberately not doing the Dynamic Desktop day/night variant).
 * Colors are never included (matches macOS: Colors has no shuffle control).
 */
export declare function useWallpaperCycle(): void;
