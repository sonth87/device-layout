'use client';

import React, { createContext, useContext } from 'react';
import { NormalizedSimpleModeFeatures } from '@/types/simple-mode';

const SimpleModeContext = createContext<NormalizedSimpleModeFeatures>({
  isSimpleModeActive: false,
  wallpaper: true,
  allowLiveWallpapers: true,
  contextMenu: true,
  wallpaperPicker: true,
  iconGrid: true,
  menuBar: {
    enabled: true,
    clock: true,
    controlCenter: true,
    spotlight: true,
    appleMenu: true,
    appNameMenu: true,
    appSwitcher: true,
  },
  widgets: {
    showWidgets: true,
    allowGalleryEdit: true,
  },
  dock: true,
  defaultApps: true,
  allowedOSThemes: ['macos', 'windows', 'ipad', 'iphone', 'android'],
  allowDarkModeToggle: true,
});

export function SimpleModeProvider({
  features,
  children,
}: {
  features: NormalizedSimpleModeFeatures;
  children: React.ReactNode;
}) {
  return (
    <SimpleModeContext.Provider value={features}>
      {children}
    </SimpleModeContext.Provider>
  );
}

export function useSimpleModeFeatures() {
  return useContext(SimpleModeContext);
}
