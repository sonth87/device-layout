'use client';

import { useEffect } from 'react';

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
export function useMenuAction(
  appId: string,
  handler: (action: string) => void,
  windowId?: string
): void {
  useEffect(() => {
    const listener = (e: Event) => {
      const detail = (e as CustomEvent<{ appId: string; action: string; windowId?: string }>).detail;
      if (detail.appId !== appId) return;
      if (windowId && detail.windowId && detail.windowId !== windowId) return;
      handler(detail.action);
    };
    window.addEventListener('app:menu:action', listener);
    return () => window.removeEventListener('app:menu:action', listener);
  }, [appId, handler, windowId]);
}

/**
 * Subscribe to desktop icon context-menu action events for a specific app.
 *
 * The desktop AppIcon dispatches 'app:context:action' CustomEvents on window
 * when a context menu item is selected.
 */
export function useContextAction(
  appId: string,
  handler: (action: string) => void
): void {
  useEffect(() => {
    const listener = (e: Event) => {
      const detail = (e as CustomEvent<{ appId: string; action: string }>).detail;
      if (detail.appId === appId) handler(detail.action);
    };
    window.addEventListener('app:context:action', listener);
    return () => window.removeEventListener('app:context:action', listener);
  }, [appId, handler]);
}
