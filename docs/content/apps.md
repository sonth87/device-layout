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

  contextMenu?: ContextMenuAction[]  // right-click actions on the desktop icon
}

interface ContextMenuAction {
  key: string
  label: string
  action: string               // dispatched to the app's context menu handler
  shortcut?: string            // display-only keyboard shortcut hint
  separator?: boolean          // renders a separator before this item
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
