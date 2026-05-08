'use client';

import { useStore } from '@/store';
import type { AppContentProps } from './AppRegistry';

export function IframeApp({ appId }: AppContentProps) {
  const appConfig = useStore((s) => s.apps[appId]);

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
