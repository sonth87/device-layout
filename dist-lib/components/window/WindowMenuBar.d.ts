interface WindowMenuBarProps {
    windowId: string;
}
/**
 * Per-window menu bar — Windows-mode (and iPad, which shares the same
 * windowed-app pipeline) equivalent of macOS's global MenuBar. Each window
 * shows its OWN app's menuBarMenus, independent of focus/activeAppId — this
 * matches real Windows behavior (every window keeps its own menu bar),
 * unlike macOS where the top menu bar swaps to whichever app is active.
 *
 * Reuses MenuDropdown (and its submenu-flyout logic) from MenuBar.tsx rather
 * than duplicating it — same items dispatch through the same
 * 'app:menu:action' CustomEvent, just always including this window's id so
 * useMenuAction(appId, handler, windowId) can filter per-window if needed.
 */
export declare function WindowMenuBar({ windowId }: WindowMenuBarProps): import("react/jsx-runtime").JSX.Element | null;
export {};
