/**
 * Registers a document-level mousemove listener that reveals the fullscreen
 * window chrome (title bar) when the cursor hovers near the top edge, and
 * hides it again after the cursor leaves the title bar / peek zone.
 *
 * Driven by the `fullscreenChromeRevealed` store flag so that Window.tsx
 * animates the title bar overlay in lockstep.
 *
 * Call this once per theme shell component. It is a no-op when no window is
 * currently in fullscreen mode.
 */
export declare function useFullscreenPeek(): void;
