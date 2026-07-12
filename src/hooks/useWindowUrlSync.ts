'use client';

import { useEffect } from 'react';
import { useStore } from '@/store';
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
  const urlHydrated = useStore((s) => s.urlHydrated);
  const setUrlHydrated = useStore((s) => s.setUrlHydrated);

  // Decode URL → open windows (only once, after apps are registered)
  useEffect(() => {
    if (urlHydrated) return;
    if (Object.keys(apps).length === 0) return; // wait for registerApps()

    const params = new URLSearchParams(window.location.search);
    const wParams = params.getAll('w');

    for (const param of wParams) {
      const decoded = decodeWindowFromParam(param);
      if (!decoded) continue;
      const appConfig = apps[decoded.appId];
      if (!appConfig) continue;
      openWindow(appConfig, {
        ...decoded.rect,
        isMaximized: decoded.isMaximized,
        isFullScreen: decoded.isFullScreen,
        prevRect: decoded.prevRect,
      });
    }

    setUrlHydrated(true);
  }, [apps, openWindow, urlHydrated, setUrlHydrated]);

  // Encode windows → URL
  useEffect(() => {
    if (!urlHydrated) return;

    const params = new URLSearchParams();
    for (const win of Object.values(windows)) {
      params.append('w', encodeWindowToParam(win));
    }

    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    if (newUrl !== window.location.href.replace(window.location.origin, '')) {
      window.history.replaceState(null, '', newUrl);
    }
  }, [windows, urlHydrated]);
}
