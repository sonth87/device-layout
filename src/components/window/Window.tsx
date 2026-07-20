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
  const exitFullScreen = useStore((s) => s.exitFullScreen);
  const fullscreenChromeRevealed = useStore((s) => s.fullscreenChromeRevealed);
  const apps = useStore((s) => s.apps);
  const { isFloating, isMobile, config } = useTheme();

  // Fullscreen has no chrome (no title bar / green button to click again) —
  // Escape is the only way out, matching real macOS. Only the focused
  // window's fullscreen exits (Escape shouldn't affect a background window).
  useEffect(() => {
    if (!win?.isFullScreen || !win.isFocused) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') exitFullScreen(windowId);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [win?.isFullScreen, win?.isFocused, windowId, exitFullScreen]);

  const mx = useMotionValue(win?.isFullScreen ? 0 : (win?.rect.x ?? 100));
  const my = useMotionValue(win?.isFullScreen ? 0 : (win?.rect.y ?? 100));
  const mw = useMotionValue(win?.isFullScreen ? (typeof window !== 'undefined' ? window.innerWidth : 800) : (win?.rect.width ?? 800));
  const mh = useMotionValue(win?.isFullScreen ? (typeof window !== 'undefined' ? window.innerHeight : 600) : (win?.rect.height ?? 600));

  // Animate rect changes (maximize/restore/fullscreen) with spring
  useEffect(() => {
    if (!win) return;
    const targetX = win.isFullScreen ? 0 : win.rect.x;
    const targetY = win.isFullScreen ? 0 : win.rect.y;
    const targetW = win.isFullScreen ? (typeof window !== 'undefined' ? window.innerWidth : 800) : win.rect.width;
    const targetH = win.isFullScreen ? (typeof window !== 'undefined' ? window.innerHeight : 600) : win.rect.height;

    animate(mx, targetX, { type: 'spring', stiffness: 400, damping: 35, mass: 0.8 });
    animate(my, targetY, { type: 'spring', stiffness: 400, damping: 35, mass: 0.8 });
    animate(mw, targetW, { type: 'spring', stiffness: 400, damping: 35, mass: 0.8 });
    animate(mh, targetH, { type: 'spring', stiffness: 400, damping: 35, mass: 0.8 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [win?.rect.x, win?.rect.y, win?.rect.width, win?.rect.height, win?.isFullScreen]);

  const { onPointerDown: onDragStart } = useWindowDrag({ windowId, x: mx, y: my, width: mw, height: mh });
  const appConfig = win ? apps[win.appId] : undefined;
  const { getResizeHandler } = useWindowResize({
    windowId, x: mx, y: my, width: mw, height: mh,
    minWidth: appConfig?.minSize?.width ?? 320,
    minHeight: appConfig?.minSize?.height ?? 240,
  });

  if (!win) return null;

  const isFloatingWindow = isFloating && !isMobile;

  return (
    <motion.div
      id={`window-${windowId}`}
      initial="hidden"
      animate={win.isMinimized ? 'minimized' : 'visible'}
      exit="exit"
      variants={{
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 500, damping: 38 } },
        minimized: { scale: 0.05, opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
        exit: { scale: 0.88, opacity: 0, transition: { duration: 0.15 } },
      }}
      style={
        (win.isFullScreen && config.hasMenuBar) || isMobile
          ? {
              position: 'absolute', inset: 0, x: 0, y: 0, width: '100%', height: '100%',
              zIndex: win.zIndex, transformOrigin: 'bottom center', borderRadius: win.isFullScreen ? 0 : 'var(--radius-window)',
            }
          : { position: 'absolute', x: mx, y: my, width: mw, height: mh, zIndex: win.zIndex, transformOrigin: 'bottom center', borderRadius: (win.isFullScreen || win.isMaximized) ? 0 : 'var(--radius-window)' }
      }
      className={cn(
        'flex flex-col overflow-hidden',
        win.isMinimized ? 'pointer-events-none' : 'pointer-events-auto',
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
      {/* Chrome (title bar) — normal flex-column member when floating/maximized.
          In true fullscreen it's hidden by default (macOS: no traffic
          lights/title while fullscreen) but slides down as an absolute
          overlay together with the system menu bar on hover-top — driven by
          the same fullscreenChromeRevealed store flag MacOSTheme.tsx sets,
          so both bars move in lockstep (see docs/dev/history.md). Overlay
          (not a flex member) so it doesn't push window content down when revealed. */}
      {/* Chrome (title bar) — normal flex-column member when floating, maximized, or non-macOS theme.
          In true macOS fullscreen it's hidden by default but slides down as an absolute overlay. */}
      {(!win.isFullScreen || !config.hasMenuBar) && (
        <div className={cn(appConfig?.titleBarMode === 'transparent' ? 'absolute top-0 inset-x-0 z-20' : 'relative')}>
          <WindowChrome windowId={windowId} onPointerDown={onDragStart} />
        </div>
      )}
      {win.isFullScreen && config.hasMenuBar && (
        <motion.div
          className="absolute top-0 inset-x-0 z-20"
          animate={{ y: fullscreenChromeRevealed ? 28 : '-100%' }}
          transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.8 }}
        >
          <WindowChrome windowId={windowId} onPointerDown={onDragStart} />
        </motion.div>
      )}

      {/* Optional per-window top menu bar — only for themes WITHOUT a global
          MenuBar (Windows, iPad): macOS already renders app menus in its
          top-level MenuBar (see MacOSTheme.tsx), so WindowMenuBar must stay
          hidden there even if the app declares hasMenuBar, or the same
          menuBarMenus would render twice. */}
      {win.hasMenuBar && !config.hasMenuBar && <WindowMenuBar windowId={windowId} />}

      {/* App content */}
      <div className="flex-1 overflow-auto min-h-0 window-body">
        <AppContent appId={win.appId} windowId={windowId} />
      </div>

      {/* Optional status bar */}
      {win.hasStatusBar && <WindowStatusBar windowId={windowId} />}

      {/* Resize handles — only floating, non-maximized, non-fullscreen */}
      {isFloatingWindow && !win.isMaximized && !win.isFullScreen && (
        <ResizeHandles getResizeHandler={getResizeHandler} />
      )}
    </motion.div>
  );
}
