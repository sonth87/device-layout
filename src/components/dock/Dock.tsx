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

  const handleDockClick = (app: AppConfig) => {
    launchApp(app);
  };

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

      {/* Icon row — on top of glass, overflow-visible so icons can escape upward.
          Gap AND padding scale with dockSize (fixed px-5/pt-3/pb-2/gap-3 read
          as too spaced-out once the user shrinks icons via Settings > Desktop
          & Dock's "Size" slider — fixed spacing around/between small icons
          looks disproportionate). Ratios approximate macOS's own dock
          spacing-to-icon-size relationship across the size range. */}
      <div
        className="relative z-10 flex items-end overflow-visible"
        style={{
          gap: Math.round(dockSize * 0.28),
          paddingLeft: Math.round(dockSize * 0.47),
          paddingRight: Math.round(dockSize * 0.47),
          paddingTop: Math.round(dockSize * 0.28),
          paddingBottom: Math.round(dockSize * 0.19),
        }}
      >
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
      </div>
    </div>
  );
}
