'use client';

import { useEffect } from 'react';
import { useStore } from '@/store';
import { useTheme } from '@/hooks/useTheme';
import { encodeWindowToParam, decodeWindowFromParam } from '@/lib/url-codec';

/**
 * Syncs open window state ↔ URL search params.
 *
 * On mount: waits for app registry, then reads `?w=` params and hydrates the store.
 * On store change: writes current windows back to URL (shallow replaceState).
 */
export function useWindowUrlSync() {
  const windows = useStore((s) => s.windows);
  const apps = useStore((s) => s.apps);
  const openWindow = useStore((s) => s.openWindow);
  const focusWindow = useStore((s) => s.focusWindow);
  const urlHydrated = useStore((s) => s.urlHydrated);
  const setUrlHydrated = useStore((s) => s.setUrlHydrated);
  const { config } = useTheme();

  // Decode URL → open windows (only once, after apps are registered)
  useEffect(() => {
    if (urlHydrated) return;
    if (Object.keys(apps).length === 0) return; // wait for registerApps()

    const params = new URLSearchParams(window.location.search);
    const wParams = params.getAll('w');

    let focusedWindowId: string | null = null;

    for (const param of wParams) {
      const decoded = decodeWindowFromParam(param);
      if (!decoded) continue;
      const appConfig = apps[decoded.appId];
      if (!appConfig) continue;

      // If window was maximized or fullscreen when saved, use current viewport rect instead of saved rect.
      // This prevents layout issues when the browser is resized or opened on a different screen.
      let rectToUse = decoded.rect;
      if (decoded.isFullScreen) {
        rectToUse = {
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      } else if (decoded.isMaximized) {
        const { top, bottom } = config.layout.window.maximizeInsets;
        rectToUse = {
          x: 0,
          y: top,
          width: window.innerWidth,
          height: Math.max(1, window.innerHeight - top - bottom),
        };
      }

      const windowId = openWindow(appConfig, {
        ...rectToUse,
        isMaximized: decoded.isMaximized,
        isFullScreen: decoded.isFullScreen,
        prevRect: decoded.prevRect,
      });
      // Track which window was focused when the URL was saved
      if (decoded.isFocused) focusedWindowId = windowId;
    }

    // Restore the focused window after all windows are opened
    if (focusedWindowId) focusWindow(focusedWindowId);

    setUrlHydrated(true);
  }, [apps, openWindow, focusWindow, urlHydrated, setUrlHydrated, config]);

  // Encode windows → URL
  useEffect(() => {
    if (!urlHydrated) return;

    const params = new URLSearchParams();
    for (const win of Object.values(windows)) {
      const param = encodeWindowToParam(win);
      if (param) params.append('w', param);
    }

    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    if (newUrl !== window.location.href.replace(window.location.origin, '')) {
      window.history.replaceState(null, '', newUrl);
    }
  }, [windows, urlHydrated]);
}
