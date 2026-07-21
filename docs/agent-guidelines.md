# Agent Guidelines

Rules and conventions for AI agents working in this codebase. Read this file before making any changes.

---

## Next.js Version Warning

This project uses **Next.js 15** with the App Router and **React 19**. APIs and conventions differ from earlier versions. Before editing any Next.js-specific file, read the relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices.

---

## Tailwind CSS v4

Class name syntax changed from v3. Use the v4 syntax exclusively:

| v3 (wrong) | v4 (correct) |
|---|---|
| `flex-shrink-0` | `shrink-0` |
| `flex-grow` | `grow` |
| `z-[50]` | `z-50` (when a scale value exists) |
| `bg-white bg-opacity-20` | `bg-white/20` |
| `rounded-[--radius-window]` | `rounded-window` (when CSS var maps to a scale name) |
| `text-[--color-primary]` | `text-primary` |

When a z-index, border-radius, or color does not map to a scale value, use the arbitrary syntax: `z-[9990]`, `rounded-[--radius-custom]`.

---

## Zustand State

**Never create a selector inside a callback body or as a function return value.**

```ts
// WRONG — creates a new function on every render → causes infinite re-render loop
const getWindow = useStore((s) => () => s.windows[windowId]);

// CORRECT — read imperatively inside callbacks
const win = useStore.getState().windows[windowId];
```

**All object/array selectors must use `useShallow`:**

```ts
// WRONG — new object reference on every render → re-render loop
const { moveWindow, focusWindow } = useStore((s) => ({ moveWindow: s.moveWindow, focusWindow: s.focusWindow }));

// CORRECT
import { useShallow } from 'zustand/react/shallow';
const { moveWindow, focusWindow } = useStore(useShallow((s) => ({ moveWindow: s.moveWindow, focusWindow: s.focusWindow })));
```

Primitive values (string, number, boolean) can be selected without `useShallow`.

---

## Window Store (`window-slice.ts`)

`WindowState.prevRect` is the restore point used by:
- `restoreWindow` (unmaximize via chrome button)
- `useWindowDrag` (drag-from-fullscreen proportional grab)
- `useWindowUrlSync` (URL hydration passes `prevRect` to `openWindow`)

Do not modify the maximize/restore reducers without understanding `prevRect`. Do not clear `prevRect` unless the window has been explicitly restored.

---

## Window Positioning

Maximized windows use an explicit rect from the store (`x, y, width, height` computed from theme insets). They do NOT use `inset: 0` CSS.

```ts
// WRONG — starts at y=0, overlaps the menubar
style={{ inset: 0 }}

// CORRECT — rect comes from maximizeWindow which accounts for menuBarHeight
style={{ left: win.rect.x, top: win.rect.y, width: win.rect.width, height: win.rect.height }}
```

---

## Theme Layout Metrics

Never hardcode pixel values for chrome heights in components. Always read from the theme config.

```ts
// WRONG
const menuBarHeight = 28;
const taskbarHeight = 48;

// CORRECT
const { config } = useTheme();
const menuBarHeight = config.layout.chrome.menuBarHeight;
const taskbarHeight = config.layout.chrome.taskbarHeight;
```

The snap system needs these values as `topInset` and `bottomInset`. Always pass them:

```ts
emitSnapZone(zone, isDragging, config.layout.window.dragTopInset, config.layout.chrome.taskbarHeight);
getSnapRect(zone, config.layout.window.dragTopInset, config.layout.chrome.taskbarHeight);
```

---

## Dock Layout

The dock uses a two-layer structure to allow icon magnification to overflow upward:

```
<div relative overflow-visible>          outer wrapper (receives mouse events)
  <div absolute inset-0>                 glass background layer (LiquidGlass)
  <div relative z-10 overflow-visible>   icon row (flex, items overflow upward)
    <DockItem />
    ...
```

Rules:
- Do NOT add `overflow-hidden` to the outer wrapper or any ancestor.
- `DockItem` has a **fixed height** (`BASE_SIZE + 6 = 60px`). The icon grows upward via the container's `flex-col justify-end` and `overflow-visible`.
- The `LiquidGlass` background is a sibling of the icon row, not its parent. Moving icons inside the glass container will cause them to be clipped.

---

## LiquidGlass Component

`LiquidGlass` does not forward a `style` prop. Control its size and position by wrapping it:

```tsx
// WRONG
<LiquidGlass style={{ width: 200, height: 60 }} />

// CORRECT
<div style={{ width: 200, height: 60 }}>
  <LiquidGlass className="w-full h-full" />
</div>
```

The SVG filter (`GlassFilter`) must be mounted exactly once in the tree — it is already rendered in the root layout. Do not add another instance.

---

## Snap Events

Snap zone geometry is centralized in `src/lib/snap-events.ts`. Do not duplicate zone boundary logic in components.

```ts
// All four functions accept topInset and bottomInset
emitSnapZone(zone, isDragging, topInset?, bottomInset?)
onSnapZone(handler)
offSnapZone(handler)
getSnapZone(px, py, topInset?)          // cursor -> zone enum
getSnapRect(zone, topInset?, bottomInset?)  // zone -> pixel rect
```

Top snap detection uses **window Y position**, not cursor Y:

```ts
// CORRECT — triggered when the window's top edge reaches the boundary
const atTopBoundary = nextY <= minY && rawY < minY;
```

---

## Adding Features

- Do not add docstrings, comments, or type annotations to code you did not change.
- Do not refactor outside the scope of the current task.
- Do not add error handling for scenarios that cannot happen at runtime.
- Do not create abstraction helpers for one-off operations.
- When adding a new OS theme: compositor in `src/components/themes/`, config in `themes.config.ts`, registration in `ThemeProvider.tsx`.
- When adding a new app: `AppConfig` in `apps.config.ts`, component in `src/components/apps/`, lazy import in `AppRegistry.tsx`. See [docs/content/apps.md](content/apps.md).

---

## Simple Mode Scoping

When modifying or expanding Simple Mode components:
- Always access feature flags via `useSimpleModeFeatures()`. Do not read `isSimpleMode` raw prop directly in deep child layout components.
- Standard default apps filtering must respect `features.defaultApps` (`boolean | string[]`).
- Standalone fallbacks (e.g. standalone wallpaper picker modal when `settings` app is omitted) must use light/dark theme adaptive styling (`bg-white dark:bg-zinc-900 border-black/10 dark:border-zinc-800 text-zinc-900 dark:text-white`).
- OS Theme choices in Settings Appearance must respect `features.allowedOSThemes`. If `allowedOSThemes.length <= 1`, hide the OS Theme section entirely.
- Top MenuBar behavior when no window is focused: By default (`fallbackMenuBarAppId: null`), no active app name or menus are displayed when no window is focused. To display a fallback app's menu when inactive (e.g. Finder), pass `fallbackMenuBarAppId="finder"`.

---

## Task Completion & Versioning Rules

Whenever completing a new feature, refactor, or bug fix:
1. **Determine SemVer Bump Level**:
   - `PATCH` (`0.2.5` → `0.2.6`): Bug fixes, style fixes, minor internal tweaks with zero API/type contract changes.
   - `MINOR` (`0.2.5` → `0.3.0`): Backward-compatible new features, new props, new apps/widgets.
   - `MAJOR` (`0.2.5` → `1.0.0`): Breaking API changes or breaking store contract changes.
2. **Bump `package.json` Version**: Increment the `"version"` field in `package.json`.
3. **Re-build Library Bundle**: Run `pnpm build:lib` to compile the library ESM bundle and TypeScript `.d.ts` declaration files into `dist-lib/`.
4. **Verify Build**: Ensure `pnpm build:lib` and `pnpm build` complete with zero errors before declaring success. See **[docs/versioning.md](versioning.md)** for complete reference.

