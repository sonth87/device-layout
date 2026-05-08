import type { WindowRect, ResizeEdge } from '@/types/window';

interface FitWindowRectOptions {
  minWidth?: number;
  minHeight?: number;
}

/**
 * Edge snap zones — macOS behavior:
 *  - Within RESIST_ZONE of screen edge: apply spring resistance (window slows)
 *  - To escape, you must drag ESCAPE_EXTRA px past the edge
 *  - On release within SNAP_ZONE: window snaps to edge
 */
const RESIST_ZONE = 80;  // px — zone where resistance activates
const SNAP_ZONE = 20;    // px — snap on release if within this distance

/**
 * Applies spring resistance when value is within RESIST_ZONE of 0 or maxValue.
 * The closer to the edge, the more resistance. Requires ESCAPE_EXTRA beyond
 * the edge boundary to fully escape.
 */
export function applyEdgeResistance(value: number, maxValue: number, zone = RESIST_ZONE): number {
  if (value < zone) {
    // Near left/top edge: exponential deceleration
    // At value=0 → returns 0 (pinned), at value=zone → returns zone (free)
    const t = Math.max(0, value / zone);
    return zone * (t - Math.sin(t * Math.PI * 0.5) * 0.6);
  }
  if (value > maxValue - zone) {
    // Near right/bottom edge
    const excess = value - (maxValue - zone);
    const t = Math.min(1, excess / zone);
    return (maxValue - zone) + zone * (t * 0.4);
  }
  return value;
}

/** Snap to edge if released close enough */
export function snapIfClose(value: number, maxValue: number, zone = SNAP_ZONE): number {
  if (value <= zone) return 0;
  if (value >= maxValue - zone) return maxValue;
  return value;
}

/** Clamp value between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function fitWindowRectToViewport(
  rect: WindowRect,
  viewportRect: WindowRect,
  { minWidth = 320, minHeight = 240 }: FitWindowRectOptions = {}
): WindowRect {
  const widthLimit = Math.max(1, viewportRect.width);
  const heightLimit = Math.max(1, viewportRect.height);
  const nextWidth = clamp(rect.width, Math.min(minWidth, widthLimit), widthLimit);
  const nextHeight = clamp(rect.height, Math.min(minHeight, heightLimit), heightLimit);

  return {
    x: clamp(rect.x, viewportRect.x, viewportRect.x + viewportRect.width - nextWidth),
    y: clamp(rect.y, viewportRect.y, viewportRect.y + viewportRect.height - nextHeight),
    width: nextWidth,
    height: nextHeight,
  };
}

/**
 * Compute new WindowRect after a resize drag.
 * Clamps to provided minimum dimensions.
 */
export function calcResizeDelta(
  edge: ResizeEdge,
  dx: number,
  dy: number,
  rect: WindowRect,
  minWidth = 320,
  minHeight = 240
): WindowRect {
  let { x, y, width, height } = rect;

  switch (edge) {
    case 'e':  width = Math.max(minWidth, width + dx); break;
    case 'w': {
      const nw = Math.max(minWidth, width - dx);
      x = rect.x + (rect.width - nw);
      width = nw;
      break;
    }
    case 's':  height = Math.max(minHeight, height + dy); break;
    case 'n': {
      const nh = Math.max(minHeight, height - dy);
      y = rect.y + (rect.height - nh);
      height = nh;
      break;
    }
    case 'se': width = Math.max(minWidth, width + dx); height = Math.max(minHeight, height + dy); break;
    case 'sw': {
      const nw = Math.max(minWidth, width - dx);
      x = rect.x + (rect.width - nw);
      width = nw;
      height = Math.max(minHeight, height + dy);
      break;
    }
    case 'ne': {
      width = Math.max(minWidth, width + dx);
      const nh = Math.max(minHeight, height - dy);
      y = rect.y + (rect.height - nh);
      height = nh;
      break;
    }
    case 'nw': {
      const nw = Math.max(minWidth, width - dx);
      x = rect.x + (rect.width - nw);
      width = nw;
      const nh = Math.max(minHeight, height - dy);
      y = rect.y + (rect.height - nh);
      height = nh;
      break;
    }
  }

  return { x, y, width, height };
}

/** Cursor CSS class per resize edge */
export const EDGE_CURSORS: Record<ResizeEdge, string> = {
  n:  'cursor-n-resize',
  ne: 'cursor-ne-resize',
  e:  'cursor-e-resize',
  se: 'cursor-se-resize',
  s:  'cursor-s-resize',
  sw: 'cursor-sw-resize',
  w:  'cursor-w-resize',
  nw: 'cursor-nw-resize',
};
