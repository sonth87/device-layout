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

      // If the window is currently maximized, unmaximize it first.
      // Use prevRect as the drag origin so it "appears" to shrink under the cursor.
      const win = useStore.getState().windows[windowId];
      if (win?.isMaximized) {
        const vpW = window.innerWidth;
        const vpH = window.innerHeight;
        const dragTopInset2 = config.layout.window.dragTopInset;
        const bottomInset2 = config.layout.chrome.taskbarHeight;
        const viewportRect = { x: 0, y: dragTopInset2, width: vpW, height: vpH - dragTopInset2 - bottomInset2 };
        // This restores prevRect and clears isMaximized
        toggleMaximize(windowId, viewportRect);
        // After toggle, the store has restored prevRect → MotionValues will animate there.
        // Set startRef to the restored position so drag math is correct.
        const restored = win.prevRect ?? win.rect;
        // We want the window to follow the cursor as if the drag started from restored position.
        // Offset the drag origin so the pointer stays roughly where it was (proportional).
        const ratioX = (e.clientX - win.rect.x) / win.rect.width;
        const newWinX = Math.round(e.clientX - restored.width * Math.min(Math.max(ratioX, 0.1), 0.9));
        const newWinY = restored.y;
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
        const hardMinX = -(winW - 120);
        const hardMaxX = vpW - 120;
        const hardMinY = dragTopInset;
        const hardMaxY = vpH - minTitleVisibleHeight;

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

        // Detect top snap by whether the window has hit the top boundary (dragTopInset),
        // rather than raw pointer Y — the pointer is usually mid-titlebar so it
        // never gets close enough to viewport top to trigger the EDGE check.
        const atTopBoundary = nextY <= dragTopInset && rawY < dragTopInset;
        const zone = atTopBoundary ? 'top' : getSnapZone(mv.clientX, mv.clientY, dragTopInset);
        emitSnapZone(zone, true, dragTopInset, bottomInset);
      };

      const onUp = (uv: PointerEvent) => {
        if (!startRef.current) return;
        const finalX = x.get();
        const finalY = y.get();

        // Check if we released over a snap zone
        // Same logic as onMove: use window position for top, pointer edges for sides.
        const finalRawY = startRef.current
          ? startRef.current.winY + (uv.clientY - startRef.current.mouseY)
          : y.get();
        const atTopBoundary = finalX !== undefined && finalRawY < dragTopInset;
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
