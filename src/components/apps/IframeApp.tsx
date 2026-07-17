'use client';

import { useEffect } from 'react';
import { useStore } from '@/store';
import { useBrowser } from '@/hooks/useBrowser';
import type { AppContentProps } from './AppRegistry';

export function IframeApp({ appId }: AppContentProps) {
  const appConfig = useStore((s) => s.apps[appId]);
  const browser = useBrowser();

  // Log browser environment detection on mount
  useEffect(() => {
    console.log(
      `[IframeApp:${appId}] Initialized with ${browser.isElectron() ? 'Electron' : 'Web'} provider`
    );
  }, [appId, browser]);

  if (!appConfig?.iframeUrl) {
    return (
      <div className="flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40">
        No URL configured for this app.
      </div>
    );
  }

  return (
    <iframe
      src={appConfig.iframeUrl}
      className="w-full h-full border-0"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      title={appConfig.name}
    />
  );
}
