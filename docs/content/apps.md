# App System

## Overview

Every app is declared as a plain `AppConfig` object in `src/config/apps.config.ts`. No component changes are needed to register an app — the config is the single source of truth for the icon, name, default size, and behavior.

---

## AppConfig Reference

```ts
interface AppConfig {
  id: string                     // unique identifier — used in URL params and store keys
  name: string                   // display name (dock tooltip, window title, About dialog)
  icon: string                   // 'lucide:IconName' | '/path/to/icon.svg' | emoji string
  iconColor?: [string, string]   // gradient [from, to] for lucide/emoji icon background
  iconTextColor?: string         // icon foreground color (default: white)
  component: string              // key in AppRegistry, or 'IframeApp' | 'MdxApp'
  disabled?: boolean             // hide from dock, desktop, and spotlight

  defaultSize?: { width: number; height: number }   // initial window size
  defaultPosition?: { x: number; y: number }        // initial window position (px from top-left)
  minSize?: { width: number; height: number }        // resize constraint

  hasMenuBar?: boolean           // render WindowMenuBar chrome inside the window frame
  hasStatusBar?: boolean         // render WindowStatusBar at the bottom of the window frame

  category?: string              // grouping label in Spotlight / App Drawer / Settings sidebar
  launchMode?: 'single' | 'multi'  // 'single': reuses existing window; 'multi': opens new window each time (default: single)
  mobileFullscreen?: boolean     // on iPhone/Android themes, always open at full screen

  iframeUrl?: string             // URL loaded by IframeApp
  mdxSlug?: string               // MDX slug loaded by MdxApp (maps to /content/<slug>.mdx)
  badge?: string | number        // dock/taskbar badge counter

  contextMenu?: ContextMenuAction[]   // right-click / long-press menu on dock/desktop icons
  menuBarMenus?: MenuBarMenu[]        // macOS top menu bar menus when this app is active
  appSettings?: string                // key in AppSettingsRegistry — panel inside System Settings
}
```

### Field defaults

| Field | Default |
|-------|---------|
| `launchMode` | `'single'` |
| `mobileFullscreen` | `false` |
| `hasMenuBar` | `false` |
| `hasStatusBar` | `false` |
| `iconTextColor` | `'#ffffff'` |
| `minSize` | no constraint |
| `defaultPosition` | centered on screen |

---

## Adding a React Component App

### Step 1 — Declare in `apps.config.ts`

```ts
// src/config/apps.config.ts
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

### Step 2 — Create the component

```tsx
// src/components/apps/MyApp.tsx
'use client';

export interface AppContentProps {
  appId: string;
  windowId: string;
}

export function MyApp({ appId, windowId }: AppContentProps) {
  return (
    <div className="flex h-full flex-col p-4">
      Hello from My App
    </div>
  );
}
```

Every app component receives `appId` and `windowId` as props. The root element should be `h-full` so it fills the window content area.

### Step 3 — Register in `AppRegistry.tsx`

```ts
// src/components/apps/AppRegistry.tsx
MyApp: lazy(() => import('./MyApp').then((m) => ({ default: m.MyApp }))),
```

The app now appears in the desktop icon grid, dock, Spotlight, and App Drawer. Double-clicking the icon opens it as a floating window.

---

## Adding an Iframe App

No component file needed. Set `component: 'IframeApp'` and `iframeUrl`:

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

Set `component: 'MdxApp'` and `mdxSlug` pointing to a file under `/content/`:

```ts
{
  id: 'docs',
  name: 'Docs',
  icon: 'lucide:BookOpen',
  iconColor: ['#64748b', '#334155'],
  component: 'MdxApp',
  mdxSlug: 'docs',          // loads /content/docs.mdx
  defaultSize: { width: 900, height: 700 },
}
```

---

## App Icon Rendering

Icons are rendered by `AppIconImage`. The `icon` string format:

| Format | Example | Result |
|--------|---------|--------|
| `lucide:Name` | `lucide:Code2` | Lucide icon centered on gradient background |
| `/path/...` | `/icons/safari.svg` | `<img>` tag, no background |
| Emoji | `🗂️` | Emoji text centered on gradient background |

`iconColor` sets the gradient background (required for lucide and emoji icons).  
`iconTextColor` overrides the default white icon/text color — useful for light backgrounds (e.g. TextEdit uses `'#1c1c1e'`).

---

## Layouts

### Full-area (default)

The simplest layout: fill the entire window with one view. Good for media players, clocks, canvases.

```tsx
export function MyApp({ appId }: AppContentProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex-1 p-4">Content</div>
    </div>
  );
}
```

---

### Sidebar + content (`AppSplitView`)

For apps with a persistent left sidebar (Settings, Finder-style browsers).

```tsx
import { AppSplitView } from '@/components/apps/AppSplitView';

export function MyApp({ appId }: AppContentProps) {
  return (
    <AppSplitView
      sidebar={<MySidebar />}
      sidebarWidthClass="w-52"       // any Tailwind width class
      sidebarClassName="bg-black/5 dark:bg-white/5 overflow-y-auto"
      contentClassName="overflow-y-auto"
    >
      {({ width, height }) => (
        // content area — receives measured dimensions
        <MyContent areaWidth={width} />
      )}
    </AppSplitView>
  );
}
```

`AppSplitView` props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sidebar` | `ReactNode` | — | Left panel content |
| `sidebarWidthClass` | `string` | `'w-52'` | Tailwind width class for the sidebar |
| `sidebarClassName` | `string` | — | Extra classes on the `<aside>` |
| `contentClassName` | `string` | — | Extra classes on the `<main>` |
| `children` | `(size) => ReactNode` | — | Render-prop receiving `{ width, height }` of the content area |

---

### Mobile-adaptive split view (`MobileSplitView`)

For apps that show a sidebar+detail layout on desktop, but a native-style push navigation (list → detail slide) on mobile.

```tsx
import { MobileSplitView, useMobileSplitBack } from '@/components/apps/MobileSplitView';

export function MyApp({ appId }: AppContentProps) {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <MobileSplitView
      list={<MyList onSelect={setSelected} />}
      detail={selected ? <MyDetail item={selected} /> : null}
      onBack={() => setSelected(null)}
      sidebarWidth="w-56"            // desktop sidebar width
      listClassName="bg-black/3 dark:bg-white/3"
    />
  );
}

// Inside a detail panel — call this to go back on mobile
function MyDetailPanel() {
  const goBack = useMobileSplitBack();
  return (
    <div>
      <button onClick={goBack ?? undefined}>← Back</button>
    </div>
  );
}
```

`MobileSplitView` props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `list` | `ReactNode` | — | Left/list panel (always visible on desktop) |
| `detail` | `ReactNode \| null` | — | Right/detail panel; `null` shows "Select an item" placeholder |
| `onBack` | `() => void` | — | Called when back button is tapped on mobile |
| `sidebarWidth` | `string` | `'w-60'` | Tailwind width class for desktop sidebar |
| `listClassName` | `string` | — | Extra classes on the list panel |
| `detailClassName` | `string` | — | Extra classes on the detail panel |

On mobile (`width < 480px`) the detail panel slides in from the right over the list. On desktop both panels are shown side-by-side.

---

### Responsive single-view (`useAppLayout`)

For apps that don't use a sidebar but still need to adapt their layout to the window size — e.g. switching from a 3-column grid to 1 column when the window is resized small.

```tsx
import { useAppLayout } from '@/hooks/useAppLayout';

export function MyApp({ appId }: AppContentProps) {
  const { isNarrow, isMedium, isWide, cols, width } = useAppLayout();

  return (
    <div
      className="grid gap-3 p-4"
      style={{ gridTemplateColumns: `repeat(${cols(1, 2, 4)}, 1fr)` }}
    >
      {items.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
}
```

`useAppLayout()` returns:

| Property | Type | Description |
|----------|------|-------------|
| `width` | `number` | Container width in px (0 before first measure) |
| `height` | `number` | Container height in px |
| `isNarrow` | `boolean` | `width < 480` — phone frame or very small window |
| `isMedium` | `boolean` | `480 ≤ width < 720` |
| `isWide` | `boolean` | `width ≥ 720` |
| `size` | `'narrow' \| 'medium' \| 'wide'` | Convenience string |
| `cols(n, m, w)` | `(n,m,w: number) => number` | Returns `n`/`m`/`w` depending on current size |

Sizes are measured against the **window content area**, not the browser viewport — so they work correctly when the app runs inside a phone frame or a small floating window.

---

## Action Event Bus

App menu bar items and context menu items dispatch their `action` strings as CustomEvents on `window`. Apps subscribe using hooks from `src/hooks/useMenuAction.ts`:

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

| Source | CustomEvent name | `detail` shape |
|--------|-----------------|----------------|
| MenuBar item click | `app:menu:action` | `{ appId, action }` |
| Desktop/dock context menu | `app:context:action` | `{ appId, action }` |

Only events where `detail.appId === appId` reach the callback.

---

## Declaring Menu Bar Menus

Set `menuBarMenus` in `AppConfig`. The macOS `MenuBar` reads `apps[activeAppId]?.menuBarMenus` and falls back to `DEFAULT_MENU_BAR_MENUS` when no app is focused.

```ts
{
  id: 'my-app',
  menuBarMenus: [
    {
      label: 'File',
      items: [
        { key: 'new',   label: 'New',   shortcut: '⌘N', action: 'new' },
        { key: 'sep1',  label: '',      separator: true },
        { key: 'close', label: 'Close', shortcut: '⌘W', action: 'close' },
      ],
    },
    {
      label: 'Edit',
      items: [
        { key: 'cut',   label: 'Cut',   shortcut: '⌘X', action: 'cut' },
        { key: 'copy',  label: 'Copy',  shortcut: '⌘C', action: 'copy' },
        { key: 'paste', label: 'Paste', shortcut: '⌘V', action: 'paste' },
      ],
    },
  ],
}
```

`MenuBarItem` fields:

| Field | Type | Description |
|-------|------|-------------|
| `key` | `string` | Unique key within the menu |
| `label` | `string` | Display text |
| `action` | `string` | Dispatched via `app:menu:action` event |
| `shortcut` | `string` | Display-only hint (e.g. `'⌘N'`) |
| `separator` | `boolean` | Renders a horizontal rule; other fields ignored |
| `disabled` | `boolean` | Grays out and prevents click |

---

## Context Menu on App Icons

Right-clicking a dock or desktop icon opens a context menu built from `AppConfig.contextMenu`. Long-press (700 ms) on touch devices does the same.

```ts
contextMenu: [
  { key: 'new-window', label: 'New Window', action: 'newWindow' },
  { key: 'sep1', label: '', action: '', separator: true },
  { key: 'get-info',  label: 'Get Info',   action: 'getInfo' },
]
```

Built-in shell actions (handled by the OS chrome, not the app component):

| Action | Effect |
|--------|--------|
| `'openWindow'` | Opens a new window |
| `'closeAll'` | Closes all windows of this app |
| `'quit'` | Closes all windows and removes app instances |

Custom actions are forwarded to the app via `app:context:action`.

---

## App-Specific Settings Panels

Declare `appSettings: 'MyAppSettings'` in `AppConfig` to add a panel for this app under the **Applications** group in System Settings.

### Step 1 — Declare in `AppConfig`:

```ts
{ id: 'my-app', ..., appSettings: 'MyAppSettings' }
```

### Step 2 — Create the panel component:

```tsx
// src/components/apps/settings/MyAppSettings.tsx
'use client';

export function MyAppSettings() {
  return <div className="space-y-4">...settings UI...</div>;
}
```

### Step 3 — Register in `AppSettingsRegistry.tsx`:

```ts
MyAppSettings: lazy(() =>
  import('./MyAppSettings').then((m) => ({ default: m.MyAppSettings }))
),
```

System Settings automatically lists all apps with `appSettings` in the sidebar.

---

## Launch Modes

| `launchMode` | Behavior |
|---|---|
| `'single'` (default) | Clicking the dock icon focuses the existing window; clicking again minimizes it |
| `'multi'` | Each click/open creates a new independent window |

Use `'multi'` for document-based apps (Terminal, TextEdit, Finder, Browser).

---

## Mobile Behavior (`mobileFullscreen`)

When running under the iPhone OS or Android theme, apps with `mobileFullscreen: true` always open full-screen. Apps without this flag open in a floating card overlay.

Set `mobileFullscreen: true` for media apps, games, and anything that needs the full screen. Leave it `false` (default) for utility panels.

---

## Desktop Icon Grid

Icons are laid out in a column-first grid with constants from `src/components/desktop/IconGrid.tsx`:

```ts
export const CELL_W = 108;   // column width in px
export const CELL_H = 124;   // row height in px
export const PAD    = 20;    // padding from container edge
```

When a drag ends, the icon snaps to the nearest grid cell:

```
snappedX = round((rawX − PAD) / CELL_W) × CELL_W + PAD
snappedY = round((rawY − PAD) / CELL_H) × CELL_H + PAD
```

Positions are clamped to the container bounds and committed via `moveIcon` in the store.

---

## App Store Slice (`app-slice.ts`)

Tracks running app instances. The dock reflects running state (dot indicator) via `appInstances`:

```ts
interface AppInstance {
  appId: string
  windowIds: string[]    // multiple windows of the same app
  isActive: boolean      // whether any window is focused
}
```

---

## Complete Example: App with Left Sidebar

This pattern is used by Settings, Notes, Messages, and Calendar.

```tsx
// src/components/apps/MyApp.tsx
'use client';

import { useState } from 'react';
import { MobileSplitView, useMobileSplitBack } from '@/components/apps/MobileSplitView';
import { useMenuAction } from '@/hooks/useMenuAction';

const ITEMS = [
  { id: 'general', label: 'General' },
  { id: 'advanced', label: 'Advanced' },
];

export function MyApp({ appId }: { appId: string; windowId: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const activeItem = ITEMS.find((i) => i.id === selected) ?? null;

  useMenuAction(appId, (action) => {
    if (action === 'toggleSidebar') { /* ... */ }
  });

  return (
    <MobileSplitView
      list={
        <nav className="p-2 space-y-0.5">
          {ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selected === item.id
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      }
      detail={activeItem ? <DetailPanel item={activeItem} /> : null}
      onBack={() => setSelected(null)}
      sidebarWidth="w-48"
      listClassName="bg-black/3 dark:bg-white/3 overflow-y-auto"
    />
  );
}

function DetailPanel({ item }: { item: { id: string; label: string } }) {
  const goBack = useMobileSplitBack();
  return (
    <div className="p-6">
      <button
        className="mb-4 text-sm text-blue-500 md:hidden"
        onClick={goBack ?? undefined}
      >
        ← Back
      </button>
      <h2 className="text-lg font-semibold mb-2">{item.label}</h2>
      <p className="text-sm text-black/50 dark:text-white/50">Panel content here.</p>
    </div>
  );
}
```

Config for this app:

```ts
{
  id: 'my-app',
  name: 'My App',
  icon: 'lucide:LayoutDashboard',
  iconColor: ['#6366f1', '#4f46e5'],
  component: 'MyApp',
  defaultSize: { width: 760, height: 520 },
  minSize: { width: 480, height: 400 },
  category: 'productivity',
  menuBarMenus: [
    { label: 'View', items: [
      { key: 'sidebar', label: 'Toggle Sidebar', shortcut: '⌃⌘S', action: 'toggleSidebar' },
    ]},
  ],
}
```
