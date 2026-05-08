import type { WindowState } from '@/types/window';

/**
 * Wire format: "appId:x,y,width,height[:flagsBitmask[:px,py,pw,ph]]"
 * Flags: 1 = minimized, 2 = maximized
 * prevRect (px,py,pw,ph) is appended only when flags > 0 and prevRect exists.
 *
 * Example: "finder:100,200,800,600"
 *          "terminal:0,28,1440,868:2:300,200,600,400"  ← maximized, prevRect saved
 */

export function encodeWindowToParam(w: WindowState): string {
  const flags = (w.isMinimized ? 1 : 0) | (w.isMaximized ? 2 : 0);
  const rect = [
    Math.round(w.rect.x),
    Math.round(w.rect.y),
    Math.round(w.rect.width),
    Math.round(w.rect.height),
  ].join(',');

  if (flags === 0) return `${w.appId}:${rect}`;

  if (w.prevRect) {
    const prev = [
      Math.round(w.prevRect.x),
      Math.round(w.prevRect.y),
      Math.round(w.prevRect.width),
      Math.round(w.prevRect.height),
    ].join(',');
    return `${w.appId}:${rect}:${flags}:${prev}`;
  }

  return `${w.appId}:${rect}:${flags}`;
}

export function decodeWindowFromParam(
  param: string
): {
  appId: string;
  rect: { x: number; y: number; width: number; height: number };
  prevRect: { x: number; y: number; width: number; height: number } | null;
  isMinimized: boolean;
  isMaximized: boolean;
} | null {
  const parts = param.split(':');
  if (parts.length < 2) return null;
  const appId = parts[0];
  const rectStr = parts[1];
  const flagStr = parts[2];
  const prevStr = parts[3];

  const nums = rectStr.split(',').map(Number);
  if (nums.length !== 4 || nums.some(isNaN)) return null;
  const [x, y, width, height] = nums;

  const flags = flagStr ? parseInt(flagStr, 10) : 0;

  let prevRect = null;
  if (prevStr) {
    const pNums = prevStr.split(',').map(Number);
    if (pNums.length === 4 && !pNums.some(isNaN)) {
      const [px, py, pw, ph] = pNums;
      prevRect = { x: px, y: py, width: pw, height: ph };
    }
  }

  return {
    appId,
    rect: { x, y, width, height },
    prevRect,
    isMinimized: Boolean(flags & 1),
    isMaximized: Boolean(flags & 2),
  };
}
