import { useCallback } from 'react';
import { browserService, type BrowserProvider } from '@/services/browser-service';

/**
 * Hook to access browser service in React components
 * No re-renders — browserService is a singleton
 */
export function useBrowser(): BrowserProvider {
  return browserService;
}

/**
 * Hook for common browser operations
 */
export function useBrowserActions() {
  const browser = useBrowser();

  return {
    navigate: useCallback((url: string) => browser.navigate(url), [browser]),
    back: useCallback((id: string) => browser.back(id), [browser]),
    forward: useCallback((id: string) => browser.forward(id), [browser]),
    reload: useCallback((id: string) => browser.reload(id), [browser]),
    openExternal: useCallback((url: string) => browser.openExternal(url), [
      browser,
    ]),
    isElectron: useCallback(() => browser.isElectron(), [browser]),
  };
}
