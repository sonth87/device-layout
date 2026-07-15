/**
 * Prevents the host browser's native zoom (Ctrl+wheel / pinch-to-zoom)
 * and Safari's gesturestart/gesturechange pinch events from firing.
 *
 * Event propagation is NOT stopped, so individual app components can still
 * read wheel events (e.g. Photos zoom) — only the browser default is prevented.
 *
 * We also rely on `overscroll-behavior: none` in globals.css to block
 * the two-finger swipe-to-navigate gesture at the page level.
 */
export declare function GestureBlocker(): null;
