'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Wifi, Signal, Battery } from 'lucide-react';
import { NavBar } from '@/components/dock/NavBar';
import { MenuBarClock } from '@/components/menubar/MenuBarClock';
import { DynamicIsland } from '@/components/iphone/DynamicIsland';
import { LockScreen } from '@/components/iphone/LockScreen';
import { IPhoneHomeScreen } from '@/components/iphone/HomeScreen';
import { IPhoneControlCenter } from '@/components/iphone/ControlCenter';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import type { AppConfig } from '@/types/app';

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
}

export function IPhoneChrome({ onOpenApp }: ChromeProps) {
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

      {/* Dynamic Island */}
      <DynamicIsland />

      {/* Status bar */}
      <div
        className="absolute top-0 inset-x-0 z-40 flex items-center justify-between px-5 text-white text-xs font-semibold pointer-events-none"
        style={{ height: 'var(--statusbar-height)' }}
      >
        <span className="w-24"><MenuBarClock /></span>
        <div className="flex items-center gap-1.5 text-white">
          <Signal className="w-3.5 h-3.5" />
          <Wifi className="w-3.5 h-3.5" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Home screen app grid */}
      <IPhoneHomeScreen onOpenApp={onOpenApp} />

      {/* Control center */}
      <IPhoneControlCenter open={controlCenterOpen} onClose={() => setControlCenterOpen(false)} />

      {/* Bottom nav */}
      <div className="absolute bottom-0 inset-x-0 z-40">
        <NavBar onOpenApp={onOpenApp} />
        <div className="h-6 flex items-center justify-center">
          <div className="w-32 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </>
  );
}

export { IPhoneChrome as IPhoneShell, IPhoneChrome as IPhoneTheme };
