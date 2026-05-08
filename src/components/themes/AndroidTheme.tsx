'use client';

import { useState } from 'react';
import { Wifi, Signal, Battery } from 'lucide-react';
import { NavBar } from '@/components/dock/NavBar';
import { MenuBarClock } from '@/components/menubar/MenuBarClock';
import { AndroidAppDrawer } from '@/components/android/AppDrawer';
import { AndroidQuickSettings } from '@/components/android/QuickSettings';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import type { AppConfig } from '@/types/app';

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
}

export function AndroidChrome({ onOpenApp }: ChromeProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quickSettingsOpen, setQuickSettingsOpen] = useState(false);

  useSwipeGesture({
    onSwipeUp: () => setDrawerOpen(true),
    onSwipeDown: () => setQuickSettingsOpen(true),
  });

  return (
    <>
      {/* Status bar */}
      <div
        className="absolute top-0 inset-x-0 z-40 flex items-center justify-between px-4 text-white text-xs pointer-events-none"
        style={{ height: 'var(--statusbar-height)' }}
      >
        <MenuBarClock />
        <div className="flex items-center gap-1.5">
          <Signal className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
          <Battery className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 inset-x-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <NavBar onOpenApp={onOpenApp} />
        </div>
      </div>

      {/* App drawer */}
      <AndroidAppDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenApp={onOpenApp}
      />

      {/* Quick settings */}
      <AndroidQuickSettings
        open={quickSettingsOpen}
        onClose={() => setQuickSettingsOpen(false)}
      />
    </>
  );
}

export { AndroidChrome as AndroidShell, AndroidChrome as AndroidTheme };
