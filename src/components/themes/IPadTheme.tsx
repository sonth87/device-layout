'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Wifi, Battery } from 'lucide-react';
import { LockScreen } from '@/components/iphone/LockScreen';
import { IPadHomeScreen } from '@/components/ipad/HomeScreen';
import { IPadDock } from '@/components/ipad/IPadDock';
import { IPhoneControlCenter } from '@/components/iphone/ControlCenter';
import { MenuBarClock } from '@/components/menubar/MenuBarClock';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import type { AppConfig } from '@/types/app';
import { useStore } from '@/store';

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
  /**
   * Running on a real touch device: swipes belong to the browser/OS and to the
   * apps themselves, so they must not open the simulated Control Center / lock.
   */
  isRealDevice?: boolean;
}

export function IPadChrome({ onOpenApp, isRealDevice = false }: ChromeProps) {
  const [locked, setLocked] = useState(false);
  const [controlCenterOpen, setControlCenterOpen] = useState(false);

  const windows = useStore((s) => s.windows);
  const hasOpenWindow = Object.values(windows).some((w) => !w.isMinimized);
  const hasFullScreen = Object.values(windows).some((w) => w.isFullScreen && !w.isMinimized);

  useSwipeGesture(
    isRealDevice
      ? {}
      : {
          onSwipeUp: () => {
            if (!hasOpenWindow) setLocked(false);
          },
          onSwipeDown: () => {
            if (!hasOpenWindow) setControlCenterOpen(true);
          },
        },
  );

  return (
    <>
      {/* Lock screen */}
      <AnimatePresence>
        {locked && <LockScreen onUnlock={() => setLocked(false)} />}
      </AnimatePresence>

      {/* iPad-style status bar */}
      <div
        className="absolute top-0 inset-x-0 z-40 flex items-center justify-between px-5 text-white text-xs font-semibold pointer-events-none"
        style={{ height: 'var(--statusbar-height)' }}
      >
        <span className="min-w-0"><MenuBarClock /></span>
        <div className="flex items-center gap-1.5 text-white">
          <Wifi className="w-3.5 h-3.5" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Home Screen (shown when not in windowed mode) */}
      <AnimatePresence>
        {!hasOpenWindow && (
          <motion.div
            key="ipad-home-screen"
            initial={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-10"
          >
            <IPadHomeScreen onOpenApp={onOpenApp} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* iPad Dock — visible on home screen and windowed/maximized apps, hides when app is fullscreen */}
      <AnimatePresence>
        {!hasFullScreen && (
          <motion.div
            key="ipad-dock"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className="absolute bottom-3 inset-x-6 z-40 flex justify-center pointer-events-none"
          >
            <div className="pointer-events-auto">
              <IPadDock onOpenApp={onOpenApp} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control center */}
      <IPhoneControlCenter
        open={controlCenterOpen}
        onClose={() => setControlCenterOpen(false)}
      />

      {/* Home indicator */}
      <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none z-40">
        <div className="w-32 h-1 bg-white/30 rounded-full" />
      </div>
    </>
  );
}

export { IPadChrome as IPadShell, IPadChrome as IPadTheme };
