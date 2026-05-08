'use client';

import { MenuBar } from '@/components/menubar/MenuBar';
import { Dock } from '@/components/dock/Dock';
import type { AppConfig } from '@/types/app';

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
}

/** macOS chrome overlay — menubar fixed at top, dock floats at bottom center. */
export function MacOSChrome({ onOpenApp }: ChromeProps) {
  return (
    <>
      {/* Menubar — on top, full width */}
      <div className="absolute top-0 inset-x-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <MenuBar />
        </div>
      </div>

      {/* Dock — floating at bottom center */}
      <div className="absolute bottom-4 inset-x-0 z-40 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <Dock onOpenApp={onOpenApp} />
        </div>
      </div>
    </>
  );
}

export { MacOSChrome as MacOSShell, MacOSChrome as MacOSTheme };
