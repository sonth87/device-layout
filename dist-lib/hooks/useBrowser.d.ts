import { BrowserProvider } from '../services/browser-service';
/**
 * Hook to access browser service in React components
 * No re-renders — browserService is a singleton
 */
export declare function useBrowser(): BrowserProvider;
/**
 * Hook for common browser operations
 */
export declare function useBrowserActions(): {
    navigate: (url: string) => Promise<{
        id: string;
    }>;
    back: (id: string) => Promise<void>;
    forward: (id: string) => Promise<void>;
    reload: (id: string) => Promise<void>;
    openExternal: (url: string) => Promise<void>;
    isElectron: () => boolean;
};
