'use client';

import { NavBar } from '@/components/dock/NavBar';
import { MenuBarClock } from '@/components/menubar/MenuBarClock';
import type { AppConfig } from '@/types/app';

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
}

export function AndroidChrome({ onOpenApp }: ChromeProps) {
  return (
    <>
      {/* Status bar */}
      <div className="absolute top-0 inset-x-0 z-40 flex items-center justify-between px-4 h-8 text-white text-xs pointer-events-none">
        <MenuBarClock />
        <div className="flex items-center gap-1">
          <span>●●●</span>
          <span>WiFi</span>
          <span>100%</span>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <NavBar onOpenApp={onOpenApp} />
        </div>
      </div>
    </>
  );
}

export { AndroidChrome as AndroidShell, AndroidChrome as AndroidTheme };
