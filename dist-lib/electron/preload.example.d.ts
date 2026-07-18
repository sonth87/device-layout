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
export {};
