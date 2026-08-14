'use client';

import { Taskbar } from '@/components/dock/Taskbar';
import { useFullscreenPeek } from '@/hooks/useFullscreenPeek';
import type { AppConfig } from '@/types/app';

interface ChromeProps {
  onOpenApp: (app: AppConfig) => void;
}

export function WindowsChrome({ onOpenApp }: ChromeProps) {
  // Hover near the top edge while a window is in fullscreen → reveal its title bar
  useFullscreenPeek();

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
