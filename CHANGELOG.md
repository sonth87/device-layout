# @sonth87/device-layout

## 0.5.38

### Patch Changes

- fix(macos): prevent entire UI from shifting up and Dock appearing below after reloading (F5) in fullscreen mode

  Previously, when the Dock auto-hid in fullscreen mode via `translateY(120px)`, its transformed box overflowed the unclipped chrome overlay and inflated the root container's `scrollHeight`. Because `overflow-hidden` still permits programmatic scrolling (`scrollIntoView` / `focus`), reloading with an active fullscreen window could scroll the root container down by the Dock overflow distance — pushing the fullscreen window, MenuBar, and fullscreen title bar above the viewport while exposing the hidden Dock at the bottom.

  Replaced `overflow-hidden` with `overflow-clip` across the root and viewport overlay layers (`ThemeProvider`, `Wallpaper`, `WindowManager`, `/desktop`) so off-screen chrome animations never create scrollable overflow, and fixed Dock hover-leave timer cleanup in `MacOSTheme`.

## 0.5.37

### Patch Changes

- fix: prevent crash when osTheme from localStorage is invalid or stale

  Adds `?? THEMES_CONFIG['macos']` fallback in `ThemeProvider` and
  `useTheme` so a corrupted/renamed persisted osTheme no longer causes
  `Cannot read properties of undefined (reading 'layout')` crashes.

  Also adds `if (!config) return null` guard in `WindowChromeMacOS` and
  `WindowChromeWindows` as a belt-and-suspenders defensive check.

## 0.5.36

### Patch Changes

- fix(macos): fullscreen peek-hint and title bar now correctly slide down on hover

  Previously in macOS fullscreen mode, hovering near the top edge would only
  reveal the global MenuBar but not the window's title bar (3 traffic-light
  buttons). The title bar was rendered inside the Window element which sits
  below the chrome overlay wrapper in stacking order, so it was always hidden
  behind it regardless of z-index.

  Both the peek-hint strip and the fullscreen window chrome are now rendered
  directly inside MacOSTheme at z-[50] and z-[35] respectively — above the
  chrome overlay wrapper but below the MenuBar — so they are always visible
  and animate correctly together with the MenuBar slide on hover.
