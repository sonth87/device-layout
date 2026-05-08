'use client';

import { NavBar } from '@/components/dock/NavBar';
import { MenuBarClock } from '@/components/menubar/MenuBarClock';
import type { AppConfig } from '@/types/app';

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
}

export function IPhoneChrome({ onOpenApp }: ChromeProps) {
  return (
    <>
      {/* Status bar */}
      <div className="absolute top-0 inset-x-0 z-40 flex items-center justify-between px-5 h-10 text-white text-xs font-semibold pointer-events-none">
        <MenuBarClock />
        <div className="flex items-center gap-1.5">
          <span>●●●</span>
          <span>WiFi</span>
          <span>100%</span>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="absolute bottom-0 inset-x-0 z-40">
        <NavBar onOpenApp={onOpenApp} />
        <div className="h-safe-area-inset-bottom h-6 flex items-center justify-center">
          <div className="w-32 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </>
  );
}

export { IPhoneChrome as IPhoneShell, IPhoneChrome as IPhoneTheme };
