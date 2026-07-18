/**
 * Browser Service — Abstraction layer for browser operations
 * Supports both Electron native views and web iframes
 */
export interface BrowserProvider {
    /**
     * Navigate to a URL
     * @returns browser session ID
     */
    navigate(url: string): Promise<{
        id: string;
    }>;
    /**
     * Go back in history
     */
    back(id: string): Promise<void>;
    /**
     * Go forward in history
     */
    forward(id: string): Promise<void>;
    /**
     * Reload current page
     */
    reload(id: string): Promise<void>;
    /**
     * Open URL in system browser/new window
     */
    openExternal(url: string): Promise<void>;
    /**
     * Check if running in Electron
     */
    isElectron(): boolean;
}
/**
 * Singleton browser provider instance
 * Created once at app initialization
 */
export declare const browserService: BrowserProvider;
/**
 * For testing/manual override
 */
export declare function setBrowserProvider(provider: BrowserProvider): void;
