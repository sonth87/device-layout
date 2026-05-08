# Desktop Layout — Web OS Boilerplate



## Context

Build a boilerplate/framework for a browser-based desktop OS simulator. The goal is an extensible, theme-switchable "OS in the browser" that others can fork and populate with their own content. Inspired by PostHog's website demo. The project lives at `/Users/skyline/TEST/desktop-layout` (currently empty).

**User choices:**
- Framework: **Next.js 15** (App Router, Turbopack)
- Glass FX: **WebGL GLSL Shader** (full refraction, shimmer)
- App types: Custom React components + Iframe wrapper + MDX pages + Demo apps
- Purpose: **Boilerplate / Framework**

---

## Stack

```
next@15          react@19          typescript@5
tailwindcss@4    clsx + tailwind-merge
motion           zustand@5 + immer  @tanstack/react-query@5
nuqs@2           zod@3              next-pwa
@radix-ui/*      lucide-react
```

---

## Folder Structure

```
src/
  app/
    layout.tsx              # Root: providers, font, SW registration, NuqsAdapter
    page.tsx                # Redirects → /desktop
    desktop/page.tsx        # Client island: ThemeProvider + Desktop
    globals.css             # @import tailwindcss; @custom-variant per theme; CSS tokens
  components/
    desktop/
      Desktop.tsx           # Full-screen canvas (wallpaper, icon grid, context menu)
      Wallpaper.tsx         # <img> background with right-click context menu
      IconGrid.tsx          # CSS grid of draggable app icons
      AppIcon.tsx           # Single icon: drag, dblclick→open, right-click menu
      WallpaperPicker.tsx   # Dialog for wallpaper selection
    window/
      WindowManager.tsx     # AnimatePresence wrapper, renders all open windows
      Window.tsx            # Frame: drag, resize, chrome, Motion layout
      WindowChrome.tsx      # Traffic lights (macOS) or Win11 controls (theme-aware)
      WindowMenuBar.tsx     # Optional top per-window menu bar
      WindowStatusBar.tsx   # Optional bottom per-window status bar
      ResizeHandle.tsx      # 8 edge/corner zones, cursor changes on hover
      useWindowDrag.ts      # Pointer-capture drag + snap-to-edge resistance
      useWindowResize.ts    # 8-direction resize, min-size clamp
    dock/
      Dock.tsx              # macOS dock (LiquidGlass-wrapped, magnification)
      Taskbar.tsx           # Windows 11 centered taskbar
      NavBar.tsx            # iOS/Android bottom tab bar
      DockItem.tsx          # Icon with bounce, badge, tooltip
    menubar/
      MenuBar.tsx           # macOS top bar shell
      MenuBarClock.tsx      # Time + date
      MenuBarWifi.tsx       # WiFi indicator
      ControlCenter.tsx     # Popover panel (brightness, volume, theme switch)
      SystemTray.tsx        # Windows right-side tray
    liquid-glass/
      LiquidGlass.tsx       # Composites CSS + SVG + WebGL layers
      GlassFilter.tsx       # SVG <defs> singleton at root (feTurbulence + feDisplacement)
      GlassShimmer.tsx      # <canvas> for WebGL animated caustic shimmer
      useGlassShimmer.ts    # WebGL2 setup, RAF loop, graceful degradation
    themes/
      ThemeProvider.tsx     # Sets data-os-theme on <html>, picks layout compositor
      MacOSTheme.tsx        # MenuBar top + Desktop + Dock bottom
      IPadTheme.tsx         # Home screen grid + Dock
      IPhoneTheme.tsx       # Full-screen apps + bottom NavBar
      WindowsTheme.tsx      # Desktop + Taskbar bottom
      AndroidTheme.tsx      # Material layout + NavBar
    apps/
      AppRegistry.tsx       # ID → lazy(import()) map
      Finder.tsx            # File browser (sidebar + grid)
      Terminal.tsx          # Textarea-based emulator
      Browser.tsx           # Iframe wrapper with address bar
      Settings.tsx          # Theme switcher, wallpaper, glass toggle
      TextEditor.tsx        # contenteditable editor
      IframeApp.tsx         # Generic iframe window (used from config)
      MdxApp.tsx            # Renders MDX content in a window
  store/
    index.ts                # create() with immer + persist; combines all slices
    window-slice.ts         # WindowState CRUD + z-index management
    app-slice.ts            # App registry + running app tracking
    theme-slice.ts          # OSTheme, ColorScheme, glassEnabled
    desktop-slice.ts        # Wallpaper, icon layout, dock order
  hooks/
    useWindowUrlSync.ts     # nuqs ↔ Zustand window state bridge
    usePointerDrag.ts       # Generic pointerId-capture drag primitive
    useResizeObserver.ts    # ResizeObserver hook
    useLocalStorage.ts      # SSR-safe localStorage
    useTheme.ts             # Theme-aware helpers
  config/
    apps.config.ts          # AppConfig[] — add new apps here
    wallpapers.config.ts    # Per-theme wallpaper definitions
    themes.config.ts        # Theme metadata
  types/
    app.ts                  # AppConfig, ContextMenuAction, AppInstance
    window.ts               # WindowState, WindowRect, ResizeEdge
    theme.ts                # OSTheme, ColorScheme, ThemeConfig
    desktop.ts              # DesktopConfig, WallpaperConfig
  lib/
    utils.ts                # cn() = clsx + twMerge
    url-codec.ts            # WindowState ↔ URL param string
    window-math.ts          # snapZone, clamp, edgeResistance, 8-dir resize delta
    glsl/
      shimmer.vert.ts       # Vertex shader source (pass-through)
      shimmer.frag.ts       # Fragment shader: time-driven caustic shimmer
public/
  wallpapers/               # jpg/webp wallpapers per theme
  icons/                    # SVG app icons
  manifest.json             # PWA manifest
```

---

## Key Types

```typescript
// types/app.ts
interface AppConfig {
  id: string;
  name: string;
  icon: string;                    // /icons/*.svg or lucide icon name
  component: string;               // key into AppRegistry
  disabled?: boolean;
  defaultSize?: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
  minSize?: { width: number; height: number };
  contextMenu?: ContextMenuAction[];
  hasMenuBar?: boolean;
  hasStatusBar?: boolean;
  category?: string;
  mobileFullscreen?: boolean;
  // For iframe apps:
  iframeUrl?: string;
  // For MDX apps:
  mdxSlug?: string;
}

// types/window.ts
type ResizeEdge = 'n'|'ne'|'e'|'se'|'s'|'sw'|'w'|'nw';
interface WindowRect { x: number; y: number; width: number; height: number }
interface WindowState {
  id: string;
  appId: string;
  rect: WindowRect;
  prevRect: WindowRect | null;   // saved before maximize
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
  title: string;
  hasMenuBar: boolean;
  hasStatusBar: boolean;
}
```

---

## State Slices (Zustand)

| Slice | Persisted to localStorage | Synced to URL |
|-------|--------------------------|---------------|
| window-slice | No | Yes (via nuqs) |
| theme-slice | Yes (osTheme, colorScheme, glassEnabled) | No |
| desktop-slice | Yes (wallpaper, iconLayout, dockAppIds) | No |
| app-slice | No | No |

**Store setup:** `create()(immer(persist(...slices, { partialize })))`

---

## URL Encoding (nuqs)

Window state per open window encoded as repeated `?w=` params:
```
?w=finder:100,200,800,600&w=terminal:300,400,600,400:1
```
Format: `appId:x,y,width,height[:flagsBitmask]`  
Flags: `1=minimized, 2=maximized`

`useWindowUrlSync.ts` — on mount: decode URL → hydrate store; on store change: debounced encode → `history.replaceState` (shallow, via nuqs).

---

## CSS Architecture (Tailwind v4)

`globals.css` defines:
1. `@custom-variant macos ([data-os-theme="macos"] &)` × 5 themes
2. Per-theme CSS custom properties on `[data-os-theme="X"]` selectors:
   - `--dock-height`, `--menubar-height`, `--window-chrome-height`
   - `--dock-bg`, `--menubar-bg`, `--window-chrome-bg` (rgba values)
   - `--radius-window`, `--radius-dock`
   - `--traffic-light-*` colors (macOS only)
   - `--win-accent` (Windows only)
3. `@theme inline` exposes tokens as Tailwind utilities
4. `html, body { overflow: hidden; height: 100%; user-select: none }`

Components use: `className="macos:flex windows:hidden"` — visibility per theme via variant utilities.

---

## Window Drag & Resize

**Drag (`useWindowDrag.ts`):**
- `onPointerDown` → `setPointerCapture(pointerId)` on chrome
- `pointermove` on `window`: compute delta, apply edge resistance within `SNAP_ZONE=24px`
- `applyEdgeResistance(x, vpWidth, zone)` → exponential deceleration near screen edge
- `pointerup`: snap if within zone, commit final rect to Zustand (single write)
- Motion `useMotionValue` for x/y — bypasses React reconciliation during drag

**Resize (`useWindowResize.ts`):**
- 8 `ResizeHandle` zones with `cursor-*` CSS per edge (n/s = ns-resize, ne/sw = nesw-resize, etc.)
- Each handle `onPointerDown` records `ResizeEdge`, captures pointer
- `pointermove`: compute new rect via `calcResizeDelta(edge, dx, dy, currentRect)`
- Clamp to `minSize` from `AppConfig`
- Motion `useMotionValue` for width/height too — no re-renders during resize

**Maximize/Restore:**
- `maximizeWindow(id, viewportRect)` → saves `prevRect`, sets rect = viewport minus chrome heights
- Restore → reads `prevRect`, animated via Motion `layout` prop

---

## Liquid Glass (WebGL)

Three-layer composition in `LiquidGlass.tsx`:

1. **CSS base** — `backdrop-filter: blur(20px) saturate(180%)` + RGBA background
2. **SVG distortion** — `filter: url(#glass-distortion)` referencing singleton `GlassFilter.tsx`'s `feTurbulence` + `feDisplacementMap`
3. **WebGL shimmer** — `GlassShimmer.tsx` canvas, `mix-blend-mode: overlay`, absolute positioned

**GLSL Shimmer Fragment** (`shimmer.frag.ts`):
- Time-driven dual sine waves → caustic pattern
- Alpha ~0.08 (very subtle)
- Graceful degradation: if WebGL2 unavailable, layers 1+2 still render

**`useGlassShimmer.ts`:**
- `getContext('webgl2')` → null guard
- Compile vert + frag from string constants
- Upload `u_time` uniform per RAF frame
- Cleanup: `cancelAnimationFrame` on unmount

---

## Theme Responsive Behavior

| Theme | Layout | Responsive behavior |
|-------|--------|-------------------|
| macOS | MenuBar top + Desktop + Dock bottom | `md:` → iPad layout, `sm:` → iPhone layout |
| iPad OS | Home grid + Dock | Standalone or macOS responsive target |
| iPhone OS | Fullscreen apps + NavBar bottom | Standalone or macOS `sm:` target |
| Windows 11 | Desktop + Taskbar bottom | `sm:` → compact mobile layout |
| Android | Material + NavBar bottom | `sm:` → compact mobile layout |

iOS/Android: windows always fullscreen (`w-full h-full` ignoring WindowRect).  
macOS/Windows: windows floating with drag/resize.

---

## Service Worker (next-pwa)

```typescript
// next.config.ts
withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    { urlPattern: /\/wallpapers\/|\/icons\//, handler: 'CacheFirst' },
    { urlPattern: /\/_next\/static\//, handler: 'CacheFirst' },
    { urlPattern: /^https?.*/, handler: 'NetworkFirst', options: { networkTimeoutSeconds: 3 } },
  ]
})
```

---

## App Config (How to Add New Apps)

Add an entry to `src/config/apps.config.ts`:
```typescript
{
  id: 'my-app',
  name: 'My App',
  icon: '/icons/my-app.svg',
  component: 'MyApp',           // matches key in AppRegistry.tsx
  defaultSize: { width: 800, height: 600 },
  hasMenuBar: true,
  contextMenu: [
    { key: 'new-window', label: 'New Window', action: 'newWindow' }
  ]
}
```
Then add `MyApp: lazy(() => import('./MyApp'))` to `AppRegistry.tsx`.

For iframe: `component: 'IframeApp'`, add `iframeUrl: 'https://...'`  
For MDX: `component: 'MdxApp'`, add `mdxSlug: 'my-page'`

---

## Implementation Sequence

### Phase 1 — Bootstrap
1. `npx create-next-app@latest desktop-layout --typescript --eslint --app --turbopack`
2. Install all dependencies (see stack above)
3. Set up `globals.css` (Tailwind v4 + `@custom-variant` + CSS tokens)
4. `tsconfig.json` path aliases: `@/*` → `./src/*`
5. Create all `types/` files
6. `lib/utils.ts` with `cn()`

### Phase 2 — State Foundation
7. All 4 Zustand slice files with full actions
8. `store/index.ts` combining slices with immer + persist
9. `config/apps.config.ts` with 5 demo apps
10. `lib/url-codec.ts` + `lib/window-math.ts`
11. `hooks/useWindowUrlSync.ts` via nuqs

### Phase 3 — Desktop Canvas
12. `Desktop.tsx` + `Wallpaper.tsx` + `WallpaperPicker.tsx`
13. `IconGrid.tsx` + `AppIcon.tsx` (drag reorder, dblclick open, right-click menu)
14. `DesktopContextMenu.tsx` (right-click on wallpaper)

### Phase 4 — Window System
15. `hooks/usePointerDrag.ts` (primitive)
16. `hooks/useWindowDrag.ts` (snap physics)
17. `hooks/useWindowResize.ts` (8-direction)
18. `ResizeHandle.tsx` (cursor zones)
19. `WindowChrome.tsx` (theme-adaptive controls)
20. `WindowMenuBar.tsx` + `WindowStatusBar.tsx`
21. `Window.tsx` (full compositor with Motion)
22. `WindowManager.tsx` (AnimatePresence)

### Phase 5 — Liquid Glass
23. `GlassFilter.tsx` (SVG singleton)
24. `lib/glsl/shimmer.vert.ts` + `shimmer.frag.ts`
25. `hooks/useGlassShimmer.ts` (WebGL2 setup)
26. `GlassShimmer.tsx` + `LiquidGlass.tsx`

### Phase 6 — Dock/Menubar
27. `DockItem.tsx` (magnification, bounce, badge)
28. `Dock.tsx` + `Taskbar.tsx` + `NavBar.tsx`
29. `MenuBar.tsx` + `MenuBarClock.tsx` + `ControlCenter.tsx` + `SystemTray.tsx`

### Phase 7 — Theme System
30. All 5 theme compositor components
31. `ThemeProvider.tsx` (data attribute sync)
32. Test theme switching end-to-end

### Phase 8 — App Implementations
33. `AppRegistry.tsx` with lazy imports
34. `Settings.tsx` (theme/wallpaper/glass controls)
35. `Finder.tsx`, `Terminal.tsx`, `Browser.tsx`, `TextEditor.tsx`
36. `IframeApp.tsx`, `MdxApp.tsx`

### Phase 9 — PWA / Service Worker
37. `next.config.ts` with next-pwa config
38. `public/manifest.json`
39. Offline fallback test

### Phase 10 — Polish
40. `React.memo` on `AppIcon`, `DockItem`, Window children
41. Keyboard shortcuts: Cmd+W close, Cmd+M minimize, Cmd+Tab app switch
42. URL round-trip test (open 3 windows, share URL, verify restore)
43. WebGL degradation test (disable WebGL, confirm glass still renders)

---

## Critical Files

| File | Why Critical |
|------|-------------|
| `src/store/index.ts` | Everything depends on correct slice composition |
| `src/components/window/Window.tsx` | Most complex component — drag + resize + motion + z-index |
| `src/app/globals.css` | All theme-specific styling flows from CSS custom properties here |
| `src/components/themes/ThemeProvider.tsx` | Bridge between Zustand state and CSS data attributes |
| `src/lib/url-codec.ts` | Window state URL contract — wrong here = broken deep links |
| `src/config/apps.config.ts` | The user-facing extension point for adding new apps |

---

## Verification

1. **Dev server**: `npm run dev` → desktop loads with macOS theme and wallpaper
2. **Window system**: dblclick icon → window opens, drag title bar, resize edges, maximize/restore
3. **Snap physics**: drag window to screen edge → resistance felt, releases past threshold
4. **Liquid glass**: dock + menubar show refraction + shimmer (inspect WebGL context in DevTools)
5. **Theme switch**: Settings app → switch to Windows 11 → layout changes, glass disappears
6. **URL state**: open 2 windows, copy URL, open in new tab → same windows restore
7. **Offline**: disable network in DevTools → desktop still loads from SW cache
8. **Mobile**: resize browser to 375px → macOS theme switches to iPhone layout
