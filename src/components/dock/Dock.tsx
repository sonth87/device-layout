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
  void onOpenApp;
  const dockAppIds = useStore((s) => s.dockAppIds);
  const apps = useStore((s) => s.apps);
  const runningAppIds = useStore((s) => s.runningAppIds);
  const windows = useStore((s) => s.windows);
  const launchApp = useStore((s) => s.launchApp);
  const dockSize = useStore((s) => s.dockSize);
  const dockMagnification = useStore((s) => s.dockMagnification);

  const maxSize = Math.max(dockSize * (1 + dockMagnification), dockSize + dockMagnification * 54);
  // Extra space above the glass pill that captures mouse events for magnified icons
  const hoverOverflow = maxSize - dockSize;

  const mouseX = useMotionValue(Infinity);

  const dockApps = dockAppIds
    .map((id) => apps[id])
    .filter(Boolean) as AppConfig[];

  // Apps that are running (or have minimized windows) but NOT pinned to the dock
  const runningNotPinned = runningAppIds
    .filter((id) => !dockAppIds.includes(id))
    .map((id) => apps[id])
    .filter(Boolean) as AppConfig[];

  const handleDockClick = (app: AppConfig) => {
    launchApp(app);
  };

  const gap = Math.round(dockSize * 0.28);
  const px = Math.round(dockSize * 0.47);
  const pt = Math.round(dockSize * 0.28);
  const pb = Math.round(dockSize * 0.19);

  return (
    /*
     * Outer wrapper: extends hoverOverflow px above the glass pill.
     * This ensures onMouseMove fires even when the mouse is over the
     * magnified portion of icons that overflow above the dock glass.
     */
    <div
      data-dock="true"
      className="relative overflow-visible"
      style={{ paddingTop: hoverOverflow }}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {/*
       * Wrapper positions the glass pill to cover only the icon row,
       * leaving the hoverOverflow padding-top area transparent (for mouse capture).
       * LiquidGlass fills this wrapper absolutely.
       */}
      <div className="absolute inset-x-0 bottom-0" style={{ top: hoverOverflow }}>
        <LiquidGlass
          variant="dock"
          className="absolute inset-0"
          // Scale the pill's corner radius down with dockSize too — the
          // default --radius-dock (22px) reads oversized/blocky once icons
          // (and thus the whole pill) have shrunk via the Size slider.
          borderRadius={Math.round(dockSize * 0.5)}
        />
      </div>

      {/* Icon row — on top of glass, overflow-visible so icons can escape upward. */}
      <div
        className="relative z-10 flex items-end overflow-visible"
        style={{ gap, paddingLeft: px, paddingRight: px, paddingTop: pt, paddingBottom: pb }}
      >
        {/* Section 1: pinned dock apps */}
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
            baseSize={dockSize}
            maxSize={maxSize}
          />
        ))}

        {/* Divider — only visible when there are running-but-not-pinned apps */}
        {runningNotPinned.length > 0 && (
          <div
            className="shrink-0 self-stretch my-1 rounded-full bg-white/30 dark:bg-white/20"
            style={{ width: 1, marginLeft: Math.round(gap * 0.5), marginRight: Math.round(gap * 0.5) }}
          />
        )}

        {/* Section 2: running apps not pinned to dock */}
        {runningNotPinned.map((app) => (
          <DockItem
            key={app.id}
            appConfig={app}
            isRunning={true}
            hasMinimized={Object.values(windows).some(
              (w) => w.appId === app.id && w.isMinimized
            )}
            mouseX={mouseX}
            onOpen={handleDockClick}
            baseSize={dockSize}
            maxSize={maxSize}
          />
        ))}
      </div>
    </div>
  );
}
