interface UseKeyboardShortcutsOptions {
    onSpotlight?: () => void;
    onAppSwitcher?: () => void;
}
/**
 * Global keyboard shortcut handler.
 * Mount once in ThemeProvider.
 */
export declare function useKeyboardShortcuts({ onSpotlight, onAppSwitcher, }?: UseKeyboardShortcutsOptions): void;
export {};
