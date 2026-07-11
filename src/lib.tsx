'use client';

/**
 * Library entry point (Vite build — see vite.config.ts, mode "lib").
 *
 * This is a separate pipeline from the Next.js app (src/app/). It does NOT
 * import anything under src/app/ — a host application (e.g. an Electron
 * shell) embeds <DeviceLayout> directly instead of routing through Next.js.
 *
 * The Next.js app (src/app/desktop/page.tsx) continues to render
 * <ThemeProvider apps={APPS_CONFIG} /> unaffected by this file.
 */
import { ThemeProvider, type ThemeProviderProps } from '@/components/themes/ThemeProvider';
import { AssetBaseProvider } from '@/lib/asset-base';
import './app/globals.css';

export interface DeviceLayoutProps extends ThemeProviderProps {
  /** Base URL prefix for static assets (wallpapers, icons). Default: '' (root-relative paths). */
  assetBaseUrl?: string;
}

export function DeviceLayout({ assetBaseUrl = '', apps }: DeviceLayoutProps) {
  return (
    <AssetBaseProvider value={assetBaseUrl}>
      <ThemeProvider apps={apps} />
    </AssetBaseProvider>
  );
}

export type { ThemeProviderProps } from '@/components/themes/ThemeProvider';
export type { AppConfig, AppContentProps, AppInstance, MenuBarMenu, MenuBarItem, ContextMenuAction } from '@/types/app';
export { useAssetBase, resolveAssetUrl } from '@/lib/asset-base';
