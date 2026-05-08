'use client';

import { useEffect } from 'react';
import { useStore } from '@/store';

interface UseKeyboardShortcutsOptions {
  onSpotlight?: () => void;
  onAppSwitcher?: () => void;
}

/**
 * Global keyboard shortcut handler.
 * Mount once in ThemeProvider.
 */
export function useKeyboardShortcuts({
  onSpotlight,
  onAppSwitcher,
}: UseKeyboardShortcutsOptions = {}) {
  const closeWindow = useStore((s) => s.closeWindow);
  const minimizeWindow = useStore((s) => s.minimizeWindow);
  const focusedWindowId = useStore((s) => s.focusedWindowId);
  const osTheme = useStore((s) => s.osTheme);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (!meta) return;

      switch (e.key) {
        case 'w':
          if (focusedWindowId) {
            e.preventDefault();
            closeWindow(focusedWindowId);
          }
          break;

        case 'm':
          if (focusedWindowId) {
            e.preventDefault();
            minimizeWindow(focusedWindowId);
          }
          break;

        case ' ':
          if (osTheme === 'macos' || osTheme === 'ipad') {
            e.preventDefault();
            onSpotlight?.();
          }
          break;

        case 'Tab':
          e.preventDefault();
          onAppSwitcher?.();
          break;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [focusedWindowId, osTheme, closeWindow, minimizeWindow, onSpotlight, onAppSwitcher]);
}
