'use client';

import { useRef, useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Wifi, Signal, Battery } from 'lucide-react';
import { NavBar } from '@/components/dock/NavBar';
import { DynamicIsland } from '@/components/iphone/DynamicIsland';
import { LockScreen } from '@/components/iphone/LockScreen';
import { IPhoneHomeScreen } from '@/components/iphone/HomeScreen';
import { IPhoneControlCenter } from '@/components/iphone/ControlCenter';
import { MobileAppViewer } from '@/components/mobile/MobileAppViewer';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import { useStore } from '@/store';
import type { AppConfig } from '@/types/app';

function IPhoneClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <>{time}</>;
}

const STATUS_H = 50;   // px — status bar + DynamicIsland zone
const NAVBAR_H = 72;   // px — dock row height
const HOME_IND = 20;   // px — home indicator pill area

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
}

export function IPhoneChrome({ onOpenApp }: ChromeProps) {
  const [locked, setLocked] = useState(false);
  const [controlCenterOpen, setControlCenterOpen] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const windows = useStore((s) => s.windows);
  const hasOpenWindow = Object.values(windows).some((w) => !w.isMinimized);

  useSwipeGesture(
    {
      onSwipeUp: () => {
        if (!hasOpenWindow) setLocked(false);
      },
      onSwipeDown: () => {
        if (!hasOpenWindow) setControlCenterOpen(true);
      },
    },
    frameRef,
  );

  return (
    <div ref={frameRef} className="absolute inset-0">
      {/* Lock screen */}
      <AnimatePresence>
        {locked && <LockScreen onUnlock={() => setLocked(false)} />}
      </AnimatePresence>

      {/* Wallpaper-level content (home screen) */}
      <IPhoneHomeScreen
        onOpenApp={onOpenApp}
        statusBarHeight={STATUS_H}
        navBarHeight={NAVBAR_H}
        homeIndicatorHeight={HOME_IND}
      />

      {/* Full-screen app viewer — slides over home screen */}
      <MobileAppViewer
        statusBarHeight={STATUS_H}
        navBarHeight={NAVBAR_H}
        homeIndicatorHeight={HOME_IND}
      />

      {/* Status bar — 3 columns so center is always clear of DynamicIsland */}
      <div
        className="absolute top-0 inset-x-0 z-40 grid pointer-events-none"
        style={{ height: STATUS_H, gridTemplateColumns: '1fr auto 1fr' }}
      >
        {/* Left: time only */}
        <div className="flex items-start pt-3.5 pl-5 text-white text-[15px] font-semibold tabular-nums">
          <IPhoneClock />
        </div>
        {/* Center: DynamicIsland */}
        <div className="flex items-start justify-center pt-1.5">
          <DynamicIsland />
        </div>
        {/* Right: system icons */}
        <div className="flex items-start justify-end pt-3.5 pr-5 gap-2 text-white">
          <Signal className="w-[18px] h-[18px]" />
          <Wifi className="w-[18px] h-[18px]" />
          <Battery className="w-[22px] h-[22px]" />
        </div>
      </div>

      {/* Control center */}
      <IPhoneControlCenter open={controlCenterOpen} onClose={() => setControlCenterOpen(false)} />

      {/* Bottom dock + home indicator (hidden when app is open) */}
      {!hasOpenWindow && (
        <div className="absolute bottom-0 inset-x-0 z-40" style={{ height: NAVBAR_H + HOME_IND }}>
          <NavBar onOpenApp={onOpenApp} navBarHeight={NAVBAR_H} />
          {/* Home indicator pill */}
          <div
            className="flex items-center justify-center"
            style={{ height: HOME_IND }}
          >
            <div className="w-32 h-1 bg-white/40 rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
}

export { IPhoneChrome as IPhoneShell, IPhoneChrome as IPhoneTheme };
