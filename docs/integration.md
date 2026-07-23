# Integration Guide

How to consume `@sonth87/device-layout` as a library inside a host application — a desktop-shell package that renders windows, dock, menu bar, and OS-theme chrome, while the host owns its own apps, routing, and platform (web/Electron/etc).

This document is for teams embedding the library, not for contributors working inside this repo (see [architecture.md](./architecture.md) and [content/apps.md](./content/apps.md) for that).

---

## What the library gives you, what the host provides

```
┌─────────────────────────────────────────────┐
│ Host application                             │
│  - owns app components, business logic       │
│  - owns platform detection (web / Electron)   │
│  - owns entitlement/licensing decisions       │
│                                                │
│   converts its own app registry into          │
│   AppConfig[] ──────────────┐                 │
└──────────────────────────────┼────────────────┘
                                ▼
┌─────────────────────────────────────────────┐
│ @sonth87/device-layout                        │
│  - renders desktop/dock/menu bar/taskbar/     │
│    windows for the current OS theme            │
│  - owns window position/size/z-order state     │
│  - dispatches menu/context-menu actions as     │
│    CustomEvents for the host's apps to handle  │
└─────────────────────────────────────────────┘
```

The library never imports anything from the host. All communication is one-directional (host → `AppConfig[]` in, `CustomEvent`s out) — this keeps the library usable by hosts it has never heard of.

---

## Install

```bash
npm install @sonth87/device-layout
```

Or, if consuming a locally-built tarball instead of a published registry version (common while co-developing the library alongside a host monorepo):

```bash
npm run build:lib      # produces dist-lib/ (Vite library build)
npm pack                # produces sonth87-device-layout-<version>.tgz
```

Point the host's `package.json` dependency at the tarball path and reinstall. Rebuild + repack + reinstall any time library source changes — there is no watch-mode link across package boundaries by default.

## Import

```ts
import { DeviceLayout, useStore } from '@sonth87/device-layout';
import '@sonth87/device-layout/style.css';
```

`DeviceLayout` is the root component — mount it once, pass it the host's `AppConfig[]` via the `apps` prop. Everything else (theme switching, dock, wallpapers, window management) is self-contained; the host does not manage any of it directly. Hosts commonly wrap it in their own thin bootstrap component (to inject platform-specific bits like a native wallpaper-import handler or an update-checker) rather than rendering it bare — the wrapper is host code, not a library requirement.

`style.css` must be imported once at the host's app entry point — the library ships compiled Tailwind output, not source, so the host does not need Tailwind configured to consume it (but the host's own app UI is free to use whatever styling approach it wants inside the content area it's given).

---

## The `AppConfig` boundary

The library's only real API surface is `AppConfig[]` in and a small set of `CustomEvent`s out. Everything else (icons, wallpapers, window chrome, dock, spotlight, settings) is provided by the library itself and configured through props on the root component.

```ts
interface AppConfig {
  id: string;
  name: string;
  icon: string;                 // 'lucide:IconName' | '/path.svg' | emoji
  component?: string;           // key into an internal registry (library apps only)
  render?: ComponentType<{ appId: string; windowId: string }>;  // host apps use this instead
  defaultSize?: { width: number; height: number };
  minSize?: { width: number; height: number };
  hasMenuBar?: boolean;
  hasStatusBar?: boolean;
  mobileFullscreen?: boolean;
  menuBarMenus?: MenuBarMenu[];
  contextMenu?: ContextMenuAction[];
  disabled?: boolean;
  category?: string;
  // ...see src/types/app.ts for the full field list
}
```

A host app is any `AppConfig` with `render` set instead of `component` — `render` takes priority, and lets the host register a component from its own codebase without touching the library's internal `AppRegistry`. This is the intended integration point; do not fork the library to add host apps into its internal registry.

**Typical bridging pattern**: hosts rarely hand-write `AppConfig` objects directly. Most define their own app-module contract upstream (with fields the library doesn't know about — required permissions, platform capabilities, licensing gates, etc.) and write one small adapter function that maps `HostAppModule → AppConfig`, injecting `render` as a wrapper component that adapts the library's `{ appId, windowId }` props into whatever richer props the host's app components expect. Keep that adapter as the single seam — host business logic should never leak into the library, and library internals should never leak into host app components.

---

## Menu system across platform-modes

The library supports five OS themes (`osTheme: 'macos' | 'windows' | 'ipad' | 'iphone' | 'android'`), each with different chrome. A host app that declares `menuBarMenus` gets a working menu automatically rendered in whichever shape fits the active theme — **no per-platform code required in the host**:

| `osTheme` | Where the menu renders | Scoped to |
|---|---|---|
| `macos` | Global top menu bar | Whichever app is currently active (focus-following, like real macOS) |
| `windows`, `ipad` | A strip directly under each window's title bar | That window specifically — independent of focus, like real Windows (multiple windows of different apps each keep their own menu bar visible) |
| `iphone`, `android` | A hamburger button in the mobile app viewer's header, opening a bottom sheet | The one app running full-screen at a time |

All three renderers consume the exact same `menuBarMenus: MenuBarMenu[]` data — there's no separate mobile-only or Windows-only field. Nested `children` (submenus) work in all three: desktop/per-window renders them as a flyout panel; mobile renders them as an inline accordion (tapping the parent row expands its children in place, since flyouts don't suit touch).

```ts
{
  id: 'my-app',
  menuBarMenus: [
    { label: 'File', items: [
      { key: 'new', label: 'New', shortcut: '⌘N', action: 'new' },
      { key: 'open-recent', label: 'Open Recent', children: [
        { key: 'r1', label: 'report.docx', action: 'openRecent:report.docx' },
        { key: 'r2', label: 'notes.txt', action: 'openRecent:notes.txt' },
      ]},
      { key: 'sep', label: '', separator: true },
      { key: 'close', label: 'Close', shortcut: '⌘W', action: 'close' },
    ]},
  ],
}
```

Clicking any leaf item dispatches a `window` `CustomEvent`:

```ts
window.dispatchEvent(new CustomEvent('app:menu:action', {
  detail: { appId, action, windowId /* only set by the per-window Windows/iPad renderer */ },
}));
```

Host apps subscribe with the `useMenuAction` hook:

```ts
import { useMenuAction } from '@sonth87/device-layout';

useMenuAction(appId, (action) => {
  if (action === 'new') { /* ... */ }
});
```

`windowId` is optional on both the event and the hook's third parameter. Pass it only if the host app can have multiple windows open simultaneously and a handler needs to react only to its own window's menu clicks — omit it (the default) to receive every `action` for `appId` regardless of which window's menu bar dispatched it, which is correct and sufficient for single-window apps and for macOS's global menu bar (which never sets `windowId`).

Do not build platform branching (`if (osTheme === 'windows') ...`) in host app code to render menus differently per platform — that defeats the purpose of this system. Declare `menuBarMenus` once; the library picks the right presentation.

---

## Action events reference

| Event | Dispatched by | `detail` shape | Subscribe with |
|---|---|---|---|
| `app:menu:action` | Menu bar (any platform-mode renderer) | `{ appId, action, windowId? }` | `useMenuAction(appId, handler, windowId?)` |
| `app:context:action` | Dock/desktop icon context menu (right-click / long-press) | `{ appId, action }` | `useContextAction(appId, handler)` |

Both are plain `window`-level `CustomEvent`s — a host can also listen directly with `window.addEventListener` if it needs access outside a React component (e.g. from a non-React platform adapter layer), as long as it filters on `detail.appId` itself.

---

## Edit context menu (right-click Copy/Paste)

The library wraps its entire root tree in a self-drawn right-click menu (`EditContextMenu`) for text editing — Cut, Copy, Paste, Undo, Redo, Select All, and Save Image (for `<img>` targets). This exists because the root container also needs to `preventDefault()` the browser's *native* context menu everywhere else (desktop background, icons, window chrome) to keep the desktop-OS illusion — a bare `preventDefault()` on the whole tree would otherwise swallow every right-click, including inside a host app's own inputs, with no way for the host to get Copy/Paste back. See `src/components/desktop/EditContextMenu.tsx` for the implementation.

It activates automatically — no host wiring required — whenever the right-click target is an `<input>`, `<textarea>`, `contentEditable` element, an `<img>`, or has an active text selection. Anywhere else, the native browser/Electron context menu stays suppressed, same as before this existed.

**A host is never locked into the library's default item list.** Pass `resolveEditContextMenuItems` to `<DeviceLayout>` to inspect or fully replace what renders, on a per-target basis:

```ts
import type { ResolveEditContextMenuItems } from '@sonth87/device-layout';

const resolveEditContextMenuItems: ResolveEditContextMenuItems = (defaultItems, info) => {
  // info: { target: HTMLElement; isEditable: boolean; isImage: boolean; hasSelection: boolean }

  // Leave every other app's menu untouched — only customize inside one app.
  if (!info.target.closest('[data-app-id="my-app"]')) return defaultItems;

  return [
    ...defaultItems.filter((item) => item.key !== 'undo' && item.key !== 'redo'), // drop items
    { key: 'my-action', label: 'Preview Image…', onSelect: () => openPreview(info.target) }, // add one
  ];
};

<DeviceLayout apps={apps} resolveEditContextMenuItems={resolveEditContextMenuItems} />
```

Return values:
- `null` / `undefined` — use `defaultItems` as-is (equivalent to not customizing at all for this target).
- Any `EditMenuEntry[]` — replaces the menu entirely; freely keep, drop, reorder, or add entries by `key`. Separators are entries with `separator: true`.
- `[]` — suppresses the menu for this specific right-click (same effect as clicking a non-editable area).

`resolveEditContextMenuItems` runs once per right-click, synchronously, before the menu opens — it is not a React component and cannot use hooks; read whatever it needs from `info.target` or module-level state.

---

## State ownership and persistence

The library owns one Zustand store (window positions/sizes/z-order, dock contents, running app instances, OS theme, wallpaper, and related UI state), persisted to `localStorage` under a single key. The host does not need to — and should not — duplicate or mirror this state; treat the store as internal to the library and interact with it only through the documented hooks/props, not by reading its shape directly, since the shape is not a stable public contract.

Anything the host's apps need to persist themselves (documents, user data, app-specific settings) is the host's responsibility, stored however the host's own platform layer handles persistence — the library's store is exclusively about desktop-shell chrome state, not app data.

---

## Versioning expectations

Treat `AppConfig`, `MenuBarMenu`/`MenuBarItem`, `ContextMenuAction`, `EditMenuEntry`/`ResolveEditContextMenuItems`, the two `CustomEvent` contracts, and the exported hooks as the stable public surface. Everything under `src/components/**` not re-exported from the package root, and the internal Zustand store shape, are implementation details that can change between minor versions without notice.

When bumping the library version in a host that vendors it via a local tarball, rebuild (`npm run build:lib && npm pack`) and re-run the host's typecheck — a structural-typing mismatch on `AppConfig`-adjacent fields is the most common breakage and surfaces immediately as a compile error, not a runtime one.
