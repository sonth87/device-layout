/**
 * Browser Service — Abstraction layer for browser operations
 * Supports both Electron native views and web iframes
 */

export interface BrowserProvider {
  /**
   * Navigate to a URL
   * @returns browser session ID
   */
  navigate(url: string): Promise<{ id: string }>;

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
 * Web implementation — uses iframe/window.open
 */
class WebBrowserProvider implements BrowserProvider {
  isElectron(): boolean {
    return false;
  }

  async navigate(url: string): Promise<{ id: string }> {
    // In web context, we don't actually open new windows
    // Navigation is handled by the Browser component itself
    return { id: 'web-session' };
  }

  async back(id: string): Promise<void> {
    // Handled by component state
  }

  async forward(id: string): Promise<void> {
    // Handled by component state
  }

  async reload(id: string): Promise<void> {
    // Handled by component state
  }

  async openExternal(url: string): Promise<void> {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Electron implementation — uses IPC to communicate with main process
 */
class ElectronBrowserProvider implements BrowserProvider {
  private electron: any;

  constructor() {
    // Type: window.electronAPI should be exposed by preload script
    this.electron =
      (typeof window !== 'undefined' &&
        (window as any).electronAPI) ||
      null;
  }

  isElectron(): boolean {
    return this.electron !== null;
  }

  async navigate(url: string): Promise<{ id: string }> {
    if (!this.electron?.browser?.navigate) {
      console.warn('Electron API not available');
      return { id: 'electron-session' };
    }
    try {
      const result = await this.electron.browser.navigate(url);
      return result;
    } catch (error) {
      console.error('Failed to navigate:', error);
      throw error;
    }
  }

  async back(id: string): Promise<void> {
    if (!this.electron?.browser?.back) return;
    try {
      await this.electron.browser.back(id);
    } catch (error) {
      console.error('Failed to go back:', error);
    }
  }

  async forward(id: string): Promise<void> {
    if (!this.electron?.browser?.forward) return;
    try {
      await this.electron.browser.forward(id);
    } catch (error) {
      console.error('Failed to go forward:', error);
    }
  }

  async reload(id: string): Promise<void> {
    if (!this.electron?.browser?.reload) return;
    try {
      await this.electron.browser.reload(id);
    } catch (error) {
      console.error('Failed to reload:', error);
    }
  }

  async openExternal(url: string): Promise<void> {
    if (!this.electron?.shell?.openExternal) return;
    try {
      await this.electron.shell.openExternal(url);
    } catch (error) {
      console.error('Failed to open external:', error);
    }
  }
}

/**
 * Detect runtime environment and create appropriate provider
 */
function detectBrowserProvider(): BrowserProvider {
  if (typeof window === 'undefined') {
    // SSR context
    return new WebBrowserProvider();
  }

  const isElectron =
    typeof (window as any).electronAPI !== 'undefined' ||
    (typeof (window as any).require !== 'undefined' &&
      (window as any).require('electron'));

  if (isElectron) {
    console.log('[Browser Service] Running in Electron environment');
    return new ElectronBrowserProvider();
  }

  console.log('[Browser Service] Running in web environment');
  return new WebBrowserProvider();
}

/**
 * Singleton browser provider instance
 * Created once at app initialization
 */
export const browserService = detectBrowserProvider();

/**
 * For testing/manual override
 */
export function setBrowserProvider(provider: BrowserProvider) {
  Object.assign(browserService, provider);
}
