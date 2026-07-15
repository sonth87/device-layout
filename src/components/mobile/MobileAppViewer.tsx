'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useDragControls } from 'motion/react';
import { Menu } from 'lucide-react';
import { useStore } from '@/store';
import { AppContent } from '@/components/apps/AppRegistry';
import { MobileMenuSheet } from './MobileMenuSheet';

// Apps call this to hide the viewer's own header bar (e.g. when MobileSplitView
// takes over and shows its own navigation inside the detail panel).
const HideAppHeaderCtx = createContext<((hidden: boolean) => void) | null>(null);

export function useHideMobileAppHeader() {
  return useContext(HideAppHeaderCtx);
}

interface MobileAppViewerProps {
  statusBarHeight: number;
  navBarHeight: number;
  homeIndicatorHeight?: number;
}

export function MobileAppViewer({ statusBarHeight, navBarHeight, homeIndicatorHeight = 20 }: MobileAppViewerProps) {
  const windows = useStore((s) => s.windows);
  const apps = useStore((s) => s.apps);
  const closeWindow = useStore((s) => s.closeWindow);

  const [headerHidden, setHeaderHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openWindows = Object.values(windows)
    .filter((w) => !w.isMinimized)
    .sort((a, b) => b.zIndex - a.zIndex);

  const topWindow = openWindows[0] ?? null;

  const handleBack = useCallback(() => {
    if (!topWindow) return;
    closeWindow(topWindow.id);
  }, [topWindow, closeWindow]);

  const appConfig = topWindow ? apps[topWindow.appId] : null;

  const dragControls = useDragControls();
  const dragY = useMotionValue(0);
  const scale = useTransform(dragY, [0, -220], [1, 0.75]);
  const borderRadius = useTransform(dragY, [0, -220], [0, 48]);

  return (
    <AnimatePresence>
      {topWindow && appConfig && (
        <motion.div
          key={topWindow.id}
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 36 }}
          className="absolute inset-0 z-[500] bg-white dark:bg-neutral-900 flex flex-col overflow-hidden"
          style={{
            paddingTop: statusBarHeight,
            scale,
            y: dragY,
            borderRadius,
            transformOrigin: 'center bottom',
          }}
          drag="y"
          dragControls={dragControls}
          dragListener={false}
          dragConstraints={{ top: -220, bottom: 0 }}
          dragElastic={{ top: 0.15, bottom: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.y < -85) {
              // Close the window entirely — on mobile there's no dock to restore
              // from, so minimize is a dead-end. closeWindow also updates the URL.
              closeWindow(topWindow.id);
            }
            animate(dragY, 0, { type: 'spring', stiffness: 300, damping: 30 });
          }}
        >
          {/* App-level nav bar — hidden when detail panel takes over */}
          <AnimatePresence initial={false}>
            {!headerHidden && (
              <motion.div
                key="app-header"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 44, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-2 px-3 border-b border-black/8 dark:border-white/8 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shrink-0 overflow-hidden"
              >
                <button
                  onClick={handleBack}
                  className="flex items-center gap-0.5 text-blue-500 active:opacity-60 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="flex-1 text-center text-[15px] font-semibold text-black dark:text-white truncate">
                  {appConfig.name}
                </span>
                {appConfig.menuBarMenus && appConfig.menuBarMenus.length > 0 ? (
                  <button
                    onClick={() => setMenuOpen(true)}
                    className="w-5 h-5 flex items-center justify-center text-blue-500 active:opacity-60 transition-opacity"
                  >
                    <Menu className="w-5 h-5" />
                  </button>
                ) : (
                  <div className="w-5" />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1 overflow-hidden">
            <HideAppHeaderCtx.Provider value={setHeaderHidden}>
              <AppContent appId={topWindow.appId} windowId={topWindow.id} />
            </HideAppHeaderCtx.Provider>
          </div>

          {appConfig.menuBarMenus && appConfig.menuBarMenus.length > 0 && (
            <MobileMenuSheet
              menus={appConfig.menuBarMenus}
              appId={topWindow.appId}
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
            />
          )}

          <div style={{ height: navBarHeight + homeIndicatorHeight }} />

          {/* Home Indicator Gesture Bar acting as Drag Handle */}
          <div
            onPointerDown={(e) => dragControls.start(e)}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-10 flex items-center justify-center z-[1000] pointer-events-auto cursor-grab active:cursor-grabbing"
          >
            <div className="w-32 h-1.5 bg-black/30 dark:bg-white/35 hover:bg-black/50 dark:hover:bg-white/50 rounded-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
