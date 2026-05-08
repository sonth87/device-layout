'use client';

import { useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { useStore } from '@/store';
import { useTheme } from '@/hooks/useTheme';
import { useViewportSize } from '@/hooks/useResizeObserver';
import { fitWindowRectToViewport } from '@/lib/window-math';
import { Window } from './Window';
import { useWindowUrlSync } from '@/hooks/useWindowUrlSync';

export function WindowManager() {
  useWindowUrlSync();

  const windows = useStore((s) => s.windows);
  const apps = useStore((s) => s.apps);
  const resizeWindow = useStore((s) => s.resizeWindow);
  const viewport = useViewportSize();
  const { config } = useTheme();

  useEffect(() => {
    const viewportRect = {
      x: 0,
      y: config.layout.window.maximizeInsets.top,
      width: viewport.width,
      height: Math.max(1, viewport.height - config.layout.window.maximizeInsets.top - config.layout.window.maximizeInsets.bottom),
    };

    for (const win of Object.values(windows)) {
      const appConfig = apps[win.appId];
      if (!appConfig) continue;

      const nextRect = win.isMaximized
        ? viewportRect
        : fitWindowRectToViewport(win.rect, viewportRect, {
            minWidth: appConfig.minSize?.width ?? 320,
            minHeight: appConfig.minSize?.height ?? 240,
          });

      if (
        nextRect.x !== win.rect.x ||
        nextRect.y !== win.rect.y ||
        nextRect.width !== win.rect.width ||
        nextRect.height !== win.rect.height
      ) {
        resizeWindow(win.id, nextRect);
      }
    }
  }, [
    apps,
    windows,
    resizeWindow,
    viewport.width,
    viewport.height,
    config.layout.window.maximizeInsets.top,
    config.layout.window.maximizeInsets.bottom,
  ]);

  // Keep render order stable — zIndex in style handles visual stacking.
  // Sorting by zIndex here would reorder AnimatePresence children on every focus
  // and re-trigger the mount animation on the newly-focused window.
  const windowIds = Object.keys(windows);

  return (
    // Full-screen layer — pointer-events-none so clicks pass through to desktop
    // Individual Window components handle their own pointer events
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {windowIds.map((id) => (
          <Window key={id} windowId={id} />
        ))}
      </AnimatePresence>
    </div>
  );
}
