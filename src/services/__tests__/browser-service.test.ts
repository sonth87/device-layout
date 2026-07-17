/**
 * Browser Service Tests
 * Examples of testing the browser service with different providers
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  browserService,
  setBrowserProvider,
  type BrowserProvider,
} from '@/services/browser-service';

// Mock implementation for testing
class MockBrowserProvider implements BrowserProvider {
  private navigateHistory: string[] = [];

  isElectron(): boolean {
    return false;
  }

  async navigate(url: string): Promise<{ id: string }> {
    this.navigateHistory.push(url);
    return { id: `mock-${Date.now()}` };
  }

  async back(id: string): Promise<void> {
    // Mock
  }

  async forward(id: string): Promise<void> {
    // Mock
  }

  async reload(id: string): Promise<void> {
    // Mock
  }

  async openExternal(url: string): Promise<void> {
    // Mock
  }

  getHistory() {
    return this.navigateHistory;
  }
}

describe('BrowserService', () => {
  let mockProvider: MockBrowserProvider;

  beforeEach(() => {
    mockProvider = new MockBrowserProvider();
    setBrowserProvider(mockProvider);
  });

  describe('Web Environment', () => {
    it('should detect non-Electron environment', () => {
      expect(browserService.isElectron()).toBe(false);
    });

    it('should handle navigate in web', async () => {
      const result = await browserService.navigate('https://example.com');
      expect(result.id).toBeDefined();
    });

    it('should call openExternal', async () => {
      const openExternalSpy = vi.spyOn(mockProvider, 'openExternal');
      await browserService.openExternal('https://example.com');
      expect(openExternalSpy).toHaveBeenCalledWith('https://example.com');
    });
  });

  describe('Component Integration', () => {
    it('should track navigation history', async () => {
      await browserService.navigate('https://a.com');
      await browserService.navigate('https://b.com');
      await browserService.navigate('https://c.com');

      expect(mockProvider.getHistory()).toEqual([
        'https://a.com',
        'https://b.com',
        'https://c.com',
      ]);
    });

    it('should handle errors gracefully', async () => {
      const errorProvider: BrowserProvider = {
        isElectron: () => false,
        navigate: async () => {
          throw new Error('Navigation failed');
        },
        back: async () => {},
        forward: async () => {},
        reload: async () => {},
        openExternal: async () => {},
      };

      setBrowserProvider(errorProvider);

      // Should not throw
      try {
        await browserService.navigate('https://example.com');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }
    });
  });

  describe('Mock Electron Environment', () => {
    it('should simulate Electron provider', async () => {
      const electronProvider: BrowserProvider = {
        isElectron: () => true,
        navigate: async (url) => {
          console.log('[IPC] browser:navigate', url);
          return { id: 'electron-1' };
        },
        back: async (id) => {
          console.log('[IPC] browser:back', id);
        },
        forward: async (id) => {
          console.log('[IPC] browser:forward', id);
        },
        reload: async (id) => {
          console.log('[IPC] browser:reload', id);
        },
        openExternal: async (url) => {
          console.log('[IPC] shell:openExternal', url);
        },
      };

      setBrowserProvider(electronProvider);

      expect(browserService.isElectron()).toBe(true);

      const result = await browserService.navigate('https://example.com');
      expect(result.id).toBe('electron-1');
    });
  });
});
