'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';
import { useStore } from '@/store';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { WindowChrome } from './WindowChrome';
import { WindowMenuBar } from './WindowMenuBar';
import { WindowStatusBar } from './WindowStatusBar';
import { ResizeHandles } from './ResizeHandle';
import { useWindowDrag } from './useWindowDrag';
import { useWindowResize } from './useWindowResize';
import { AppContent } from '@/components/apps/AppRegistry';

interface WindowProps {
  windowId: string;
}

export function Window({ windowId }: WindowProps) {
  const win = useStore((s) => s.windows[windowId]);
  const focusWindow = useStore((s) => s.focusWindow);
  const setActiveApp = useStore((s) => s.setActiveApp);
  const apps = useStore((s) => s.apps);
  const { isFloating, isMobile } = useTheme();

  const mx = useMotionValue(win?.rect.x ?? 100);
  const my = useMotionValue(win?.rect.y ?? 100);
  const mw = useMotionValue(win?.rect.width ?? 800);
  const mh = useMotionValue(win?.rect.height ?? 600);

  // Animate rect changes (maximize/restore) with spring
  useEffect(() => {
    if (!win) return;
    animate(mx, win.rect.x, { type: 'spring', stiffness: 400, damping: 35, mass: 0.8 });
    animate(my, win.rect.y, { type: 'spring', stiffness: 400, damping: 35, mass: 0.8 });
    animate(mw, win.rect.width, { type: 'spring', stiffness: 400, damping: 35, mass: 0.8 });
    animate(mh, win.rect.height, { type: 'spring', stiffness: 400, damping: 35, mass: 0.8 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [win?.rect.x, win?.rect.y, win?.rect.width, win?.rect.height]);

  const { onPointerDown: onDragStart } = useWindowDrag({ windowId, x: mx, y: my });
  const appConfig = win ? apps[win.appId] : undefined;
  const { getResizeHandler } = useWindowResize({
    windowId, x: mx, y: my, width: mw, height: mh,
    minWidth: appConfig?.minSize?.width ?? 320,
    minHeight: appConfig?.minSize?.height ?? 240,
  });

  if (!win) return null;

  const isFullscreen = isMobile || win.isMaximized;
  const isFloatingWindow = isFloating && !isMobile;

  return (
    <motion.div
      id={`window-${windowId}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={
        win.isMinimized
          ? { scale: 0.05, opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } }
          : { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 500, damping: 38 } }
      }
      exit={{ scale: 0.88, opacity: 0, transition: { duration: 0.15 } }}
      style={
        isFullscreen
          ? { position: 'absolute', inset: 0, zIndex: win.zIndex, transformOrigin: 'bottom center' }
          : { position: 'absolute', x: mx, y: my, width: mw, height: mh, zIndex: win.zIndex, transformOrigin: 'bottom center' }
      }
      className={cn(
        'flex flex-col overflow-hidden',
        win.isMinimized ? 'pointer-events-none' : 'pointer-events-auto',
        'rounded-(--radius-window)',
        // Shadow: focused = strong, unfocused = subtle
        win.isFocused
          ? 'shadow-[0_22px_70px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]'
          : 'shadow-[0_8px_32px_rgba(0,0,0,0.25)]',
        // Slight opacity when not focused
        !win.isFocused && 'brightness-95',
        'bg-(--window-body-bg)',
        // Ring border for focused window
        win.isFocused ? 'ring-1 ring-white/20' : '',
      )}
      onPointerDown={(e) => {
        // Bring to front on any click
        focusWindow(windowId);
        if (win?.appId) setActiveApp(win.appId);
        e.stopPropagation();
      }}
    >
      {/* Chrome (title bar) — only for floating or maximized */}
      {(isFloatingWindow || win.isMaximized) && (
        <WindowChrome windowId={windowId} onPointerDown={onDragStart} />
      )}

      {/* Optional per-window top menu bar */}
      {win.hasMenuBar && <WindowMenuBar windowId={windowId} />}

      {/* App content */}
      <div className="flex-1 overflow-auto min-h-0 window-body">
        <AppContent appId={win.appId} windowId={windowId} />
      </div>

      {/* Optional status bar */}
      {win.hasStatusBar && <WindowStatusBar windowId={windowId} />}

      {/* Resize handles — only floating non-maximized */}
      {isFloatingWindow && !win.isMaximized && (
        <ResizeHandles getResizeHandler={getResizeHandler} />
      )}
    </motion.div>
  );
}
