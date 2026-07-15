/**
 * Subscribe to menu-bar action events dispatched for a specific app.
 *
 * Usage inside any app component:
 *   useMenuAction(appId, (action) => { ... });
 *
 * The menu bar dispatches 'app:menu:action' CustomEvents on window when
 * a menu item is clicked.
 *
 * `windowId` is optional — pass it when the same app can have multiple
 * windows open at once (e.g. Windows-mode/iPad per-window menu bar, see
 * WindowMenuBar.tsx) and the handler needs to act only on its own window's
 * menu clicks. Without it, the handler receives every action for `appId`
 * regardless of which window's menu dispatched it (macOS's global MenuBar
 * never sends `windowId`, so this keeps existing subscribers unaffected).
 */
export declare function useMenuAction(appId: string, handler: (action: string) => void, windowId?: string): void;
/**
 * Subscribe to desktop icon context-menu action events for a specific app.
 *
 * The desktop AppIcon dispatches 'app:context:action' CustomEvents on window
 * when a context menu item is selected.
 */
export declare function useContextAction(appId: string, handler: (action: string) => void): void;
