# Browser Service Architecture

## Overview

The Browser Service implements the **Strategy Pattern** to abstract browser operations across different runtime environments (web and Electron). This allows the React app to remain agnostic about its execution context.

## Architecture

### Layer 1: Service Interface (`src/services/browser-service.ts`)

Defines the core browser provider interface:

```typescript
interface BrowserProvider {
  navigate(url: string): Promise<{ id: string }>;
  back(id: string): Promise<void>;
  forward(id: string): Promise<void>;
  reload(id: string): Promise<void>;
  openExternal(url: string): Promise<void>;
  isElectron(): boolean;
}
```

### Layer 2: Implementations

**WebBrowserProvider** — Web/iframe environment
- Uses `window.open()` for external URLs
- Navigation is managed by component state
- No IPC communication needed

**ElectronBrowserProvider** — Electron native environment
- Communicates via IPC to main process
- Expects `window.electronAPI` to be available (set by preload script)
- Delegates native browser operations to main process

### Layer 3: Runtime Detection

Single-time detection happens at app initialization:

```typescript
export const browserService = detectBrowserProvider();
```

Checks for:
- `window.electronAPI` (exposed by preload script)
- `window.require('electron')` (if nodeIntegration enabled)

### Layer 4: React Hooks (`src/hooks/useBrowser.ts`)

Provide convenient access in components:

```typescript
const browser = useBrowser();
await browser.openExternal(url);
```

## Electron Integration

> ⚠️ **Important:** This section is for Electron projects using device-layout library. Web apps need no setup.

For a complete step-by-step guide to integrate this library in an Electron app, see [Electron Integration Guide](./electron-integration.md).

### Quick Overview

Electron apps must:
1. Create a preload script that exposes `window.electronAPI`
2. Register IPC handlers in the main process
3. The library will auto-detect and use these APIs (zero code changes needed in components)

Example preload:
```typescript
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  browser: {
    navigate: (url: string) =>
      ipcRenderer.invoke('browser:navigate', url),
    // ... other methods
  },
});
```

The library then automatically uses this API instead of iframe.

## Usage in Components

### Before (tightly coupled)

```typescript
const openInNewTab = () => {
  if (isElectron) {
    // Electron logic
  } else {
    window.open(url, '_blank');
  }
};
```

### After (abstracted)

```typescript
import { useBrowser } from '@/hooks/useBrowser';

export function MyComponent() {
  const browser = useBrowser();

  const openInNewTab = async () => {
    try {
      await browser.openExternal(url);
    } catch (error) {
      console.error('Failed:', error);
    }
  };

  // No conditional logic needed
  return <button onClick={openInNewTab}>Open</button>;
}
```

## Benefits

✅ **Single Point of Detection** — Runtime check happens once
✅ **No Conditionals in Components** — All logic in service layer
✅ **Easy Testing** — Mock BrowserProvider for unit tests
✅ **Type Safe** — TypeScript ensures consistent API
✅ **Extensible** — Easy to add new providers (e.g., Tauri, NativeScript)
✅ **Maintainable** — Environment-specific code isolated in providers

## Testing

### Mock Provider for Tests

```typescript
import { setBrowserProvider } from '@/services/browser-service';

// Mock implementation
class MockBrowserProvider implements BrowserProvider {
  async navigate(url: string) {
    console.log('Mock navigate:', url);
    return { id: 'mock-1' };
  }
  // ... other methods
}

// Use in test
beforeEach(() => {
  setBrowserProvider(new MockBrowserProvider());
});
```

## Future Enhancements

- **Platform Detection**: Tauri, Capacitor, NativeScript support
- **Event Emitter**: Listen to browser events (load, error, etc.)
- **History Sync**: Share navigation history between windows
- **Tab Management**: Support multiple browser instances
- **DevTools Integration**: Remote debugging support
