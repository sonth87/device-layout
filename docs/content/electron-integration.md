# Electron Integration Guide

> This guide is for **Electron projects that integrate the device-layout library**

## Overview

The device-layout library includes `BrowserService` which automatically detects the runtime environment. For **Electron apps**, you must manually expose the browser API via a preload script. For **web apps**, no setup is needed.

---

## ⚠️ Important: Library vs. Project

- **device-layout (library)**: Already has BrowserService built-in ✓
- **Your Electron app (project)**: Must add preload + IPC handlers

The library will auto-detect and use your Electron API if available.

---

## Setup Steps for Electron Apps

### Step 1: Install Dependencies

```bash
pnpm add -D electron electron-builder
pnpm add device-layout  # Or your local path
```

### Step 2: Create Preload Script

Create `src/electron/preload.ts` in your Electron app:

```typescript
import { contextBridge, ipcRenderer } from 'electron';

const electronAPI = {
  browser: {
    navigate: (url: string) =>
      ipcRenderer.invoke('browser:navigate', url),
    
    back: (id: string) =>
      ipcRenderer.invoke('browser:back', id),
    
    forward: (id: string) =>
      ipcRenderer.invoke('browser:forward', id),
    
    reload: (id: string) =>
      ipcRenderer.invoke('browser:reload', id),
  },
  
  shell: {
    openExternal: (url: string) =>
      ipcRenderer.invoke('shell:openExternal', url),
  },
};

contextBridge.exposeInMainWorld('electronAPI', electronAPI);
```

### Step 3: Configure BrowserWindow

Update your main process to use the preload script:

```typescript
// main.ts
import path from 'path';
import { BrowserWindow } from 'electron';

const mainWindow = new BrowserWindow({
  width: 1200,
  height: 800,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'), // Compiled preload
    sandbox: true, // Important for security
    nodeIntegration: false,
    enableRemoteModule: false,
  },
});

mainWindow.loadFile('index.html');
```

### Step 4: Handle IPC Messages

In your main process, implement the IPC handlers:

```typescript
// main.ts
import { ipcMain, shell, BrowserWindow, WebContentsView } from 'electron';

// Store browser instances
const browserInstances = new Map<string, WebContentsView>();

// Handle browser:navigate
ipcMain.handle('browser:navigate', async (event, url) => {
  const browserWindow = BrowserWindow.getFocusedWindow();
  if (!browserWindow) return { id: null };

  const browserId = `browser-${Date.now()}`;
  const browserView = new WebContentsView({
    webPreferences: {
      sandbox: true,
    },
  });

  // Optionally add to window
  browserWindow.contentView.addChildView(browserView);
  browserView.setBounds({ x: 0, y: 0, width: 1200, height: 600 });

  // Navigate to URL
  await browserView.webContents.loadURL(url);

  // Store reference
  browserInstances.set(browserId, browserView);

  return { id: browserId };
});

// Handle browser:back
ipcMain.handle('browser:back', async (event, id: string) => {
  const browserView = browserInstances.get(id);
  if (browserView?.webContents.canGoBack()) {
    browserView.webContents.goBack();
  }
});

// Handle browser:forward
ipcMain.handle('browser:forward', async (event, id: string) => {
  const browserView = browserInstances.get(id);
  if (browserView?.webContents.canGoForward()) {
    browserView.webContents.goForward();
  }
});

// Handle browser:reload
ipcMain.handle('browser:reload', async (event, id: string) => {
  const browserView = browserInstances.get(id);
  browserView?.webContents.reload();
});

// Handle shell:openExternal
ipcMain.handle('shell:openExternal', async (event, url: string) => {
  return shell.openExternal(url);
});
```

### Step 5: Build Configuration

Ensure your build tool compiles the preload script:

**With Vite:**
```typescript
// vite.config.ts
export default {
  build: {
    lib: {
      entry: {
        main: 'src/main.ts',
        preload: 'src/electron/preload.ts',
      },
    },
  },
};
```

**With tsup:**
```bash
pnpm build  # Ensure preload.ts is compiled to preload.js
```

---

## Usage in Your Electron App

Once preload is set up, the library automatically detects and uses your API. No changes needed in React components:

```typescript
// In your React component (from device-layout library)
import { useBrowser } from 'device-layout';

export function MyComponent() {
  const browser = useBrowser();

  const handleOpenInNewWindow = async () => {
    // On web: uses window.open()
    // On Electron: uses window.electronAPI.shell.openExternal()
    await browser.openExternal('https://example.com');
  };

  return <button onClick={handleOpenInNewWindow}>Open</button>;
}
```

---

## Detection Flow

```
App starts
    ↓
device-layout detects runtime
    ↓
┌─────────────────────────┬──────────────────────┐
│                         │                      │
↓                         ↓                      ↓
window.electronAPI exists?    No                (rare case)
│                                             
Yes ✓                                         → WebBrowserProvider
│                                               (iframe, window.open)
→ ElectronBrowserProvider
  (IPC to main process)
  ↓
  Calls window.electronAPI.browser.navigate()
  ↓
  IPC → main process
  ↓
  ipcMain.handle('browser:navigate', ...)
  ↓
  Creates BrowserWindow/WebContentsView
  ✓
```

---

## Troubleshooting

### "window.electronAPI is undefined"

**Check:**
- Preload script is compiled and exists in build output
- BrowserWindow config has correct `preload` path
- Restart the Electron app after changing preload

### "IPC handler not registered"

**Check:**
- `ipcMain.handle()` is called before window loads
- IPC method name matches exactly (case-sensitive)

### "Sandbox issues"

**Solution:**
- Ensure `sandbox: true` in webPreferences
- Use `contextBridge` to expose only necessary APIs
- Never expose `require` or `eval`

---

## Web Apps (No Setup Needed)

If your app runs on the web, the library automatically falls back to `WebBrowserProvider`:

```typescript
// No setup needed, just use the library
import { useBrowser } from 'device-layout';

export function MyComponent() {
  const browser = useBrowser();
  // Works on web with iframe automatically
  await browser.openExternal(url);
}
```

---

## Next Steps

- ✅ Create preload script
- ✅ Register IPC handlers
- ✅ Build and test
- ✅ Library automatically adapts (zero code changes)

For more details, see [Browser Service Architecture](./browser-service.md)
