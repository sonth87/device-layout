'use client';

import { useRef, useState, useEffect } from 'react';
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

  // --- Multi-select and Marquee states ---
  const [selectedAppIds, setSelectedAppIds] = useState<Set<string>>(new Set());
  const [selectionBox, setSelectionBox] = useState<{ startX: number; startY: number; currentX: number; currentY: number } | null>(null);
  const [dragStartCoords, setDragStartCoords] = useState<Record<string, { x: number; y: number }>>({});
  const isSelectingRef = useRef(false);

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

  // Stable references for marquee selection effect to avoid re-binding window events on state changes
  const selectedAppIdsRef = useRef(selectedAppIds);
  selectedAppIdsRef.current = selectedAppIds;

  const sortedAppListRef = useRef(sortedAppList);
  sortedAppListRef.current = sortedAppList;

  // Resolve coordinates:
  // If we are dragging a group of items, we translate the group coordinates together relative
  // to the drag offset delta of the anchor icon, and resolve collisions only for static icons.
  let resolvedCoords: Record<string, { x: number; y: number }> = {};
  let hoveredIndex = -1;

  const isDraggingGroup = activeDrag && selectedAppIds.has(activeDrag.appId);

  if (isDraggingGroup) {
    const anchorId = activeDrag.appId;
    const startAnchor = dragStartCoords[anchorId] || { x: activeDrag.x, y: activeDrag.y };
    const dx = activeDrag.x - startAnchor.x;
    const dy = activeDrag.y - startAnchor.y;

    // 1. Resolve coordinates for static icons (avoiding collisions among static ones)
    const staticAppList = sortedAppList.filter((app) => !selectedAppIds.has(app.id));
    const { coords: staticCoords } = resolveIconPositions({
      appList: staticAppList,
      posMap,
      activeDrag: null,
      maxRows,
      maxCols,
      cellW,
      cellH,
      desktopSortBy,
    });

    // 2. Assign resolved coordinates (moving selected ones, placing static ones)
    for (const app of sortedAppList) {
      if (selectedAppIds.has(app.id)) {
        const start = dragStartCoords[app.id] || { x: 0, y: 0 };
        resolvedCoords[app.id] = {
          x: start.x + dx,
          y: start.y + dy,
        };
      } else {
        resolvedCoords[app.id] = staticCoords[app.id] || { x: PAD, y: PAD };
      }
    }

    // 3. Compute grid hovered index for the dragged anchor to center/show placeholder layout
    const hCol = Math.max(0, Math.min(maxCols - 1, Math.round((activeDrag.x - PAD) / cellW)));
    const hRow = Math.max(0, Math.min(maxRows - 1, Math.round((activeDrag.y - PAD) / cellH)));
    hoveredIndex = hCol * maxRows + hRow;
  } else {
    // Normal drag or idle state
    const res = resolveIconPositions({
      appList: sortedAppList,
      posMap,
      activeDrag,
      maxRows,
      maxCols,
      cellW,
      cellH,
      desktopSortBy,
    });
    resolvedCoords = res.coords;
    hoveredIndex = res.hoveredIndex;
  }

  // Marquee selection interaction handler
  useEffect(() => {
    const handleWindowPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;

      const target = e.target as HTMLElement;
      // Skip marquee selection when clicking inside windows, menubars, dock, widgets, app icons or menus
      if (
        target.closest('[id^="window-"]') ||
        target.closest('[data-menubar="true"]') ||
        target.closest('[data-dock="true"]') ||
        target.closest('[data-widget="true"]') ||
        target.closest('[data-app-icon="true"]') ||
        target.closest('[data-menu-portal="true"]') ||
        target.closest('[data-radix-popper-content-wrapper]')
      ) {
        return;
      }

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const startX = e.clientX - rect.left;
      const startY = e.clientY - rect.top;

      const hasModifier = e.shiftKey || e.metaKey || e.ctrlKey;

      if (!hasModifier) {
        setSelectedAppIds(new Set());
      }

      setSelectionBox({
        startX,
        startY,
        currentX: startX,
        currentY: startY,
      });
      isSelectingRef.current = true;

      const handlePointerMove = (moveEvent: PointerEvent) => {
        if (!isSelectingRef.current || !containerRef.current) return;
        const moveRect = containerRef.current.getBoundingClientRect();
        const curX = moveEvent.clientX - moveRect.left;
        const curY = moveEvent.clientY - moveRect.top;

        setSelectionBox((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            currentX: curX,
            currentY: curY,
          };
        });

        const x1 = Math.min(startX, curX);
        const y1 = Math.min(startY, curY);
        const x2 = Math.max(startX, curX);
        const y2 = Math.max(startY, curY);

        const iconWidth = labelPosition === 'bottom' ? iconSize + 24 : iconSize + 104;
        const iconHeight = labelPosition === 'bottom' ? iconSize + 40 : iconSize + 24;

        const newSelected = new Set<string>(hasModifier ? selectedAppIdsRef.current : []);

        for (const app of sortedAppListRef.current) {
          // Compare bounds using resolved coords (stable or dragged)
          const appCoord = resolvedCoords[app.id];
          if (!appCoord) continue;

          const ix1 = appCoord.x;
          const iy1 = appCoord.y;
          const ix2 = appCoord.x + iconWidth;
          const iy2 = appCoord.y + iconHeight;

          const intersects = x1 < ix2 && x2 > ix1 && y1 < iy2 && y2 > iy1;

          if (intersects) {
            newSelected.add(app.id);
          } else if (!hasModifier) {
            newSelected.delete(app.id);
          }
        }

        setSelectedAppIds(newSelected);
      };

      const handlePointerUp = () => {
        isSelectingRef.current = false;
        setSelectionBox(null);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      };

      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointerdown', handleWindowPointerDown);
    return () => {
      window.removeEventListener('pointerdown', handleWindowPointerDown);
    };
  }, [labelPosition, iconSize, resolvedCoords]);

  // AppIcon click/drag callbacks
  const handleSelectIcon = (appId: string, e: React.PointerEvent) => {
    const hasModifier = e.shiftKey || e.metaKey || e.ctrlKey;
    if (hasModifier) {
      setSelectedAppIds((prev) => {
        const next = new Set(prev);
        if (next.has(appId)) {
          next.delete(appId);
        } else {
          next.add(appId);
        }
        return next;
      });
    } else {
      if (!selectedAppIds.has(appId)) {
        setSelectedAppIds(new Set([appId]));
      }
    }
  };

  const handleUpAfterClick = (appId: string) => {
    // Pointerup without moving resets selection to only the clicked app
    setSelectedAppIds(new Set([appId]));
  };

  const handleDragStart = (appId: string) => {
    // If the dragged app is already part of the selected set, we drag the group together.
    // If it isn't, we select only it and drag it.
    let group = selectedAppIds;
    if (!selectedAppIds.has(appId)) {
      group = new Set([appId]);
      setSelectedAppIds(group);
    }

    const coordsMap: Record<string, { x: number; y: number }> = {};
    for (const id of group) {
      coordsMap[id] = resolvedCoords[id] || { x: 0, y: 0 };
    }
    setDragStartCoords(coordsMap);
    setActiveDrag({ appId, x: resolvedCoords[appId]?.x || 0, y: resolvedCoords[appId]?.y || 0 });
  };

  const handleDrop = (appId: string, x: number, y: number) => {
    const startAnchor = dragStartCoords[appId];
    if (!startAnchor) {
      setActiveDrag(null);
      return;
    }

    const dragGroup = selectedAppIds.has(appId) ? selectedAppIds : new Set([appId]);

    // Create a temporary posMap reflecting group shift drop positions
    const tempPosMap: Record<string, { x: number; y: number }> = {};
    for (const app of sortedAppList) {
      const orig = posMap[app.id] || { x: PAD, y: PAD };
      if (dragGroup.has(app.id)) {
        const sCol = Math.round((orig.x - PAD) / 108);
        const sRow = Math.round((orig.y - PAD) / 124);

        const startCol = Math.round((startAnchor.x - PAD) / cellW);
        const startRow = Math.round((startAnchor.y - PAD) / cellH);
        const endCol = Math.round((x - PAD) / cellW);
        const endRow = Math.round((y - PAD) / cellH);

        const dCol = endCol - startCol;
        const dRow = endRow - startRow;

        const nCol = Math.max(0, sCol + dCol);
        const nRow = Math.max(0, sRow + dRow);

        tempPosMap[app.id] = {
          x: nCol * cellW + PAD,
          y: nRow * cellH + PAD,
        };
      } else {
        tempPosMap[app.id] = { ...orig };
      }
    }

    // Resolve final coordinates handling collisions against static icons
    const { coords } = resolveIconPositions({
      appList: sortedAppList,
      posMap: tempPosMap,
      activeDrag: null,
      maxRows,
      maxCols,
      cellW,
      cellH,
      desktopSortBy,
    });

    // Commit snaps back to grid representation
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
    setDragStartCoords({});
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none select-none z-10"
      style={{
        top: 'var(--desktop-inset-top)',
        right: 'var(--desktop-inset-right)',
        bottom: 'var(--desktop-inset-bottom)',
        left: 'var(--desktop-inset-left)',
      }}
    >
      {/* Marquee Selection Rectangle rendering */}
      {selectionBox && (
        <div
          className="absolute rounded-sm pointer-events-none"
          style={{
            left: Math.min(selectionBox.startX, selectionBox.currentX),
            top: Math.min(selectionBox.startY, selectionBox.currentY),
            width: Math.abs(selectionBox.startX - selectionBox.currentX),
            height: Math.abs(selectionBox.startY - selectionBox.currentY),
            border: '0.75px solid rgba(255, 255, 255, 0.28)',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            boxShadow: '0 0 4px rgba(0, 0, 0, 0.05)',
          }}
        />
      )}

      {/* Ghost layout placeholders (handles dragging single or multiple icons) */}
      {activeDrag && (() => {
        const isGroup = selectedAppIds.has(activeDrag.appId);
        const targets = isGroup ? Array.from(selectedAppIds) : [activeDrag.appId];
        
        const anchorStart = dragStartCoords[activeDrag.appId] || { x: activeDrag.x, y: activeDrag.y };
        const anchorCol = Math.round((anchorStart.x - PAD) / cellW);
        const anchorRow = Math.round((anchorStart.y - PAD) / cellH);

        const hCol = Math.floor(hoveredIndex / maxRows);
        const hRow = hoveredIndex % maxRows;

        const width = labelPosition === 'bottom' ? iconSize + 24 : iconSize + 104;
        const height = labelPosition === 'bottom' ? iconSize + 40 : iconSize + 24;

        return (
          <>
            {targets.map((id) => {
              const app = apps[id];
              if (!app) return null;

              const appStart = dragStartCoords[id] || { x: 0, y: 0 };
              const appCol = Math.round((appStart.x - PAD) / cellW);
              const appRow = Math.round((appStart.y - PAD) / cellH);

              const colOff = isGroup ? appCol - anchorCol : 0;
              const rowOff = isGroup ? appRow - anchorRow : 0;

              const targetCol = hCol + colOff;
              const targetRow = hRow + rowOff;

              // Keep placeholder bounded inside the desktop grid
              if (targetCol < 0 || targetCol >= maxCols || targetRow < 0 || targetRow >= maxRows) {
                return null;
              }

              const placeholderX = targetCol * cellW + PAD;
              const placeholderY = targetRow * cellH + PAD;
              const draggedAppName = getAppName(app.id, app.name);

              return (
                <div
                  key={`ghost-${id}`}
                  className="absolute rounded-xl border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center p-2.5 z-30"
                  style={{
                    left: placeholderX + (cellW - width) / 2,
                    top: placeholderY + (cellH - height) / 2,
                    width,
                    height,
                    transition: 'left 0.12s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.12s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  }}
                >
                  <div className="opacity-20 scale-75 select-none pointer-events-none">
                    <AppIconImage appConfig={app} size={iconSize} />
                  </div>
                  <span
                    className="block w-full max-w-19 text-white text-[11px] font-medium text-center leading-tight truncate opacity-20 mt-2 select-none pointer-events-none"
                    style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6)' }}
                  >
                    {draggedAppName}
                  </span>
                </div>
              );
            })}
          </>
        );
      })()}

      {sortedAppList.map((app) => {
        const { x, y } = resolvedCoords[app.id] || { x: 0, y: 0 };
        return (
          <AppIcon
            key={app.id}
            appConfig={app}
            x={x}
            y={y}
            isSelected={selectedAppIds.has(app.id)}
            onOpen={onOpenApp}
            onSelect={handleSelectIcon}
            onUpAfterClick={handleUpAfterClick}
            onDragStart={() => handleDragStart(app.id)}
            onDrag={(nx, ny) => setActiveDrag({ appId: app.id, x: nx, y: ny })}
            onDrop={(nx, ny) => handleDrop(app.id, nx, ny)}
          />
        );
      })}
    </div>
  );
}
