# Device Layout

**Device Layout** is a browser-based desktop OS simulator designed to replicate the look and feel of popular operating systems (macOS, Windows 11, iPadOS, iOS, Android). 

The core goal of this project is to provide a multi-window simulation environment where any added feature or module can be defined as an individual, isolated app running inside its own window. This architecture makes it highly suitable for deploying multi-functional applications (such as composite web dashboards or mock workspaces), or simply for fun! :D

![Device Layout Screenshot](docs/image.png)

Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Zustand, and Motion.

**Live preview:** [device-layout.vercel.app](https://device-layout.vercel.app) · **Source:** [github.com/sonth87/device-layout](https://github.com/sonth87/device-layout)

---

## Documentation

### Core
- [Architecture](docs/architecture.md) — folder structure, store slices, data flow
- [Agent Guidelines](docs/agent-guidelines.md) — conventions and rules for AI agents

### Building Apps
- [App System](docs/content/apps.md) — AppConfig reference, adding apps, layouts, menu bar, context menu, settings panels
- [External App Integration](docs/content/external-apps.md) — using the `render` prop to register apps from outside the repo; isolation notes
- [Window Management](docs/content/windows.md) — drag, resize, snap, fullscreen, z-index

### OS Theming
- [Theme System](docs/content/themes.md) — OS themes, config, adding new themes, CSS custom properties
- [Simple Mode](docs/simple-mode.md) — minimalist desktop layout with no Dock, widgets, or wallpaper

### Features
- [Widget System](docs/content/widgets.md) — declaring, registering, and placing desktop widgets
- [Notifications](docs/content/notifications.md) — pushing banners, badges, store actions
- [URL State](docs/content/url-state.md) — window state encoding and hydration
- [Virtual Filesystem](docs/content/vfs.md) — in-memory VFS used by Terminal and Finder
- [Liquid Glass](docs/content/liquid-glass.md) — glass effect layers and implementation
- [Internationalization](docs/content/i18n.md) — per-app locale dictionaries, language switching
- [Store & Persistence](docs/content/store.md) — Zustand slices, what is persisted, store API reference

---

## Features

**Multi-theme OS simulation**

Switch between five OS themes at runtime. Each theme changes the entire chrome — dock, taskbar, menubar, window decorations, and layout behavior.

| Theme | Chrome | Window style |
|-------|--------|--------------|
| macOS 26 | Menubar top + floating dock | Traffic lights, drag-to-snap, Liquid Glass |
| Windows 11 | Taskbar bottom | Win11 controls, snap assist (blue) |
| iPad OS 26 | Menubar top + dock | Floating windows, Liquid Glass |
| iPhone OS 26 | Bottom nav bar | Fullscreen apps |
| Android | Bottom nav bar | Fullscreen apps |

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

Apps are declared entirely in `src/config/apps.config.ts` as JSON config objects. No code changes needed to add a new app — just register it and it appears in the dock and desktop.

Each app can be: a React component, an embedded iframe, or an MDX page. Apps are code-split and loaded lazily when their window opens.

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
![Full Minimal Simple Mode](docs/simple.png)

#### Modular Simple Mode with Custom Config
![Modular Simple Mode Playground](docs/simple-with-config.png)

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

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000/desktop
npm run build
npm run lint
```

## Adding a New App

See **[docs/content/apps.md](docs/content/apps.md)** for the full guide — AppConfig reference, layout patterns (sidebar, split-view, responsive grid), menu bar declarations, context menus, and settings panels.
