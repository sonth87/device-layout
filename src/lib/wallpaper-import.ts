'use client';

import { createContext, useContext } from 'react';
import type { WallpaperConfig } from '@/types/desktop';

/**
 * Lets a host app (e.g. an Electron shell) supply a real "import a photo as
 * wallpaper" implementation — opens a native file picker, copies the file
 * somewhere durable (Electron: userData), and returns a WallpaperConfig
 * device-layout can hand to addCustomWallpaper(). device-layout itself has
 * no file-system access (ports & adapters — this repo stays environment-
 * agnostic), so the picker's "Add a Photo" button is hidden when this isn't
 * provided (e.g. plain Next.js dev, or a host that hasn't wired it up yet).
 */
export type ImportWallpaperFn = () => Promise<WallpaperConfig | null>;

const WallpaperImportContext = createContext<ImportWallpaperFn | null>(null);

export const WallpaperImportProvider = WallpaperImportContext.Provider;

export function useWallpaperImport(): ImportWallpaperFn | null {
  return useContext(WallpaperImportContext);
}
