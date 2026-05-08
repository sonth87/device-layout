'use client';

import { useMotionValue } from 'motion/react';
import { useStore } from '@/store';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import { DockItem } from './DockItem';
import type { AppConfig } from '@/types/app';

interface DockProps {
  onOpenApp: (app: AppConfig) => void;
}

export function Dock({ onOpenApp }: DockProps) {
  const dockAppIds = useStore((s) => s.dockAppIds);
  const apps = useStore((s) => s.apps);
  const runningAppIds = useStore((s) => s.runningAppIds);
  const windows = useStore((s) => s.windows);
  const restoreWindow = useStore((s) => s.restoreWindow);
  const focusWindow = useStore((s) => s.focusWindow);

  const mouseX = useMotionValue(Infinity);

  const dockApps = dockAppIds
    .map((id) => apps[id])
    .filter(Boolean) as AppConfig[];

  const handleDockClick = (app: AppConfig) => {
    // If app has a minimized window → restore it
    const minimizedWin = Object.values(windows).find(
      (w) => w.appId === app.id && w.isMinimized
    );
    if (minimizedWin) {
      restoreWindow(minimizedWin.id);
      return;
    }

    // If app has an open window → focus it
    const openWin = Object.values(windows).find(
      (w) => w.appId === app.id && !w.isMinimized
    );
    if (openWin) {
      focusWindow(openWin.id);
      return;
    }

    // Otherwise open a new window
    onOpenApp(app);
  };

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <LiquidGlass variant="dock">
        {/* Inner layout wrapper — gap/padding lives here, not on the glass outer div */}
        <div className="flex items-end gap-3 px-4 pt-3 pb-2">
          {dockApps.map((app) => (
            <DockItem
              key={app.id}
              appConfig={app}
              isRunning={runningAppIds.includes(app.id)}
              hasMinimized={Object.values(windows).some(
                (w) => w.appId === app.id && w.isMinimized
              )}
              mouseX={mouseX}
              onOpen={handleDockClick}
            />
          ))}
        </div>
      </LiquidGlass>
    </div>
  );
}
