'use client';

import { useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { useStore } from '@/store';
import { useTheme } from '@/hooks/useTheme';
import { useViewportSize } from '@/hooks/useResizeObserver';
import { fitWindowRectToViewport } from '@/lib/window-math';
import { Window } from './Window';
import { SnapAssist } from './SnapAssist';
import { useWindowUrlSync } from '@/hooks/useWindowUrlSync';

export function WindowManager() {
  useWindowUrlSync();

  const windows = useStore((s) => s.windows);
  const apps = useStore((s) => s.apps);
  const resizeWindow = useStore((s) => s.resizeWindow);
  const allowDragOutOfBounds = useStore((s) => s.allowDragOutOfBounds);
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

      let nextRect;
      if (win.isMaximized) {
        nextRect = viewportRect;
      } else {
        const minW = appConfig.minSize?.width ?? 320;
        const minH = appConfig.minSize?.height ?? 240;
        const nextWidth = Math.min(Math.max(win.rect.width, minW), viewport.width);
        const nextHeight = Math.min(Math.max(win.rect.height, minH), viewport.height);

        if (allowDragOutOfBounds) {
          const minOverlap = 200;
          const minOverlapX = Math.min(minOverlap, nextWidth);
          const minOverlapY = Math.min(minOverlap, nextHeight);

          const hardMinX = viewportRect.x - (nextWidth - minOverlapX);
          const hardMaxX = viewportRect.x + viewportRect.width - minOverlapX;
          const hardMinY = viewportRect.y; // Keep under menubar
          const hardMaxY = viewportRect.y + viewportRect.height - minOverlapY;

          nextRect = {
            x: Math.min(Math.max(win.rect.x, hardMinX), hardMaxX),
            y: Math.min(Math.max(win.rect.y, hardMinY), hardMaxY),
            width: nextWidth,
            height: nextHeight,
          };
        } else {
          nextRect = fitWindowRectToViewport(win.rect, viewportRect, {
            minWidth: minW,
            minHeight: minH,
          });
        }
      }

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
    allowDragOutOfBounds,
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
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      <SnapAssist />
      <AnimatePresence>
        {windowIds.map((id) => (
          <Window key={id} windowId={id} />
        ))}
      </AnimatePresence>
    </div>
  );
}
