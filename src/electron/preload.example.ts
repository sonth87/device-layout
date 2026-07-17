/**
 * Example Electron preload script
 * This exposes the browser API to the React app via window.electronAPI
 * 
 * Usage in main.ts:
 * ```
 * webPreferences: {
 *   preload: path.join(__dirname, 'preload.ts'),
 *   sandbox: true,
 * }
 * ```
 */

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
