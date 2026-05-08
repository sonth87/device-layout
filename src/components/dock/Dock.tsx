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
    /*
     * Outer wrapper: relative + overflow-visible so magnified icons
     * can escape upward without being clipped.
     * Height is driven by the icon row content (pt-3 + DOCK_ITEM_HEIGHT + pb-2).
     */
    <div
      className="relative overflow-visible"
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {/*
       * Glass pill — purely decorative background layer.
       * absolute inset-0 means it exactly fills the content height
       * defined by the icon row below. It has its own overflow-hidden
       * (from LiquidGlass internals) so glass effects stay clipped to
       * the pill shape, completely independent of the icons above.
       */}
      <LiquidGlass variant="dock" className="absolute inset-0" />

      {/*
       * Icon row — sits on top of the glass, z-10, overflow-visible.
       * items-end aligns all DockItem containers to the bottom edge,
       * so icons anchor there and grow/overflow UPWARD on magnification.
       */}
      <div className="relative z-10 flex items-end gap-4 px-5 pt-3 pb-2 overflow-visible">
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
    </div>
  );
}
