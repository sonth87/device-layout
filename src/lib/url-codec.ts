import type { WindowState } from '@/types/window';

/**
 * Wire format: "appId:x,y,width,height[:flagsBitmask]"
 * Flags: 1 = minimized, 2 = maximized
 *
 * Example: "finder:100,200,800,600" or "terminal:300,400,600,400:1"
 */

export function encodeWindowToParam(w: WindowState): string {
  const flags = (w.isMinimized ? 1 : 0) | (w.isMaximized ? 2 : 0);
  const rect = [
    Math.round(w.rect.x),
    Math.round(w.rect.y),
    Math.round(w.rect.width),
    Math.round(w.rect.height),
  ].join(',');
  return flags > 0 ? `${w.appId}:${rect}:${flags}` : `${w.appId}:${rect}`;
}

export function decodeWindowFromParam(
  param: string
): { appId: string; rect: { x: number; y: number; width: number; height: number }; isMinimized: boolean; isMaximized: boolean } | null {
  const parts = param.split(':');
  if (parts.length < 2) return null;
  const appId = parts[0];
  const rectStr = parts[1];
  const flagStr = parts[2];

  const nums = rectStr.split(',').map(Number);
  if (nums.length !== 4 || nums.some(isNaN)) return null;
  const [x, y, width, height] = nums;

  const flags = flagStr ? parseInt(flagStr, 10) : 0;
  return {
    appId,
    rect: { x, y, width, height },
    isMinimized: Boolean(flags & 1),
    isMaximized: Boolean(flags & 2),
  };
}
