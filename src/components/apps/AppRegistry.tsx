'use client';

import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import { useStore } from '@/store';

// Each app is code-split — loaded only when its window opens
const APP_COMPONENTS: Record<string, React.LazyExoticComponent<React.ComponentType<AppContentProps>>> = {
  Finder: lazy(() => import('./Finder').then((m) => ({ default: m.Finder }))),
  Terminal: lazy(() => import('./Terminal').then((m) => ({ default: m.Terminal }))),
  Settings: lazy(() => import('./Settings').then((m) => ({ default: m.Settings }))),
  Browser: lazy(() => import('./Browser').then((m) => ({ default: m.Browser }))),
  TextEditor: lazy(() => import('./TextEditor').then((m) => ({ default: m.TextEditor }))),
  Clock: lazy(() => import('./Clock').then((m) => ({ default: m.Clock }))),
  Notes: lazy(() => import('./Notes').then((m) => ({ default: m.Notes }))),
  Photos: lazy(() => import('./Photos').then((m) => ({ default: m.Photos }))),
  Music: lazy(() => import('./Music').then((m) => ({ default: m.Music }))),
  Calendar: lazy(() => import('./Calendar').then((m) => ({ default: m.Calendar }))),
  Messages: lazy(() => import('./Messages').then((m) => ({ default: m.Messages }))),
  IframeApp: lazy(() => import('./IframeApp').then((m) => ({ default: m.IframeApp }))),
  MdxApp: lazy(() => import('./MdxApp').then((m) => ({ default: m.MdxApp }))),
};

export interface AppContentProps {
  appId: string;
  windowId: string;
}

function AppLoadingSkeleton() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Loader2 className="w-6 h-6 animate-spin text-black/30 dark:text-white/30" />
    </div>
  );
}

export function AppContent({ appId, windowId }: AppContentProps) {
  const appConfig = useStore((s) => s.apps[appId]);

  if (!appConfig) {
    return (
      <div className="flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40">
        App not found: {appId}
      </div>
    );
  }

  const Component = APP_COMPONENTS[appConfig.component];
  if (!Component) {
    return (
      <div className="flex items-center justify-center h-full text-sm text-black/40 dark:text-white/40">
        Component not registered: {appConfig.component}
      </div>
    );
  }

  return (
    <Suspense fallback={<AppLoadingSkeleton />}>
      <Component appId={appId} windowId={windowId} />
    </Suspense>
  );
}
