'use client';

/**
 * Desktop shell — kept for backward compat but logic has moved to ThemeProvider.
 * ThemeProvider now directly renders Wallpaper + IconGrid + WindowManager
 * to avoid remounting on theme switch.
 */
export function Desktop() {
  return null;
}
