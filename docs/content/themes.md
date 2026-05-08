# Theme System

## Overview

Each OS theme is a self-contained compositor component that owns the chrome layout, window decorations, and mounting of shared systems. `ThemeProvider` reads `osTheme` from the Zustand store and renders only the active compositor.

---

## Theme Configurations

Theme layout metrics are defined in `src/config/themes.config.ts`. Every theme exports a `ThemeConfig` object:

```ts
interface ThemeConfig {
  os: OsTheme
  label: string
  isGlass: boolean        // enables Liquid Glass effects
  isMobile: boolean       // fullscreen-only apps
  isFloating: boolean     // windows can be dragged/resized

  layout: {
    chrome: {
      menuBarHeight: number      // px reserved at top for menubar (0 if none)
      taskbarHeight: number      // px reserved at bottom for taskbar (0 if none)
      dockHeight: number         // px dock occupies when visible
      dockOffsetBottom: number   // px gap between dock bottom and viewport edge
    }
    window: {
      maximizeInsets: {
        top: number              // maximized window starts at this Y (= menuBarHeight)
        bottom: number           // maximized window stops this far from bottom (= taskbarHeight)
      }
      dragTopInset: number       // window title bar cannot be dragged above this Y
      minTitleVisibleHeight: number  // px of title bar that must remain on-screen
    }
  }
}
```

### Values per theme

| Theme | menuBarHeight | taskbarHeight | dragTopInset | isGlass | isMobile |
|-------|---------|---------|---------|---------|---------|
| macOS | 28 | 0 | 28 | true | false |
| Windows 11 | 0 | 48 | 0 | false | false |
| iPad OS | 28 | 0 | 28 | true | false |
| iPhone OS | 0 | 0 | 0 | true | true |
| Android | 0 | 0 | 0 | false | true |

---

## Compositor Components

Each compositor in `src/components/themes/` is responsible for:

1. Rendering the chrome (menubar/taskbar/dock/navbar)
2. Rendering `<Desktop />` (wallpaper + icon grid)
3. Mounting `<WindowManager />` (window stack)
4. Mounting `<SnapAssist />` with correct insets
5. Any theme-specific behaviors (macOS dock auto-hide, iOS safe areas, etc.)

### macOS (`MacOSTheme.tsx`)

- Renders `<MenuBar />` pinned to top
- Renders `<Desktop />` below it
- Renders `<Dock />` wrapped in a `motion.div` for auto-hide animation
- Auto-hide: dock translates `dockHeight + dockOffsetBottom` px downward when any window is maximized; revealed when cursor is within 20px of viewport bottom or hovering the dock
- `<SnapAssist topInset={28} bottomInset={0} />`

### Windows 11 (`WindowsTheme.tsx`)

- Renders `<Taskbar />` pinned to bottom
- `<SnapAssist topInset={0} bottomInset={48} />`
- No dock auto-hide

### iPad OS (`IPadTheme.tsx`)

- Same chrome structure as macOS
- Glass enabled

### iPhone OS / Android (`IPhoneTheme.tsx`, `AndroidTheme.tsx`)

- Fullscreen app compositors
- `<NavBar />` at bottom
- No `WindowManager` — apps launch fullscreen, not in windows
- `isMobile: true` in config (disables drag/resize)

---

## Adding a New Theme

1. Add an entry to `OsTheme` union in `src/types/theme.ts`
2. Add a `ThemeConfig` for it in `src/config/themes.config.ts`
3. Create `src/components/themes/MyTheme.tsx` — implement the compositor
4. Register in `ThemeProvider.tsx`:
   ```tsx
   if (osTheme === 'mytheme') return <MyTheme />;
   ```
5. Add a wallpaper set in `src/config/wallpapers.config.ts`

---

## CSS Custom Properties

`src/lib/theme-layout.ts` injects `ThemeConfig` layout values as CSS custom properties on `:root` whenever the active theme changes. This allows CSS / Tailwind arbitrary values to reference them:

```css
/* Injected automatically */
--chrome-menu-bar-height: 28px;
--chrome-taskbar-height: 0px;
--chrome-dock-height: 72px;
```

---

## Color Scheme

`colorScheme` in the theme slice is `'light' | 'dark' | 'system'`. `ThemeProvider` applies a `dark` class to `<html>` when the resolved scheme is dark. All color tokens should use Tailwind's `dark:` variant or CSS `prefers-color-scheme`.

---

## Wallpapers

Wallpapers are defined in `src/config/wallpapers.config.ts` and keyed by `OsTheme`. Each entry has a `url`, optional `thumbnail`, and `label`. The active wallpaper ID is persisted in the desktop slice and restored across sessions.
