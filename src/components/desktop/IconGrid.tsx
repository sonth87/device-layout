'use client';

import { useRef, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useViewportSize } from '@/hooks/useResizeObserver';
import { useStore } from '@/store';
import { AppIcon } from './AppIcon';
import { AppIconImage } from '@/components/shared/AppIconImage';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';

export const CELL_W = 108;
export const CELL_H = 124;
export const PAD = 20;

/** Calculate dynamic resolved icon positions resolving collisions with an active drag placeholder */
function resolveIconPositions({
  appList,
  posMap,
  activeDrag,
  maxRows,
  maxCols,
}: {
  appList: AppConfig[];
  posMap: Record<string, { x: number; y: number }>;
  activeDrag: { appId: string; x: number; y: number } | null;
  maxRows: number;
  maxCols: number;
}) {
  // 1. Calculate preferred indices for all apps
  const appItems = appList.map((app, index) => {
    const stored = posMap[app.id];
    let preferredIndex = index;
    let hasStored = false;

    if (stored) {
      const col = Math.max(0, Math.round((stored.x - PAD) / CELL_W));
      const row = Math.max(0, Math.min(maxRows - 1, Math.round((stored.y - PAD) / CELL_H)));
      preferredIndex = col * maxRows + row;
      hasStored = true;
    }

    return {
      appId: app.id,
      hasStored,
      preferredIndex,
      originalIndex: index,
    };
  });

  // 2. Identify the reserved hovered slot for the dragged icon
  let hoveredIndex = -1;
  if (activeDrag) {
    const hCol = Math.max(0, Math.min(maxCols - 1, Math.round((activeDrag.x - PAD) / CELL_W)));
    const hRow = Math.max(0, Math.min(maxRows - 1, Math.round((activeDrag.y - PAD) / CELL_H)));
    hoveredIndex = hCol * maxRows + hRow;
  }

  // 3. Separate other apps from the dragged app
  const otherApps = appItems.filter((item) => !activeDrag || item.appId !== activeDrag.appId);

  // 4. Sort other apps stably based on grid index
  otherApps.sort((a, b) => {
    if (a.preferredIndex !== b.preferredIndex) {
      return a.preferredIndex - b.preferredIndex;
    }
    if (a.hasStored !== b.hasStored) {
      return a.hasStored ? -1 : 1;
    }
    return a.originalIndex - b.originalIndex;
  });

  // 5. Place other apps sequentially while avoiding collisions
  const occupied = new Set<number>();
  if (hoveredIndex !== -1) {
    occupied.add(hoveredIndex); // Reserve hovered cell for dragged app
  }

  const resolvedIndices: Record<string, number> = {};

  for (const item of otherApps) {
    let targetIndex = item.preferredIndex;
    while (occupied.has(targetIndex)) {
      targetIndex++;
    }
    occupied.add(targetIndex);
    resolvedIndices[item.appId] = targetIndex;
  }

  // 6. Assign dragged app to hovered index if dragging
  if (activeDrag && hoveredIndex !== -1) {
    resolvedIndices[activeDrag.appId] = hoveredIndex;
  }

  // 7. Map indices back to pixel coordinates
  const coords: Record<string, { x: number; y: number }> = {};
  for (const appId in resolvedIndices) {
    const idx = resolvedIndices[appId];
    const col = Math.floor(idx / maxRows);
    const row = idx % maxRows;
    coords[appId] = {
      x: col * CELL_W + PAD,
      y: row * CELL_H + PAD,
    };
  }

  return { coords, hoveredIndex };
}

interface IconGridProps {
  onOpenApp: (appConfig: AppConfig) => void;
}

export function IconGrid({ onOpenApp }: IconGridProps) {
  const { config } = useTheme();
  const viewport = useViewportSize();
  const apps = useStore((s) => s.apps);
  const iconLayout = useStore((s) => s.iconLayout);
  const setIconLayout = useStore((s) => s.setIconLayout);
  const containerRef = useRef<HTMLDivElement>(null);
  const { getAppName } = useTranslation();

  const [activeDrag, setActiveDrag] = useState<{ appId: string; x: number; y: number } | null>(null);

  const containerHeight = Math.max(
    0,
    viewport.height - config.layout.desktopInsets.top - config.layout.desktopInsets.bottom
  );
  const containerWidth = Math.max(
    0,
    viewport.width - config.layout.desktopInsets.left - config.layout.desktopInsets.right
  );

  const maxRows = Math.max(1, Math.floor((containerHeight - PAD * 2) / CELL_H));
  const maxCols = Math.max(1, Math.floor((containerWidth - PAD * 2) / CELL_W));

  const appList = Object.values(apps).filter((a) => !a.disabled);

  // Build position map from persisted layout
  const posMap: Record<string, { x: number; y: number }> = {};
  for (const pos of iconLayout) {
    posMap[pos.appId] = { x: pos.x, y: pos.y };
  }

  // Resolve current layout coordinates (handles dynamic pushes)
  const { coords: resolvedCoords, hoveredIndex } = resolveIconPositions({
    appList,
    posMap,
    activeDrag,
    maxRows,
    maxCols,
  });

  const handleDrop = (appId: string, x: number, y: number) => {
    // Resolve full positions at final drag release coordinates
    const { coords } = resolveIconPositions({
      appList,
      posMap,
      activeDrag: { appId, x, y },
      maxRows,
      maxCols,
    });

    // Commit snapshot of all resolved app positions to the store layout
    const newLayout = appList.map((app) => ({
      appId: app.id,
      x: coords[app.id].x,
      y: coords[app.id].y,
    }));

    setIconLayout(newLayout);
    setActiveDrag(null);
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
      {/* Ghost layout placeholder rendering */}
      {activeDrag && (() => {
        const draggedApp = apps[activeDrag.appId];
        if (!draggedApp || hoveredIndex === -1) return null;

        const hCol = Math.floor(hoveredIndex / maxRows);
        const hRow = hoveredIndex % maxRows;
        const placeholderX = hCol * CELL_W + PAD;
        const placeholderY = hRow * CELL_H + PAD;
        const draggedAppName = getAppName(draggedApp.id, draggedApp.name);

        return (
          <div
            className="absolute rounded-xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center p-2.5"
            style={{
              left: placeholderX + 10,
              top: placeholderY + 10,
              width: 88,
              height: 104,
              transition: 'left 0.12s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.12s cubic-bezier(0.25, 0.8, 0.25, 1)',
            }}
          >
            <div className="opacity-20 scale-75 select-none pointer-events-none">
              <AppIconImage appConfig={draggedApp} size={64} />
            </div>
            <span
              className="block w-full max-w-19 text-white text-[11px] font-medium text-center leading-tight truncate opacity-20 mt-2 select-none pointer-events-none"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6)' }}
            >
              {draggedAppName}
            </span>
          </div>
        );
      })()}

      {appList.map((app, index) => {
        const { x, y } = resolvedCoords[app.id] || { x: 0, y: 0 };
        return (
          <AppIcon
            key={app.id}
            appConfig={app}
            x={x}
            y={y}
            onOpen={onOpenApp}
            onDragStart={() => setActiveDrag({ appId: app.id, x, y })}
            onDrag={(nx, ny) => setActiveDrag({ appId: app.id, x: nx, y: ny })}
            onDrop={(nx, ny) => handleDrop(app.id, nx, ny)}
          />
        );
      })}
    </div>
  );
}
