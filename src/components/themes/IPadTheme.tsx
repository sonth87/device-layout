'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Wifi, Battery } from 'lucide-react';
import { MenuBar } from '@/components/menubar/MenuBar';
import { LockScreen } from '@/components/iphone/LockScreen';
import { IPadHomeScreen } from '@/components/ipad/HomeScreen';
import { IPhoneControlCenter } from '@/components/iphone/ControlCenter';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import type { AppConfig } from '@/types/app';

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
  onSpotlight?: () => void;
}

export function IPadChrome({ onOpenApp, onSpotlight }: ChromeProps) {
  const [locked, setLocked] = useState(false);
  const [controlCenterOpen, setControlCenterOpen] = useState(false);

  useSwipeGesture({
    onSwipeUp: () => setLocked(false),
    onSwipeDown: () => setControlCenterOpen(true),
  });

  return (
    <>
      {/* Lock screen */}
      <AnimatePresence>
        {locked && <LockScreen onUnlock={() => setLocked(false)} />}
      </AnimatePresence>

      {/* Top menu bar — iPad uses a native-style status bar */}
      <div className="absolute top-0 inset-x-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <MenuBar onSpotlight={onSpotlight} />
        </div>
      </div>

      {/* iPad-style status indicators (right side, overlaid on menu bar) */}
      <div className="absolute top-0 right-4 z-50 flex items-center gap-2 h-(--menubar-height) text-white text-xs pointer-events-none">
        <Wifi className="w-3.5 h-3.5" />
        <Battery className="w-4 h-4" />
      </div>

      {/* Home Screen (shown when not in windowed mode) */}
      <IPadHomeScreen onOpenApp={onOpenApp} />

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
