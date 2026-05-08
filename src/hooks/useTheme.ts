'use client';

import { useStore } from '@/store';
import { THEMES_CONFIG } from '@/config/themes.config';

export function useTheme() {
  const osTheme = useStore((s) => s.osTheme);
  const resolvedColorScheme = useStore((s) => s.resolvedColorScheme);
  const glassEnabled = useStore((s) => s.glassEnabled);

  const config = THEMES_CONFIG[osTheme];

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
