'use client';

import { createContext, useContext } from 'react';

/**
 * AssetBase — lets a host application (e.g. an Electron shell bundling this
 * as a library) serve static assets (wallpapers, icons) from a different
 * origin/path than Next.js's `/public`. Defaults to '' so existing Next.js
 * callers see identical absolute paths (e.g. '/wallpapers/bg-1.jpg').
 */
const AssetBaseContext = createContext<string>('');

export const AssetBaseProvider = AssetBaseContext.Provider;

export function useAssetBase(): string {
  return useContext(AssetBaseContext);
}

export function resolveAssetUrl(base: string, path: string): string {
  if (!base || !path) return path ?? '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  return `${base.replace(/\/$/, '')}${path.startsWith('/') ? '' : '/'}${path}`;
}
