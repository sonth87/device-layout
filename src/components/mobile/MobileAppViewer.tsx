'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useStore } from '@/store';
import { AppContent } from '@/components/apps/AppRegistry';

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
  const setRunning = useStore((s) => s.setRunning);

  const [headerHidden, setHeaderHidden] = useState(false);

  const openWindows = Object.values(windows)
    .filter((w) => !w.isMinimized)
    .sort((a, b) => b.zIndex - a.zIndex);

  const topWindow = openWindows[0] ?? null;

  const handleBack = useCallback(() => {
    if (!topWindow) return;
    closeWindow(topWindow.id);
    if (openWindows.length <= 1) setRunning(topWindow.appId, false);
  }, [topWindow, openWindows, closeWindow, setRunning]);

  const appConfig = topWindow ? apps[topWindow.appId] : null;

  return (
    <AnimatePresence>
      {topWindow && appConfig && (
        <motion.div
          key={topWindow.id}
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 36 }}
          className="absolute inset-0 z-[500] bg-white dark:bg-neutral-900 flex flex-col"
          style={{ paddingTop: statusBarHeight, transformOrigin: 'center center' }}
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
                <div className="w-5" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1 overflow-hidden">
            <HideAppHeaderCtx.Provider value={setHeaderHidden}>
              <AppContent appId={topWindow.appId} windowId={topWindow.id} />
            </HideAppHeaderCtx.Provider>
          </div>

          <div style={{ height: navBarHeight + homeIndicatorHeight }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
