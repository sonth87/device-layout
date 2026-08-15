'use client';

import { useStore } from '@/store';
import { THEMES_CONFIG } from '@/config/themes.config';

export function useTheme() {
  const osTheme = useStore((s) => s.osTheme);
  const resolvedColorScheme = useStore((s) => s.resolvedColorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);

  // Fallback to macos if osTheme is somehow invalid (e.g. during hydration or
  // corrupted localStorage). THEMES_CONFIG[undefined] would be undefined and
  // cause config.layout crashes downstream.
  const config = THEMES_CONFIG[osTheme] ?? THEMES_CONFIG['macos'];

  return {
    osTheme,
    colorScheme: resolvedColorScheme,
    glassEnabled,
    config,
    isGlass: config.hasLiquidGlass && glassEnabled,
    isFloating: config.hasFloatingWindows,
    isMobile: osTheme === 'iphone' || osTheme === 'android',
  };
}

