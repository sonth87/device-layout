'use client';

import { useRef, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useViewportSize } from '@/hooks/useResizeObserver';
import { useStore } from '@/store';
import { AppIcon } from './AppIcon';
import { AppIconImage } from '@/components/shared/AppIconImage';
import type { AppConfig } from '@/types/app';
import { useTranslation } from '@/hooks/useTranslation';

export const PAD = 20;

/** Calculate dynamic resolved icon positions resolving collisions with an active drag placeholder */
function resolveIconPositions({
  appList,
  posMap,
  activeDrag,
  maxRows,
  maxCols,
  cellW,
  cellH,
  desktopSortBy = 'none',
}: {
  appList: AppConfig[];
  posMap: Record<string, { x: number; y: number }>;
  activeDrag: { appId: string; x: number; y: number } | null;
  maxRows: number;
  maxCols: number;
  cellW: number;
  cellH: number;
  desktopSortBy?: string;
}) {
  // 1. Calculate preferred indices for all apps
  const appItems = appList.map((app, index) => {
    const stored = posMap[app.id];
    let preferredIndex = index;
    let hasStored = false;

    if (stored && desktopSortBy === 'none') {
      const col = Math.max(0, Math.round((stored.x - PAD) / 108));
      const row = Math.max(0, Math.min(maxRows - 1, Math.round((stored.y - PAD) / 124)));
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
    const hCol = Math.max(0, Math.min(maxCols - 1, Math.round((activeDrag.x - PAD) / cellW)));
    const hRow = Math.max(0, Math.min(maxRows - 1, Math.round((activeDrag.y - PAD) / cellH)));
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
      x: col * cellW + PAD,
      y: row * cellH + PAD,
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

  const iconSize = useStore((s) => s.desktopIconSize);
  const gridSpacing = useStore((s) => s.desktopGridSpacing);
  const labelPosition = useStore((s) => s.desktopLabelPosition);
  const desktopSortBy = useStore((s) => s.desktopSortBy);

  const containerRef = useRef<HTMLDivElement>(null);
  const { getAppName } = useTranslation();

  const [activeDrag, setActiveDrag] = useState<{ appId: string; x: number; y: number } | null>(null);

  // Dynamic cellW and cellH calculations
  let cellW = 108;
  let cellH = 124;

  if (labelPosition === 'bottom') {
    const horizontalGap = 44 + (gridSpacing - 50) * 0.8;
    const verticalGap = 32 + (gridSpacing - 50) * 0.8;
    cellW = iconSize + horizontalGap;
    cellH = iconSize + 28 + verticalGap;
  } else {
    const horizontalGap = 32 + (gridSpacing - 50) * 0.8;
    const verticalGap = 20 + (gridSpacing - 50) * 0.8;
    const labelWidth = 80;
    cellW = iconSize + labelWidth + horizontalGap;
    cellH = iconSize + verticalGap;
  }

  const containerHeight = Math.max(
    0,
    viewport.height - config.layout.desktopInsets.top - config.layout.desktopInsets.bottom
  );
  const containerWidth = Math.max(
    0,
    viewport.width - config.layout.desktopInsets.left - config.layout.desktopInsets.right
  );

  const maxRows = Math.max(1, Math.floor((containerHeight - PAD * 2) / cellH));
  const maxCols = Math.max(1, Math.floor((containerWidth - PAD * 2) / cellW));

  const appList = Object.values(apps).filter((a) => !a.disabled);

  // Sort appList if sortBy is active
  const sortedAppList = [...appList];
  if (desktopSortBy === 'name') {
    sortedAppList.sort((a, b) => {
      const nameA = getAppName(a.id, a.name);
      const nameB = getAppName(b.id, b.name);
      return nameA.localeCompare(nameB);
    });
  } else if (desktopSortBy === 'kind') {
    sortedAppList.sort((a, b) => {
      const catA = a.category ?? 'Other';
      const catB = b.category ?? 'Other';
      const catComp = catA.localeCompare(catB);
      if (catComp !== 0) return catComp;
      return getAppName(a.id, a.name).localeCompare(getAppName(b.id, b.name));
    });
  }

  // Build position map from persisted layout
  const posMap: Record<string, { x: number; y: number }> = {};
  for (const pos of iconLayout) {
    posMap[pos.appId] = { x: pos.x, y: pos.y };
  }

  // Resolve current layout coordinates (handles dynamic pushes)
  const { coords: resolvedCoords, hoveredIndex } = resolveIconPositions({
    appList: sortedAppList,
    posMap,
    activeDrag,
    maxRows,
    maxCols,
    cellW,
    cellH,
    desktopSortBy,
  });

  const handleDrop = (appId: string, x: number, y: number) => {
    // Resolve full positions at final drag release coordinates
    const { coords } = resolveIconPositions({
      appList: sortedAppList,
      posMap,
      activeDrag: { appId, x, y },
      maxRows,
      maxCols,
      cellW,
      cellH,
      desktopSortBy,
    });

    // Commit snapshot of all resolved app positions to the store layout
    // Convert current visual positions back to the original 108x124 grid coordinate mapping to maintain consistency
    const newLayout = sortedAppList.map((app) => {
      const col = Math.round((coords[app.id].x - PAD) / cellW);
      const row = Math.round((coords[app.id].y - PAD) / cellH);
      return {
        appId: app.id,
        x: col * 108 + PAD,
        y: row * 124 + PAD,
      };
    });

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
        const placeholderX = hCol * cellW + PAD;
        const placeholderY = hRow * cellH + PAD;
        const draggedAppName = getAppName(draggedApp.id, draggedApp.name);

        const width = labelPosition === 'bottom' ? iconSize + 24 : iconSize + 104;
        const height = labelPosition === 'bottom' ? iconSize + 40 : iconSize + 24;

        return (
          <div
            className="absolute rounded-xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center p-2.5"
            style={{
              left: placeholderX + (cellW - width) / 2,
              top: placeholderY + (cellH - height) / 2,
              width,
              height,
              transition: 'left 0.12s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.12s cubic-bezier(0.25, 0.8, 0.25, 1)',
            }}
          >
            <div className="opacity-20 scale-75 select-none pointer-events-none">
              <AppIconImage appConfig={draggedApp} size={iconSize} />
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

      {sortedAppList.map((app, index) => {
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
