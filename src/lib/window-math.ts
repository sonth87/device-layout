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

export interface ResizeBounds {
  minX?: number;
  minY?: number;
  maxX?: number;
  maxY?: number;
}

/**
 * Compute new WindowRect after a resize drag.
 * Clamps to provided minimum dimensions and optional viewport bounds.
 */
export function calcResizeDelta(
  edge: ResizeEdge,
  dx: number,
  dy: number,
  rect: WindowRect,
  minWidth = 320,
  minHeight = 240,
  bounds?: ResizeBounds
): WindowRect {
  let { x, y, width, height } = rect;

  const minX = bounds?.minX ?? -Infinity;
  const minY = bounds?.minY ?? -Infinity;
  const maxX = bounds?.maxX ?? Infinity;
  const maxY = bounds?.maxY ?? Infinity;

  const right = rect.x + rect.width;
  const bottom = rect.y + rect.height;

  // Max allowed dimensions based on current position and screen boundaries
  const maxW_east = Math.max(0, maxX - rect.x);
  const minW_east = Math.min(minWidth, maxW_east);

  const maxW_west = Math.max(0, right - minX);
  const minW_west = Math.min(minWidth, maxW_west);

  const maxH_south = Math.max(0, maxY - rect.y);
  const minH_south = Math.min(minHeight, maxH_south);

  const maxH_north = Math.max(0, bottom - minY);
  const minH_north = Math.min(minHeight, maxH_north);

  switch (edge) {
    case 'e': {
      width = Math.min(maxW_east, Math.max(minW_east, rect.width + dx));
      break;
    }
    case 'w': {
      const nw = Math.min(maxW_west, Math.max(minW_west, rect.width - dx));
      x = right - nw;
      width = nw;
      break;
    }
    case 's': {
      height = Math.min(maxH_south, Math.max(minH_south, rect.height + dy));
      break;
    }
    case 'n': {
      const nh = Math.min(maxH_north, Math.max(minH_north, rect.height - dy));
      y = bottom - nh;
      height = nh;
      break;
    }
    case 'se': {
      width = Math.min(maxW_east, Math.max(minW_east, rect.width + dx));
      height = Math.min(maxH_south, Math.max(minH_south, rect.height + dy));
      break;
    }
    case 'sw': {
      const nw = Math.min(maxW_west, Math.max(minW_west, rect.width - dx));
      x = right - nw;
      width = nw;
      height = Math.min(maxH_south, Math.max(minH_south, rect.height + dy));
      break;
    }
    case 'ne': {
      width = Math.min(maxW_east, Math.max(minW_east, rect.width + dx));
      const nh = Math.min(maxH_north, Math.max(minH_north, rect.height - dy));
      y = bottom - nh;
      height = nh;
      break;
    }
    case 'nw': {
      const nw = Math.min(maxW_west, Math.max(minW_west, rect.width - dx));
      x = right - nw;
      width = nw;
      const nh = Math.min(maxH_north, Math.max(minH_north, rect.height - dy));
      y = bottom - nh;
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
