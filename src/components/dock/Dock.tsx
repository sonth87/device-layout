'use client';

import { useMotionValue } from 'motion/react';
import { useStore } from '@/store';
import { LiquidGlass } from '@/components/liquid-glass/LiquidGlass';
import { DockItem, BASE_SIZE, MAX_SIZE } from './DockItem';
import type { AppConfig } from '@/types/app';

// Extra space above the glass pill that captures mouse events for magnified icons
const HOVER_OVERFLOW = MAX_SIZE - BASE_SIZE; // 26px

interface DockProps {
  onOpenApp: (app: AppConfig) => void;
}

export function Dock({ onOpenApp }: DockProps) {
  void onOpenApp;
  const dockAppIds = useStore((s) => s.dockAppIds);
  const apps = useStore((s) => s.apps);
  const runningAppIds = useStore((s) => s.runningAppIds);
  const windows = useStore((s) => s.windows);
  const launchApp = useStore((s) => s.launchApp);

  const mouseX = useMotionValue(Infinity);

  const dockApps = dockAppIds
    .map((id) => apps[id])
    .filter(Boolean) as AppConfig[];

  const handleDockClick = (app: AppConfig) => {
    launchApp(app);
  };

  return (
    /*
     * Outer wrapper: extends HOVER_OVERFLOW px above the glass pill.
     * This ensures onMouseMove fires even when the mouse is over the
     * magnified portion of icons that overflow above the dock glass.
     */
    <div
      className="relative overflow-visible"
      style={{ paddingTop: HOVER_OVERFLOW }}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {/*
       * Wrapper positions the glass pill to cover only the icon row,
       * leaving the HOVER_OVERFLOW padding-top area transparent (for mouse capture).
       * LiquidGlass fills this wrapper absolutely.
       */}
      <div className="absolute inset-x-0 bottom-0" style={{ top: HOVER_OVERFLOW }}>
        <LiquidGlass variant="dock" className="absolute inset-0" />
      </div>

      {/* Icon row — on top of glass, overflow-visible so icons can escape upward */}
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
