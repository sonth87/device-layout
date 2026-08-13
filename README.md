# Device Layout

**Device Layout** is a browser-based desktop OS simulator designed to replicate the look and feel of popular operating systems (macOS, Windows 11, iPadOS, iOS, Android).

The core goal of this project is to provide a multi-window simulation environment where any added feature or module can be defined as an individual, isolated app running inside its own window. This architecture makes it highly suitable for deploying multi-functional applications (such as composite web dashboards or mock workspaces), or simply for fun! :D

![Device Layout Screenshot](https://raw.githubusercontent.com/sonth87/device-layout/main/docs/image.png)

Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Zustand, and Motion.

**Live preview:** [device-layout.vercel.app](https://device-layout.vercel.app) · **Source:** [github.com/sonth87/device-layout](https://github.com/sonth87/device-layout)

---

## Use Cases (What is Device Layout used for?)

- **Multi-Window Web Dashboards**: Combine multiple analytics, monitoring, or workspace tools into a flexible, windowed desktop environment in the browser.
- **Embedded Kiosk & Web Shells**: Use **Simple Mode** to build customized, minimalist web apps with or without Dock, Wallpapers, or Widgets.
- **Interactive Demos & Workspaces**: Show users interactive product walkthroughs inside a familiar OS desktop layout (macOS, Windows 11, iPadOS, iOS, Android).
- **Electron Shells & Desktop Apps**: Build multi-functional desktop applications where each feature runs as an isolated app inside a windowed container.

---

## Installation

Install the package in your host application:

```bash
npm install @sonth87/device-layout
# or
pnpm add @sonth87/device-layout
# or
yarn add @sonth87/device-layout
```

---

## Integration Quickstart

Mount the `<DeviceLayout />` component in your React / Next.js application and import its stylesheet:

```tsx
import { DeviceLayout } from "@sonth87/device-layout";
import "@sonth87/device-layout/style.css";
import { myCustomApps } from "./apps";

export default function DesktopPage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <DeviceLayout colorScheme="dark" apps={myCustomApps} />
    </div>
  );
}
```

---

## DeviceLayout Props Reference

The `<DeviceLayout />` component accepts the following configuration props:

| Prop                          | Type                                                      | Default      | Description                                                                                                   |
| ----------------------------- | --------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| `apps`                        | `AppConfig[]`                                             | `[]`         | List of host applications to register and render on desktop/dock                                              |
| `osTheme`                     | `'macos' \| 'windows' \| 'ipad' \| 'iphone' \| 'android'` | `'macos'`    | Active OS theme compositor                                                                                    |
| `colorScheme`                 | `'dark' \| 'light' \| 'auto'`                             | `'auto'`     | Color scheme mode (`auto` matches system preference)                                                          |
| `isSimpleMode`                | `boolean \| SimpleModeFeatures`                           | `false`      | Full minimal mode (`true`) or granular feature flags object (see [simple-mode.md](docs/simple-mode.md))       |
| `defaultApps`                 | `boolean \| string[]`                                     | `true`       | System apps to register (`false` = 0 apps, `true` = all apps, `string[]` = e.g. `['settings', 'calculator']`) |
| `builtInApps`                 | `boolean`                                                 | `true`       | Alias for `defaultApps` (`false` to disable built-in system apps)                                             |
| `fallbackMenuBarAppId`        | `string \| null`                                          | `null`       | App ID (e.g. `'finder'`) whose top menu renders when no window is focused                                     |
| `menuBarExtras`               | `MenuBarExtraItem[]`                                      | `[]`         | Custom menu bar extras / system tray icons rendered next to the clock                                         |
| `resolveEditContextMenuItems` | `ResolveEditContextMenuItems`                             | `undefined`  | Custom resolver for right-click text edit menu entries (Cut, Copy, Paste...)                                  |
| `macOSAppleIcon`              | `ReactNode`                                               | `undefined`  | Custom icon to replace the Apple logo on top-left menu bar                                                    |
| `windowsStartIcon`            | `ReactNode`                                               | `undefined`  | Custom icon to replace the Windows logo on taskbar start button                                               |
| `onImportWallpaper`           | `ImportWallpaperFn`                                       | `undefined`  | File picker callback for "Add a Photo" in wallpaper picker                                                    |
| `wallpapers`                  | `WallpaperConfig[]`                                       | Built-in set | Overrides or extends static image wallpaper catalog                                                           |
| `liveWallpapers`              | `WallpaperConfig[]`                                       | Built-in set | Overrides or extends custom live video/animated wallpapers                                                    |
| `allowLiveWallpapers`         | `boolean`                                                 | `true`       | Show or hide the Live Wallpapers section in wallpaper picker                                                  |
| `updateActions`               | `UpdateActions`                                           | `undefined`  | Implements OTA/native update status checking and installer callbacks                                          |
| `assetBaseUrl`                | `string`                                                  | `''`         | Base URL prefix for static assets                                                                             |

---

## Declaring an App (`AppConfig`)

An app is declared as a plain `AppConfig` object. Host applications register custom React components directly using the `render` prop:

```tsx
import type { AppConfig } from "@sonth87/device-layout";
import { useMenuAction } from "@sonth87/device-layout";

// 1. Define your React App Component
function AnalyticsApp({
  appId,
  windowId,
}: {
  appId: string;
  windowId: string;
}) {
  // Subscribe to top menu bar actions (e.g. File -> Export)
  useMenuAction(appId, (action) => {
    if (action === "exportPDF") {
      alert(`Exporting PDF report for window: ${windowId}`);
    }
  });

  return (
    <div className="flex h-full flex-col p-6 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white select-none">
      <h1 className="text-xl font-bold">Analytics Dashboard</h1>
      <p className="text-sm opacity-70 mt-1">
        App ID: {appId} | Window ID: {windowId}
      </p>
    </div>
  );
}

// 2. Declare AppConfig
export const analyticsAppConfig: AppConfig = {
  id: "analytics",
  name: "Analytics Dashboard",
  icon: "lucide:BarChart3",
  iconColor: ["#3b82f6", "#1d4ed8"],

  // Pass your React component directly via render
  render: AnalyticsApp,

  // Dimensions & Constraints
  defaultSize: { width: 900, height: 600 },
  minSize: { width: 480, height: 360 },
  launchMode: "single", // 'single' | 'multi'
  hasMenuBar: true,
  hasStatusBar: true,

  // Top Menu Bar Declarations
  menuBarMenus: [
    {
      label: "File",
      items: [
        {
          key: "export",
          label: "Export PDF",
          shortcut: "⌘E",
          action: "exportPDF",
        },
        { key: "sep1", label: "", separator: true },
        {
          key: "close",
          label: "Close Window",
          shortcut: "⌘W",
          action: "close",
        },
      ],
    },
  ],
};
```

### AppConfig Fields Reference

The `AppConfig` interface supports the following configuration properties:

| Field | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | **Required** | Unique identifier for the application |
| `name` | `string` | **Required** | Display name shown in Dock, Desktop, Launcher, and MenuBar |
| `icon` | `string \| ComponentType` | **Required** | App icon (`'lucide:IconName'`, image URL, SVG path, or React component) |
| `render` | `ComponentType<AppContentProps>` | `undefined` | React component for external apps (receives `{ appId, windowId }`) |
| `component` | `string` | `undefined` | Registry key for built-in library apps |
| `defaultSize` | `{ width: number; height: number }` | `{ width: 800, height: 500 }` | Initial window size in pixels |
| `minSize` | `{ width: number; height: number }` | `{ width: 320, height: 200 }` | Minimum window size constraints |
| `defaultPosition` | `{ x: number; y: number }` | Centered | Initial top-left window coordinates |
| `launchMode` | `'single' \| 'multi'` | `'single'` | `'single'` opens 1 window; `'multi'` opens a new window per launch |
| `titleBarMode` | `'normal' \| 'transparent'` | `'normal'` | Window titlebar styling mode |
| `hasMenuBar` | `boolean` | `true` | Show top menu bar (macOS) or in-window menu bar (Windows/iPad) |
| `hasStatusBar` | `boolean` | `false` | Show bottom status bar in window chrome |
| `menuBarMenus` | `MenuBarMenu[]` | `[]` | Top menu bar dropdown declarations (`File`, `Edit`, `View`...) |
| `appNameMenuExtraItems` | `MenuBarItem[]` | `[]` | Extra items inserted into bold App Name dropdown menu |
| `contextMenu` | `ContextMenuAction[]` | `[]` | Custom right-click actions on Dock/Desktop icon |
| `iconColor` | `[string, string]` | `undefined` | Background gradient pair `[from, to]` for icon tile |
| `iconTextColor` | `string` | `'#ffffff'` | Icon color inside icon tile |
| `badge` | `string \| number` | `undefined` | Notification badge indicator on Dock icon |
| `disabled` | `boolean` | `false` | Disable app launcher |
| `category` | `string` | `'utilities'` | Logical app category grouping |
| `mobileFullscreen` | `boolean` | `true` | Force fullscreen mode on mobile OS themes (iOS / Android) |
| `iframeUrl` | `string` | `undefined` | URL to load inside built-in iframe container |
| `mdxSlug` | `string` | `undefined` | Slug mapping to `/content/*.mdx` for built-in MDX pages |
| `appSettings` | `string` | `undefined` | Key in AppSettingsRegistry to render panel in System Settings |
| `widgets` | `WidgetDefinition[]` | `[]` | Desktop widgets provided by this app |
| `locale` | `AppLocale` | `undefined` | Per-app multi-language translation dictionaries |

---

## Documentation

### Core & Architecture

- [Architecture](docs/architecture.md) — Folder structure, Zustand store slices, data flow, theme compositors
- [Integration Guide](docs/integration.md) — Comprehensive guide for embedding the library, props, custom menus, edit context menu
- [Agent Guidelines](docs/agent-guidelines.md) — Conventions, Zustand useShallow rules, Tailwind v4 guidelines
- [Versioning & Releases](docs/versioning.md) — SemVer rules (`PATCH`, `MINOR`, `MAJOR`) and library bundle release workflow

### Building & Registering Apps

- [App System](docs/content/apps.md) — AppConfig reference, adding apps, layouts, menu bar declarations, context menus, settings panels
- [External App Integration](docs/content/external-apps.md) — Registering custom apps using the `render` prop, host isolation, and bridging
- [Window Management](docs/content/windows.md) — Window types (Standard, FloatingWindow, Mobile), chrome styling, edge snapping, drag/resize mechanics

### OS Themes & Simple Mode

- [Theme System](docs/content/themes.md) — OS themes (macOS, Windows 11, iPadOS, iOS, Android), metrics, adding new themes
- [Simple Mode](docs/simple-mode.md) — Minimalist desktop layout & `SimpleModeFeatures` API reference for kiosk and embedded environments

### System Features

- [Widget System](docs/content/widgets.md) — Declaring, registering, and placing desktop widgets
- [Notifications](docs/content/notifications.md) — Banners, badges, and notification store actions
- [URL State](docs/content/url-state.md) — Bidirectional window state encoding and URL hydration
- [Virtual Filesystem (VFS)](docs/content/vfs.md) — In-memory file system used by Terminal and Finder
- [Liquid Glass](docs/content/liquid-glass.md) — Composited backdrop-filter and glass effect layers
- [Internationalization (i18n)](docs/content/i18n.md) — Per-app locale dictionaries and language switching
- [Store & Persistence](docs/content/store.md) — Zustand slices, persisted state keys, and store API reference

---

## Features

**Multi-theme OS simulation**

Switch between five OS themes at runtime. Each theme changes the entire chrome — dock, taskbar, menubar, window decorations, and layout behavior.

| Theme        | Chrome                      | Window style                               |
| ------------ | --------------------------- | ------------------------------------------ |
| macOS 26     | Menubar top + floating dock | Traffic lights, drag-to-snap, Liquid Glass |
| Windows 11   | Taskbar bottom              | Win11 controls, snap assist (blue)         |
| iPad OS 26   | Menubar top + dock          | Floating windows, Liquid Glass             |
| iPhone OS 26 | Bottom nav bar              | Fullscreen apps                            |
| Android      | Bottom nav bar              | Fullscreen apps                            |

**Window management**

- Drag windows by title bar. Edge-resistance prevents accidentally throwing windows off screen.
- Resize from all 8 edges and corners.
- Snap to top = fullscreen (macOS: below menubar to bottom edge; Windows: respects taskbar).
- Snap to left/right = half-screen, corners = quarter-screen. Overlay preview shown while dragging.
- Fullscreen auto-hides the dock on macOS. Move mouse to the bottom edge to reveal it.
- Minimize, restore, maximize/unmaximize with spring animation.
- Drag a maximized window to unmaximize and grab it proportionally under the cursor.

**URL state**

Every open window — its position, size, maximized state, and the previous position before maximize — is encoded in the URL as `?w=` params. Reload the page and all windows reopen in the same state.

Wire format: `appId:x,y,width,height[:flags[:prevX,prevY,prevW,prevH]]`

**App system**

Apps are declared entirely in `src/config/apps.config.ts` or passed via props as `AppConfig[]`.
Each app can be: a React component (`render` prop or registry key), an embedded iframe, or an MDX page. Apps are code-split and loaded lazily when their window opens.

**Liquid Glass**

Dock, menubar, tooltips, and panel overlays use a composited glass effect built from CSS backdrop-filter, SVG displacement, WebGL2 shimmer, and a specular gradient highlight. Toggleable per-session in System Settings.

**Additional**

- Ambient light / dark / system color scheme
- Dock icon magnification on hover (macOS)
- Wallpaper picker via desktop right-click context menu
- Notification banners
- PWA-ready with offline support via service worker
- URL-encoded window state — reload and all windows reopen at the same position
- **Modular Simple Mode** — a highly customizable layout-only configuration with fine-grained feature flags (`wallpaper`, `contextMenu`, `wallpaperPicker`, `menuBar`, `widgets`, `dock`, `defaultApps`, `allowedOSThemes`). Supports full minimal mode (`isSimpleMode={true}`) or custom modular presets. See **[docs/simple-mode.md](docs/simple-mode.md)** for full reference.

<details>
<summary><strong>View Simple Mode Screenshots</strong></summary>

#### Full Minimal Simple Mode (`isSimpleMode={true}`)

![Full Minimal Simple Mode](https://raw.githubusercontent.com/sonth87/device-layout/main/docs/simple.png)

#### Modular Simple Mode with Custom Config

![Modular Simple Mode Playground](https://raw.githubusercontent.com/sonth87/device-layout/main/docs/simple-with-config.png)

</details>

---

## Stack

```
next@16              react@19             typescript@5
tailwindcss@4        tailwind-merge       clsx
motion               zustand@5 + immer    @tanstack/react-query@5
@radix-ui/*          lucide-react         nanoid
```

---

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000/desktop
pnpm build
pnpm build:lib  # compile library bundle into dist-lib/
```

## Adding a New App

See **[docs/content/apps.md](docs/content/apps.md)** for the full guide — AppConfig reference, layout patterns (sidebar, split-view, responsive grid), menu bar declarations, context menus, and settings panels.
