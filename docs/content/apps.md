# App System

## Overview

Every app is declared as a plain `AppConfig` object in `src/config/apps.config.ts`. No component changes are needed to register an app — the config is the single source of truth for the icon, name, default size, and behavior.

---

## AppConfig Reference

```ts
interface AppConfig {
  id: string                    // unique identifier, used in URL params and store keys
  name: string                  // display name (dock tooltip, window title)
  icon: string                  // 'lucide:IconName' | '/path/to/icon.svg' | emoji
  iconColor?: [string, string]  // gradient start/end for lucide icon background
  component: string             // key in AppRegistry (or 'IframeApp' | 'MdxApp')
  iframeUrl?: string            // used when component = 'IframeApp'
  mdxPath?: string              // used when component = 'MdxApp'

  defaultSize: { width: number; height: number }
  minSize?: { width: number; height: number }

  hasMenuBar?: boolean          // renders WindowMenuBar inside the window
  hasStatusBar?: boolean        // renders WindowStatusBar inside the window

  category?: string             // used for grouping in Spotlight / App Drawer
  disabled?: boolean            // hides from dock and desktop if true

  contextMenu?: ContextMenuAction[]  // right-click / long-press actions on desktop icon
  menuBarMenus?: MenuBarMenu[]       // top menu bar declarations in macOS MenuBar
  appSettings?: string               // key in AppSettingsRegistry — shows panel in Settings
}

interface ContextMenuAction {
  key: string
  label: string
  action: string               // dispatched via 'app:context:action' CustomEvent
  shortcut?: string            // display-only keyboard shortcut hint
  separator?: boolean          // renders a separator before this item
}

interface MenuBarMenu {
  label: string                // top-level menu title (e.g. "File", "Edit")
  items: MenuBarItem[]
}

interface MenuBarItem {
  key: string
  label: string
  action?: string              // dispatched via 'app:menu:action' CustomEvent
  shortcut?: string
  separator?: boolean
  disabled?: boolean
  children?: MenuBarItem[]     // reserved for sub-menus
}
```

---

## Adding a React Component App

**Step 1 — Add to `apps.config.ts`**

```ts
{
  id: 'my-app',
  name: 'My App',
  icon: 'lucide:Code2',
  iconColor: ['#6366f1', '#4f46e5'],
  component: 'MyApp',
  defaultSize: { width: 800, height: 600 },
  minSize: { width: 400, height: 300 },
  category: 'developer',
}
```

**Step 2 — Create the component**

```tsx
// src/components/apps/MyApp.tsx
'use client';

export interface AppContentProps {
  appId: string
  windowId: string
}

export function MyApp({ appId, windowId }: AppContentProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="p-4">Hello from My App</div>
    </div>
  );
}
```

**Step 3 — Register in `AppRegistry.tsx`**

```ts
MyApp: lazy(() => import('./MyApp').then((m) => ({ default: m.MyApp }))),
```

The app now appears in the desktop icon grid, dock, and app switcher. Double-clicking the icon opens it as a floating window.

---

## Adding an Iframe App

No component needed. Set `component: 'IframeApp'` and provide `iframeUrl`:

```ts
{
  id: 'figma',
  name: 'Figma',
  icon: 'lucide:Figma',
  iconColor: ['#f24e1e', '#a259ff'],
  component: 'IframeApp',
  iframeUrl: 'https://figma.com',
  defaultSize: { width: 1200, height: 800 },
}
```

`IframeApp` renders a sandboxed `<iframe>` that fills the window content area.

---

## Adding an MDX App

Set `component: 'MdxApp'` and provide `mdxPath` pointing to an MDX file under the public directory:

```ts
{
  id: 'docs',
  name: 'Docs',
  icon: 'lucide:BookOpen',
  iconColor: ['#64748b', '#334155'],
  component: 'MdxApp',
  mdxPath: '/content/docs.mdx',
  defaultSize: { width: 900, height: 700 },
}
```

---

## App Icon Rendering (`AppIconImage.tsx`)

Icons are rendered by `AppIconImage`. The `icon` string format:

| Format | Example | Rendered as |
|--------|---------|-------------|
| `lucide:Name` | `lucide:Code2` | Lucide icon centered on gradient background |
| `/path/...` | `/icons/safari.svg` | `<img>` tag |
| Emoji | `🗂️` | Text centered on gradient background |

When `fill={true}` (inside a DockItem during magnification), Lucide icons use `width: '50%'` instead of a fixed pixel size so they scale proportionally with the animated container.

---

## App Store Slice (`app-slice.ts`)

Tracks running app instances. When a window opens, an `AppInstance` is created:

```ts
interface AppInstance {
  appId: string
  windowIds: string[]    // multiple windows of the same app
  isActive: boolean      // whether any window is focused
}
```

The dock reflects running state (dot indicator below the icon) by checking `appInstances`.

---

## Context Menu on App Icons

Right-clicking a desktop or dock icon shows a context menu built from `AppConfig.contextMenu`. Each action dispatches a string to the app; the app is responsible for handling it via a `useEffect` or store listener.

Built-in actions (handled by the shell, not the app):
- `'openWindow'` — opens a new window of this app
- `'closeAll'` — closes all windows of this app
- `'quit'` — closes all windows and removes app instances

---

## Action Event Bus (`useMenuAction` / `useContextAction`)

App menu bar items and context menu items dispatch their `action` strings as typed CustomEvents on `window`. Apps subscribe using hooks from `src/hooks/useMenuAction.ts`:

```ts
import { useMenuAction, useContextAction } from '@/hooks/useMenuAction';

// Inside your app component:
useMenuAction(appId, (action) => {
  if (action === 'newWindow') { /* ... */ }
  if (action === 'save')      { /* ... */ }
});

useContextAction(appId, (action) => {
  if (action === 'getInfo') { /* ... */ }
});
```

Events dispatched:
| Source | CustomEvent name | detail shape |
|--------|-----------------|--------------|
| MenuBar item click | `app:menu:action` | `{ appId, action }` |
| Desktop context menu | `app:context:action` | `{ appId, action }` |

Only events where `detail.appId === appId` reach the hook callback.

### Declaring menu bar menus in AppConfig

```ts
{
  id: 'my-app',
  menuBarMenus: [
    {
      label: 'File',
      items: [
        { key: 'new', label: 'New', shortcut: '⌘N', action: 'new' },
        { key: 'sep1', label: '', separator: true },
        { key: 'close', label: 'Close', shortcut: '⌘W', action: 'close' },
      ],
    },
    {
      label: 'Edit',
      items: [
        { key: 'cut', label: 'Cut', shortcut: '⌘X', action: 'cut' },
        { key: 'copy', label: 'Copy', shortcut: '⌘C', action: 'copy' },
        { key: 'paste', label: 'Paste', shortcut: '⌘V', action: 'paste' },
      ],
    },
  ],
}
```

The macOS `MenuBar` component reads `store.apps[activeAppId]?.menuBarMenus` and falls back to `DEFAULT_MENU_BAR_MENUS` (exported from `apps.config.ts`) when no app is focused.

---

## App-Specific Settings Panels

Declare `appSettings: 'MyAppSettings'` in `AppConfig` to add a panel for this app under the **Applications** group in System Settings.

**Step 1 — Declare in `AppConfig`:**

```ts
{ id: 'my-app', ..., appSettings: 'MyAppSettings' }
```

**Step 2 — Create the panel component:**

```tsx
// src/components/apps/settings/MyAppSettings.tsx
'use client';

export function MyAppSettings() {
  return <div className="space-y-4">...settings UI...</div>;
}
```

**Step 3 — Register in `AppSettingsRegistry.tsx`:**

```ts
MyAppSettings: lazy(() =>
  import('./MyAppSettings').then((m) => ({ default: m.MyAppSettings }))
),
```

The System Settings app automatically lists all apps with `appSettings` defined in the sidebar.

---

## Desktop Icon Grid

Icons are laid out in a column-first grid with constants from `src/components/desktop/IconGrid.tsx`:

```ts
export const CELL_W = 108;   // column width in px
export const CELL_H = 124;   // row height in px
export const PAD    = 20;    // padding from container edge
```

When a drag ends, the icon **snaps to the nearest grid cell** automatically:

```
snappedX = round((rawX − PAD) / CELL_W) × CELL_W + PAD
snappedY = round((rawY − PAD) / CELL_H) × CELL_H + PAD
```

Positions are then clamped to the container bounds before being committed to the store via `moveIcon`.

---

## Mobile Long-Press Context Menu

On touch devices (`pointerType === 'touch'`), holding an app icon for **700 ms** without dragging opens a native-style context menu positioned near the finger. Moving the finger more than 6 px before the timer fires cancels the long-press and initiates a normal drag.

The context menu items come from `AppConfig.contextMenu` and dispatch the same `app:context:action` CustomEvents as the desktop right-click menu.
