# Persistence & Store

## Overview

All runtime state lives in a **single Zustand store** composed from slices using Immer for immutable updates. Persistent slices are saved to `localStorage` via the `persist` middleware. URL state handles window positions separately (see [url-state.md](url-state.md)).

---

## Store Slices

| Slice file | State it owns |
|-----------|---------------|
| `window-slice.ts` | Open windows, positions, sizes, z-index, minimize/maximize |
| `app-slice.ts` | Running app instances, active app ID |
| `theme-slice.ts` | OS theme, color scheme, accent color, glass settings |
| `desktop-slice.ts` | Wallpaper, dock order, icon positions, desktop options |
| `notification-slice.ts` | Notification queue |
| `vfs-slice.ts` | Virtual filesystem |
| `widget-slice.ts` | Widget instances, gallery open state |

---

## Accessing the Store

```ts
import { useStore } from '@/store';

// Read state
const osTheme = useStore((s) => s.osTheme);

// Call actions
const setOSTheme = useStore((s) => s.setOSTheme);
setOSTheme('windows');
```

Use fine-grained selectors to avoid unnecessary re-renders:

```ts
// Good — only re-renders when windows map changes
const windows = useStore((s) => s.windows);

// Avoid selecting the entire store in one shot
const store = useStore(); // NOT recommended inside components
```

---

## What Is Persisted

The following slices are persisted to `localStorage` under the key `device-layout-store`:

- `osTheme`, `colorScheme`, `glassEnabled`, `accentColor`, `highlightColor`, `allowDragOutOfBounds`
- `wallpaperId`, `wallpaperFitMode`, `customWallpapers`, `wallpaperCycle`
- `iconLayout`, `dockAppIds`, `dockSize`, `dockMagnification`, `dockAutoHide`
- `desktopIconSize`, `desktopGridSpacing`, `desktopTextSize`, `desktopSortBy`
- `glassMode`, `useStacks`, `stackGroupBy`, `language`
- `vfs` (entire virtual filesystem)
- `widgetInstances`

Window state is **not** persisted to `localStorage` — it lives in the URL (`?w=` params).

---

## theme-slice Reference

```ts
interface ThemeSlice {
  osTheme: OSTheme;                           // 'macos' | 'windows' | 'ipad' | 'iphone' | 'android'
  colorScheme: ColorScheme;                   // 'light' | 'dark' | 'auto'
  resolvedColorScheme: 'light' | 'dark';      // computed from colorScheme + system preference
  glassEnabled: boolean;                      // Liquid Glass on/off
  accentColor: AccentColor;                   // accent color name (e.g. 'blue', 'purple')
  highlightColor: HighlightColor;             // selection highlight color
  allowDragOutOfBounds: boolean;              // windows can be dragged partially off-screen

  setOSTheme(theme: OSTheme): void;
  setColorScheme(scheme: ColorScheme): void;
  setGlassEnabled(enabled: boolean): void;
  resolveColorScheme(systemDark: boolean): void;
  setAccentColor(color: AccentColor): void;
  setHighlightColor(color: HighlightColor): void;
  setAllowDragOutOfBounds(val: boolean): void;
}
```

---

## desktop-slice Reference (key fields)

```ts
interface DesktopSlice {
  wallpaperId: string;
  wallpaperFitMode: 'fill' | 'fit' | 'stretch' | 'center' | 'tile';
  customWallpapers: WallpaperConfig[];
  wallpaperCycle: WallpaperCycleConfig;
  iconLayout: IconPosition[];
  dockAppIds: string[];
  dockSize: number;           // base icon px (default: 43)
  dockMagnification: number;  // hover zoom factor (default: 0.48)
  dockAutoHide: boolean;
  showOpenAppIndicators: boolean;
  glassMode: 'clear' | 'tinted';
  useStacks: boolean;
  stackGroupBy: 'kind' | 'name' | 'date';
  language: SupportedLang;
  desktopIconSize: number;
  desktopGridSpacing: number;
  desktopTextSize: number;
  desktopLabelPosition: 'bottom' | 'right';
  desktopSortBy: 'none' | 'name' | 'kind';
  wallpaperTextTheme: 'light' | 'dark';
}
```

---

## App-Owned Persistence

App components are responsible for their own persistence if needed. Recommended approaches:

1. **Store slice** — add a new slice in `src/store/` for app-level state that needs to survive reloads
2. **`useLocalStorage` hook** — for simple key-value pairs that don't need to be in the global store
3. **VFS** — for user-editable file content (`vfsWriteFile` / `vfsReadFile`)

```ts
import { useLocalStorage } from '@/hooks/useLocalStorage';

function MyApp() {
  const [notes, setNotes] = useLocalStorage<string>('my-app-notes', '');
  // ...
}
```
