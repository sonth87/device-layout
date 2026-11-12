/**
 * On a real phone the browser draws its own status bar / toolbar areas around
 * the page and tints them from the page background (`<html>` background and
 * `<meta name="theme-color">`). Left alone they render white, which looks like
 * blank bands above and below the simulated phone. Keep them matched to what
 * is on screen: the open app's header colour, or the wallpaper otherwise.
 */
export declare function useBrowserChromeColor(enabled: boolean): void;
