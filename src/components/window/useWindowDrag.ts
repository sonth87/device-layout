'use client';

import { useCallback, useRef } from 'react';
import type { MotionValue } from 'motion/react';
import { useStore } from '@/store';
import { useShallow } from 'zustand/react/shallow';
import { useTheme } from '@/hooks/useTheme';
import { emitSnapZone, getSnapZone, getSnapRect } from '@/lib/snap-events';

// How many px past the viewport edge the cursor must travel before the window breaks free
const EDGE_SNAP_ESCAPE = 50;

/**
 * Applies viewport-edge magnetic snap to a single axis.
 *
 * While the window is between the viewport edge (snapLo / snapHi) and
 * EDGE_SNAP_ESCAPE px beyond it, the window is clamped to the edge.
 * Once the cursor overshoots by EDGE_SNAP_ESCAPE the window follows freely,
 * offset so there is no position jump at the moment of release.
 *
 * hardMin / hardMax are the absolute limits beyond which the window can never go
 * (ensures a minimum portion of the window stays reachable on screen).
 */
function applyEdgeSnap(
  raw: number,
  snapLo: number,
  snapHi: number,
  hardMin: number,
  hardMax: number,
  snapLoEnabled: boolean,
  snapHiEnabled: boolean,
): number {
  const c = Math.max(hardMin, Math.min(hardMax, raw));

  if (snapLoEnabled && snapLo > hardMin && c < snapLo) {
    const over = snapLo - c;
    return over < EDGE_SNAP_ESCAPE ? snapLo : c + EDGE_SNAP_ESCAPE;
  }
  if (snapHiEnabled && snapHi < hardMax && c > snapHi) {
    const over = c - snapHi;
    return over < EDGE_SNAP_ESCAPE ? snapHi : c - EDGE_SNAP_ESCAPE;
  }
  return c;
}

interface UseWindowDragOptions {
  windowId: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export function useWindowDrag({ windowId, x, y }: UseWindowDragOptions) {
  const { moveWindow, resizeWindow, maximizeWindow, toggleMaximize, focusWindow } = useStore(
    useShallow((s) => ({
      moveWindow: s.moveWindow,
      resizeWindow: s.resizeWindow,
      maximizeWindow: s.maximizeWindow,
      toggleMaximize: s.toggleMaximize,
      focusWindow: s.focusWindow,
    }))
  );
  const allowDragOutOfBounds = useStore((s) => s.allowDragOutOfBounds);
  const { config } = useTheme();
  const startRef = useRef<{
    mouseX: number;
    mouseY: number;
    winX: number;
    winY: number;
    escaped: boolean;
  } | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      // Bring window to front when drag starts (stopPropagation prevents Window.tsx handler)
      focusWindow(windowId);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

      // If the window is snapped (maximized or snapped left/right), restore only its original dimensions (width/height).
      // Keep the window positioned under the cursor rather than returning to its old coordinates.
      const win = useStore.getState().windows[windowId];
      if (win?.prevRect) {
        const restored = win.prevRect;
        
        // Calculate new position relative to cursor so it centers naturally under pointer
        const ratioX = (e.clientX - win.rect.x) / win.rect.width;
        const newWinX = Math.round(e.clientX - restored.width * Math.min(Math.max(ratioX, 0.1), 0.9));
        // Put titlebar right under cursor (usually titlebar is ~30px high, so offset by 15px)
        const newWinY = e.clientY - 15;

        // Restore dimensions in store, positioning it at the calculated coordinates
        useStore.setState((state) => {
          const w = state.windows[windowId];
          if (w) {
            w.rect = {
              x: newWinX,
              y: newWinY,
              width: restored.width,
              height: restored.height,
            };
            w.prevRect = null;
            w.isMaximized = false;
            w.isFullScreen = false;
          }
        });

        startRef.current = {
          mouseX: e.clientX,
          mouseY: e.clientY,
          winX: newWinX,
          winY: newWinY,
          escaped: false,
        };
      } else {
        startRef.current = {
          mouseX: e.clientX,
          mouseY: e.clientY,
          winX: x.get(),
          winY: y.get(),
          escaped: false,
        };
      }

      const dragTopInset = config.layout.window.dragTopInset;
      // For macOS (no taskbar): bottomInset = 0 so fullscreen fills to viewport bottom.
      // For Windows: bottomInset = taskbarHeight so maximize respects the taskbar.
      const bottomInset = config.layout.chrome.taskbarHeight;

      const onMove = (mv: PointerEvent) => {
        if (!startRef.current) return;
        const vpW = window.innerWidth;
        const vpH = window.innerHeight;

        const rawX = startRef.current.winX + (mv.clientX - startRef.current.mouseX);
        const rawY = startRef.current.winY + (mv.clientY - startRef.current.mouseY);

        const winEl = document.getElementById(`window-${windowId}`);
        const winW = winEl?.offsetWidth ?? 600;
        const winH = winEl?.offsetHeight ?? 400;
        const minTitleVisibleHeight = config.layout.window.minTitleVisibleHeight;

        // Absolute limits — ensure a portion of the window always stays reachable
        const minOverlap = 200;
        const hardMinX = allowDragOutOfBounds 
          ? -(winW - Math.min(minOverlap, winW)) 
          : 0;
        const hardMaxX = allowDragOutOfBounds 
          ? vpW - Math.min(minOverlap, winW) 
          : vpW - winW;
        const hardMinY = dragTopInset;
        const hardMaxY = allowDragOutOfBounds 
          ? vpH - Math.min(minOverlap, winH) 
          : vpH - bottomInset - winH;

        // Viewport-edge snap points
        const leftEdge = 0;
        const rightEdge = vpW - winW;
        const bottomEdge = vpH - bottomInset - winH;

        // X: magnetic snap on left and right viewport edges
        const nextX = applyEdgeSnap(rawX, leftEdge, rightEdge, hardMinX, hardMaxX, true, true);

        // Y: hard clamp on top (menubar), magnetic snap on bottom edge
        const nextY = applyEdgeSnap(rawY, hardMinY, bottomEdge, hardMinY, hardMaxY, false, true);

        x.set(nextX);
        y.set(nextY);

        // Detect top snap only when pointer is hovered deep inside the top menu bar (near the very top of the screen, e.g. Y <= 10px),
        // matching macOS behavior where you must drag the pointer near the top edge.
        const atTopBoundary = mv.clientY <= 10;
        const zone = atTopBoundary ? 'top' : getSnapZone(mv.clientX, mv.clientY, dragTopInset);
        emitSnapZone(zone, true, dragTopInset, bottomInset);
      };

      const onUp = (uv: PointerEvent) => {
        if (!startRef.current) return;
        const finalX = x.get();
        const finalY = y.get();

        // Same Y <= 10px check on release.
        const atTopBoundary = uv.clientY <= 10;
        const zone = atTopBoundary ? 'top' : getSnapZone(uv.clientX, uv.clientY, dragTopInset);
        const snapRect = getSnapRect(zone, dragTopInset, bottomInset);
        if (snapRect) {
          if (zone === 'top') {
            // Full-screen snap — mark as maximized so auto-hide dock triggers
            maximizeWindow(windowId, snapRect);
          } else {
            resizeWindow(windowId, snapRect);
          }
        } else {
          moveWindow(windowId, finalX, finalY);
        }

        emitSnapZone(null, false, dragTopInset, bottomInset);
        startRef.current = null;
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    },
    [config.layout.window.dragTopInset, config.layout.chrome.taskbarHeight, config.layout.window.minTitleVisibleHeight, x, y, windowId, moveWindow, resizeWindow, maximizeWindow, toggleMaximize, focusWindow]
  );

  return { onPointerDown };
}
