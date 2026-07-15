import { WallpaperConfig } from '../types/desktop';
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
export declare const WallpaperImportProvider: import('react').Provider<ImportWallpaperFn | null>;
export declare function useWallpaperImport(): ImportWallpaperFn | null;
