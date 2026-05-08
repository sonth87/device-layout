# Architecture

## Overview

Device Layout is a single-page application that simulates a desktop OS in the browser. The active OS theme determines which compositor is rendered; the compositor owns the chrome (menubar, dock, taskbar) and mounts shared systems (WindowManager, SnapAssist). All window state lives in a Zustand store and is synced bidirectionally to the URL.

```
ThemeProvider
  └── MacOSTheme / WindowsTheme / IPadTheme / IPhoneTheme / AndroidTheme
        ├── MenuBar / Taskbar / NavBar        (chrome)
        ├── Desktop                           (wallpaper + icon grid)
        ├── WindowManager                     (animated window stack)
        └── SnapAssist                        (drag-snap overlay)
```

---

## Folder Structure

```
src/
  app/
    layout.tsx                Root HTML shell — providers, fonts, PWA
    page.tsx                  Redirects to /desktop
    desktop/
      page.tsx                Client entry: mounts ThemeProvider

  components/
    themes/
      ThemeProvider.tsx       Reads osTheme from store; renders the active compositor
      MacOSTheme.tsx          Menubar + Desktop + Dock (with auto-hide) + SnapAssist
      WindowsTheme.tsx        Desktop + Taskbar + SnapAssist
      IPadTheme.tsx           Menubar + Desktop + Dock
      IPhoneTheme.tsx         HomeScreen + ControlCenter + LockScreen
      AndroidTheme.tsx        HomeScreen + AppDrawer + QuickSettings

    desktop/
      Desktop.tsx             Full-viewport canvas: wallpaper + IconGrid
      IconGrid.tsx            Draggable app icon grid
      AppIcon.tsx             Single desktop icon with context menu
      Wallpaper.tsx           Renders the current wallpaper (image or gradient)
      WallpaperPicker.tsx     Fullscreen wallpaper selection overlay

    window/
      WindowManager.tsx       AnimatePresence root — renders all non-mobile windows
      Window.tsx              Single animated window frame; position/size from store
      WindowChrome.tsx        Traffic lights (macOS) or Win11 title bar controls
      WindowMenuBar.tsx       Per-app menubar rendered at the top of the window
      WindowStatusBar.tsx     Per-app status bar rendered at the bottom
      ResizeHandle.tsx        8-direction resize hit areas
      useWindowDrag.ts        Pointer-capture drag with edge resistance and snap
      useWindowResize.ts      8-direction resize with min-size clamping
      SnapAssist.tsx          Snap zone overlay shown during drag
      useWindowDrag.ts        Drag lifecycle, snap detection, fullscreen restore

    dock/
      Dock.tsx                macOS dock — glass background + overflow-visible icon row
      DockItem.tsx            Animated icon: magnification, tooltip, launch bounce
      Taskbar.tsx             Windows 11 taskbar
      NavBar.tsx              iOS/Android bottom navigation bar

    menubar/
      MenuBar.tsx             macOS menu bar shell
      MenuBarClock.tsx        Live clock (updated every second)
      ControlCenter.tsx       Popover: theme switcher, glass toggle, brightness
      SystemTray.tsx          Right-side icon cluster

    liquid-glass/
      LiquidGlass.tsx         Composites all glass sub-layers; exposes variant prop
      GlassFilter.tsx         SVG filter singleton mounted once at <body>
      GlassShimmer.tsx        WebGL2 canvas caustic shimmer
      useGlassShimmer.ts      RAF loop; degrades gracefully when WebGL unavailable

    macOS/
      Spotlight.tsx           Spotlight search overlay (Cmd+Space)
      AppSwitcher.tsx         Cmd+Tab app switcher

    notifications/
      NotificationBanner.tsx  Slide-in banner with auto-dismiss

    shared/
      AppIconImage.tsx        Renders icon: lucide gradient, SVG file, or emoji

    apps/
      AppRegistry.tsx         Lazy import map — appId string to React component
      Browser.tsx
      Calendar.tsx
      Clock.tsx
      Finder.tsx
      Messages.tsx
      Music.tsx
      Notes.tsx
      Photos.tsx
      Settings.tsx
      Terminal.tsx
      TextEditor.tsx
      IframeApp.tsx           Generic iframe wrapper
      MdxApp.tsx              Generic MDX page renderer

  config/
    apps.config.ts            AppConfig[] — the single source of truth for all apps
    themes.config.ts          Layout metrics per theme (insets, heights, flags)
    wallpapers.config.ts      Wallpaper definitions keyed by osTheme

  store/
    index.ts                  Single Zustand store with immer and persist middleware
    window-slice.ts           Window CRUD, z-index stack, maximize/restore/minimize
    app-slice.ts              Running app instances, active app tracking
    theme-slice.ts            osTheme, colorScheme, glassEnabled
    desktop-slice.ts          Wallpaper selection, icon positions, dock order
    notification-slice.ts     Notification queue (add, dismiss, clear)
    vfs-slice.ts              Virtual file system tree (for Terminal/Finder)
    types.ts                  Shared store-internal types

  hooks/
    useWindowUrlSync.ts       Bidirectional sync: Zustand windows <-> URL ?w= params
    useTheme.ts               Reads ThemeConfig; derives isGlass, isMobile, isFloating
    useLocalStorage.ts        SSR-safe localStorage hook
    useResizeObserver.ts      ResizeObserver wrapper + useViewportSize
    usePointerDrag.ts         Generic pointer-capture drag primitive
    useSwipeGesture.ts        Touch swipe detection (iOS/Android nav)
    useKeyboardShortcuts.ts   Global keyboard binding registry

  lib/
    url-codec.ts              Encode/decode WindowState <-> URL param string
    snap-events.ts            Pub/sub event bus for drag-snap communication
    theme-layout.ts           Injects ThemeConfig values as CSS custom properties
    window-math.ts            Snap zone geometry, half/quarter rect calculations
    utils.ts                  cn() = clsx + twMerge

  types/
    app.ts                    AppConfig, AppInstance, ContextMenuAction
    window.ts                 WindowState, WindowRect, WindowOpenOptions
    theme.ts                  OsTheme, ThemeConfig, ColorScheme
    desktop.ts                WallpaperConfig, IconPosition
    notification.ts           NotificationItem
```

---

## State Management

All runtime state lives in a single Zustand store (`src/store/index.ts`). The store is composed from slices using immer for immutable updates.

### Key slices

**window-slice** — most complex slice

```ts
interface WindowState {
  id: string
  appId: string
  title: string
  rect: WindowRect          // { x, y, width, height }
  prevRect: WindowRect | null  // saved before maximize; used to restore
  zIndex: number
  isMinimized: boolean
  isMaximized: boolean
  isFocused: boolean
}
```

Actions: `openWindow`, `closeWindow`, `moveWindow`, `resizeWindow`, `focusWindow`, `minimizeWindow`, `toggleMaximize`, `maximizeWindow`, `restoreWindow`.

`maximizeWindow` stores the current `rect` into `prevRect` before applying the maximized rect. `restoreWindow` reads `prevRect` to snap back. Drag-from-fullscreen restore also uses `prevRect` to calculate proportional grab offset.

**theme-slice**

```ts
{ osTheme: OsTheme, colorScheme: 'light' | 'dark' | 'system', glassEnabled: boolean }
```

**desktop-slice** — wallpaper, icon grid positions, dock app order

**notification-slice** — queue of `NotificationItem`; banners auto-dismiss after a timeout

---

## Data Flow

```
User drags window title bar
  -> useWindowDrag (pointer capture)
  -> emits snap zone via snap-events.ts
  -> SnapAssist receives, renders overlay
  -> on pointer up: moveWindow / maximizeWindow dispatched to store
  -> Window.tsx re-renders with new rect (motion spring)
  -> useWindowUrlSync detects store change, updates URL ?w= params
```

```
Page load with ?w= params
  -> useWindowUrlSync reads URL
  -> decodes via url-codec.ts
  -> calls openWindow({ isMaximized, prevRect }) for each param
  -> WindowManager renders all windows at saved positions
```

---

## Theme Compositor Pattern

Each OS theme is a standalone compositor component. `ThemeProvider` renders only the active one. Compositors own:

- Chrome layout (menubar height, dock position, taskbar)
- Their own z-index stacking order
- Mounting of `SnapAssist` with correct `topInset` and `bottomInset`
- Auto-hide logic (macOS dock watches `hasMaximized` from store)

Adding a new OS theme: implement a compositor in `src/components/themes/`, add its config in `themes.config.ts`, and register it in `ThemeProvider.tsx`.

---

## Snap Event Bus

`src/lib/snap-events.ts` is a lightweight pub/sub used to decouple `useWindowDrag` from `SnapAssist`. They never share a React context.

```ts
// emitter (useWindowDrag)
emitSnapZone(zone, isDragging, topInset, bottomInset)

// listener (SnapAssist)
onSnapZone((payload) => { ... })
offSnapZone(handler)
```

`getSnapZone(px, py, topInset)` — returns the zone enum for a cursor position  
`getSnapRect(zone, topInset, bottomInset)` — returns the pixel rect for a given zone
