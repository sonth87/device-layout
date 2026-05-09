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
 */
export function useMenuAction(
  appId: string,
  handler: (action: string) => void
): void {
  useEffect(() => {
    const listener = (e: Event) => {
      const detail = (e as CustomEvent<{ appId: string; action: string }>).detail;
      if (detail.appId === appId) handler(detail.action);
    };
    window.addEventListener('app:menu:action', listener);
    return () => window.removeEventListener('app:menu:action', listener);
  }, [appId, handler]);
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
