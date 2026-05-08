'use client';

import { MenuBar } from '@/components/menubar/MenuBar';
import { Dock } from '@/components/dock/Dock';
import type { AppConfig } from '@/types/app';

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
}

export function IPadChrome({ onOpenApp }: ChromeProps) {
  return (
    <>
      <div className="absolute top-0 inset-x-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <MenuBar />
        </div>
      </div>
      <div className="absolute bottom-4 inset-x-0 z-40 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <Dock onOpenApp={onOpenApp} />
        </div>
      </div>
    </>
  );
}

export { IPadChrome as IPadShell, IPadChrome as IPadTheme };
