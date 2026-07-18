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
    /** Set when window is maximized at drag-start; actual restore is deferred until pointer moves ≥5px */
    pendingRestore?: {
      prevRect: { x: number; y: number; width: number; height: number };
      maximizedRect: { x: number; y: number; width: number; height: number };
    };
  } | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      // Bring window to front when drag starts (stopPropagation prevents Window.tsx handler)
      focusWindow(windowId);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

      // If the window is maximized/snapped, defer restore until the pointer actually moves.
      // This prevents a single click on the title bar from restoring the window.
      const win = useStore.getState().windows[windowId];
      if (win?.prevRect) {
        // Don't restore yet — record pending restore, will execute on first real drag movement
        startRef.current = {
          mouseX: e.clientX,
          mouseY: e.clientY,
          winX: x.get(),
          winY: y.get(),
          escaped: false,
          pendingRestore: {
            prevRect: { ...win.prevRect },
            maximizedRect: { ...win.rect },
          },
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
      const bottomInset = config.layout.chrome.taskbarHeight;
      const vpW = window.innerWidth;
      const vpH = window.innerHeight;
      const winEl = document.getElementById(`window-${windowId}`);
      const winW = winEl?.offsetWidth ?? 600;
      const winH = winEl?.offsetHeight ?? 400;

      // Calculate escape state before setting up listeners
      const hardMinX = useStore.getState().allowDragOutOfBounds ? -(winW - 200) : 0;
      const hardMaxX = useStore.getState().allowDragOutOfBounds ? vpW - Math.min(200, winW) : vpW - winW;
      const hardMinY = dragTopInset;
      const hardMaxY = useStore.getState().allowDragOutOfBounds 
        ? vpH - Math.min(200, winH) 
        : vpH - bottomInset - winH;

      const currentX = startRef.current?.winX ?? x.get();
      const currentY = startRef.current?.winY ?? y.get();
      const isCurrentlyEscaped = currentX < hardMinX || currentX > hardMaxX ||
                                 currentY < hardMinY || currentY > hardMaxY;

      // Update escaped flag
      if (startRef.current) {
        startRef.current.escaped = isCurrentlyEscaped;
      }

      const onMove = (mv: PointerEvent) => {
        if (!startRef.current) return;

        // Deferred restore: only restore from maximize once pointer has moved ≥5px
        if (startRef.current.pendingRestore) {
          const dx = mv.clientX - startRef.current.mouseX;
          const dy = mv.clientY - startRef.current.mouseY;
          if (Math.hypot(dx, dy) < 5) return; // not moved enough yet — do nothing

          const { prevRect, maximizedRect } = startRef.current.pendingRestore;
          const ratioX = (startRef.current.mouseX - maximizedRect.x) / maximizedRect.width;
          const newWinX = Math.round(startRef.current.mouseX - prevRect.width * Math.min(Math.max(ratioX, 0.1), 0.9));
          const newWinY = startRef.current.mouseY - 15;

          useStore.setState((state) => {
            const w = state.windows[windowId];
            if (w) {
              w.rect = { x: newWinX, y: newWinY, width: prevRect.width, height: prevRect.height };
              w.prevRect = null;
              w.isMaximized = false;
              w.isFullScreen = false;
            }
          });

          startRef.current.winX = newWinX;
          startRef.current.winY = newWinY;
          delete startRef.current.pendingRestore;
        }

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

        // Check if window has already escaped the bounds at drag start
        if (!startRef.current) return;
        const hasEscaped = startRef.current.escaped;

        // If window is already outside bounds, disable all snap behavior and use infinite limits
        const effectiveSnapLoEnabled = !hasEscaped && false;
        const effectiveSnapHiEnabled = !hasEscaped && true;
        
        // If escaped, use infinite hard limits to allow free dragging without clamping
        const effectiveHardMinX = hasEscaped ? -Infinity : hardMinX;
        const effectiveHardMaxX = hasEscaped ? Infinity : hardMaxX;
        const effectiveHardMinY = hasEscaped ? -Infinity : hardMinY;
        const effectiveHardMaxY = hasEscaped ? Infinity : hardMaxY;

        // X: magnetic snap on left and right viewport edges (disabled if escaped)
        const nextX = applyEdgeSnap(rawX, leftEdge, rightEdge, effectiveHardMinX, effectiveHardMaxX, !hasEscaped, !hasEscaped);

        // Y: magnetic snap only applies if window hasn't escaped
        const nextY = applyEdgeSnap(rawY, hardMinY, bottomEdge, effectiveHardMinY, effectiveHardMaxY, effectiveSnapLoEnabled, effectiveSnapHiEnabled);

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

        // If pending restore was never triggered (pure click, no drag), just cancel
        if (startRef.current.pendingRestore) {
          startRef.current = null;
          window.removeEventListener('pointermove', onMove);
          window.removeEventListener('pointerup', onUp);
          return;
        }

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
