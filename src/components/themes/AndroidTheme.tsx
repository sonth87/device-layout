'use client';

import { useRef, useState, useEffect } from 'react';
import { Wifi, Signal, Battery } from 'lucide-react';
import { NavBar } from '@/components/dock/NavBar';
import { AndroidAppDrawer } from '@/components/android/AppDrawer';
import { AndroidQuickSettings } from '@/components/android/QuickSettings';
import { MobileAppViewer } from '@/components/mobile/MobileAppViewer';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import type { AppConfig } from '@/types/app';

function AndroidClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <>{time}</>;
}

const STATUS_H = 32;
const NAVBAR_H = 56;
const HOME_IND = 0; // Android has no home indicator

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
}

export function AndroidChrome({ onOpenApp }: ChromeProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quickSettingsOpen, setQuickSettingsOpen] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useSwipeGesture(
    {
      onSwipeUp: () => setDrawerOpen(true),
      onSwipeDown: () => setQuickSettingsOpen(true),
    },
    frameRef,
  );

  return (
    <div ref={frameRef} className="absolute inset-0">
      {/* Status bar */}
      <div
        className="absolute top-0 inset-x-0 z-40 flex items-center justify-between px-4 text-white text-[13px] font-semibold tabular-nums pointer-events-none"
        style={{ height: STATUS_H }}
      >
        <AndroidClock />
        <div className="flex items-center gap-2">
          <Signal className="w-[17px] h-[17px]" />
          <Wifi className="w-[17px] h-[17px]" />
          <Battery className="w-[20px] h-[20px]" />
        </div>
      </div>

      {/* Full-screen app viewer */}
      <MobileAppViewer
        statusBarHeight={STATUS_H}
        navBarHeight={NAVBAR_H}
        homeIndicatorHeight={HOME_IND}
      />

      {/* Bottom nav */}
      <div className="absolute bottom-0 inset-x-0 z-40">
        <NavBar onOpenApp={onOpenApp} navBarHeight={NAVBAR_H} />
      </div>

      {/* App drawer */}
      <AndroidAppDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenApp={(app) => { onOpenApp(app); setDrawerOpen(false); }}
      />

      {/* Quick settings */}
      <AndroidQuickSettings
        open={quickSettingsOpen}
        onClose={() => setQuickSettingsOpen(false)}
      />
    </div>
  );
}

export { AndroidChrome as AndroidShell, AndroidChrome as AndroidTheme };
