# @sonth87/device-layout

## 0.5.40

### Patch Changes

- fix(mobile): swiping on a real phone/tablet no longer opens the simulated Control Center

  The iPhone, Android and iPad chromes listened for vertical swipes to open the simulated Control Center / Quick Settings / app drawer / lock screen — on iPad even on `window`, so a swipe inside any app triggered it. On a real touch device those swipes belong to the browser and the apps, so the gestures (and the simulated Control Center) are disabled there. iPadOS Safari (which reports a Macintosh UA) is detected via `pointer: coarse` / `maxTouchPoints`.

- fix(mobile): browser status bar and toolbar areas no longer render as white bands

  New internal `useBrowserChromeColor` hook: on a real phone in the iPhone/Android theme it sets the `<html>`/`<body>` background and `<meta name="theme-color">` to the open app's header colour, or to the sampled top colour of the wallpaper on the home screen, so the browser tints its own bars to match. Previous values are restored on unmount.

## 0.5.39

### Patch Changes

- fix(mobile): home screen showed no apps when the host registers its own `apps`

  `IPhoneHomeScreen` snapshotted the app list in a `useState` initializer during the first render — before `ThemeProvider`'s `registerApps()` effect ran — so hosts using `builtInApps={false}` (or any custom `apps`) that loaded straight into the iPhone theme kept the built-in IDs, none of which existed after registration, and rendered an empty grid. The grid now reconciles with the registered apps (keeps the user's arrangement, drops removed apps, appends new ones).

- fix(mobile): no simulated phone chrome when running full-bleed on a real phone

  When the iPhone/Android theme is shown on a real phone (mobile UA or viewport ≤ 768px), the simulated status bar (clock, Dynamic Island, signal/battery), bottom dock and fake home indicator are no longer drawn — the device provides its own. Home screen and the open-app viewer use `env(safe-area-inset-*)` instead of the fixed status bar / dock spacers. On Android the app grid replaces the bottom nav as the entry point to apps.

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
