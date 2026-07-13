'use client';

import { Taskbar } from '@/components/dock/Taskbar';
import type { AppConfig } from '@/types/app';

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
}

export function WindowsChrome({ onOpenApp }: ChromeProps) {
  return (
    <>
      <div className="absolute bottom-0 inset-x-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <Taskbar onOpenApp={onOpenApp} />
        </div>
      </div>
    </>
  );
}

export { WindowsChrome as WindowsShell, WindowsChrome as WindowsTheme };
