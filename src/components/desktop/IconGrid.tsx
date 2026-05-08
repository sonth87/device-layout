'use client';

import { useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useViewportSize } from '@/hooks/useResizeObserver';
import { useStore } from '@/store';
import { AppIcon } from './AppIcon';
import type { AppConfig } from '@/types/app';

const CELL_W = 108;
const CELL_H = 124;
const PAD = 20;

/** Calculate default pixel position for icon at given index (left column, top down) */
function defaultPos(index: number, containerH: number): { x: number; y: number } {
  const maxRows = Math.max(1, Math.floor((containerH - PAD * 2) / CELL_H));
  const col = Math.floor(index / maxRows);
  const row = index % maxRows;
  return { x: PAD + col * CELL_W, y: PAD + row * CELL_H };
}

interface IconGridProps {
  onOpenApp: (appConfig: AppConfig) => void;
}

export function IconGrid({ onOpenApp }: IconGridProps) {
  const { config } = useTheme();
  const viewport = useViewportSize();
  const apps = useStore((s) => s.apps);
  const iconLayout = useStore((s) => s.iconLayout);
  const moveIcon = useStore((s) => s.moveIcon);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerHeight = Math.max(
    0,
    viewport.height - config.layout.desktopInsets.top - config.layout.desktopInsets.bottom
  );

  const appList = Object.values(apps).filter((a) => !a.disabled);

  // Build position map from persisted layout
  const posMap: Record<string, { x: number; y: number }> = {};
  for (const pos of iconLayout) {
    posMap[pos.appId] = { x: pos.x, y: pos.y };
  }

  const getPos = (app: AppConfig, index: number) => {
    if (posMap[app.id]) return posMap[app.id];
    return defaultPos(index, containerHeight || 600);
  };

  const handleDrop = (appId: string, x: number, y: number) => {
    // Clamp within container
    const container = containerRef.current;
    if (!container) return;
    const maxX = container.clientWidth - CELL_W;
    const maxY = container.clientHeight - CELL_H;
    const clampedX = Math.max(0, Math.min(maxX, x));
    const clampedY = Math.max(0, Math.min(maxY, y));
    moveIcon(appId, clampedX, clampedY);
  };

  return (
    <div
      ref={containerRef}
      className="absolute pointer-events-none"
      style={{
        top: 'var(--desktop-inset-top)',
        right: 'var(--desktop-inset-right)',
        bottom: 'var(--desktop-inset-bottom)',
        left: 'var(--desktop-inset-left)',
      }}
    >
      {appList.map((app, index) => {
        const { x, y } = getPos(app, index);
        return (
          <AppIcon
            key={app.id}
            appConfig={app}
            x={x}
            y={y}
            onOpen={onOpenApp}
            onDrop={(nx, ny) => handleDrop(app.id, nx, ny)}
          />
        );
      })}
    </div>
  );
}
