# Liquid Glass

## Overview

Liquid Glass is a layered visual effect applied to the dock, menubar, tooltips, and panel overlays on glass-enabled themes (macOS 26, iPad OS 26, iPhone OS 26). It is implemented as a composited stack of four layers.

---

## Layer Stack (bottom to top)

```
1. backdrop-filter: blur       CSS — blurs the content behind the element
2. SVG displacement filter     distorts the blurred content for a refraction look
3. WebGL2 caustic shimmer      animated light caustic pattern (canvas overlay)
4. Specular highlight gradient CSS gradient — bright edge at the top of the element
```

---

## Components

### `GlassFilter.tsx`

Mounts a single `<svg>` containing an `feTurbulence + feDisplacement` filter at `<body>` scope. This filter is referenced by ID from any element that opts in.

**This component is mounted once in the root layout. Do not add another instance.**

```tsx
// Injected once in app/layout.tsx
<GlassFilter />
```

The filter is referenced via CSS:
```css
filter: url(#glass-distort);
```

### `GlassShimmer.tsx`

A `<canvas>` element rendered as an overlay. `useGlassShimmer` drives a WebGL2 fragment shader that produces an animated caustic light pattern.

```glsl
// Fragment shader (simplified)
// Uses fBm noise to simulate caustic light refraction over time
void main() {
  float caustic = fbm(uv + uTime * 0.1);
  fragColor = vec4(vec3(caustic), caustic * 0.15);
}
```

Graceful degradation: if WebGL2 is unavailable, the shimmer canvas renders nothing — the other glass layers still apply.

### `LiquidGlass.tsx`

The main composition component. Accepts a `variant` prop and renders all layers:

```tsx
<LiquidGlass variant="dock" className="..." />
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'dock' \| 'menubar' \| 'panel' \| 'tooltip' \| 'window'` | — | Controls opacity, blur strength, shimmer intensity |
| `className` | `string` | — | Applied to the outer container |
| `children` | `ReactNode` | — | Content rendered on top of the glass layers |

**LiquidGlass does not accept a `style` prop.** Control geometry by wrapping it:

```tsx
// WRONG
<LiquidGlass style={{ borderRadius: 16 }} />

// CORRECT
<div className="rounded-2xl overflow-hidden">
  <LiquidGlass className="w-full h-full" />
</div>
```

---

## Disabling Glass

`glassEnabled` in the theme slice controls whether glass is applied globally. When `false`, `LiquidGlass` renders a simple `bg-white/10 backdrop-blur-sm` fallback without the SVG filter or WebGL shimmer.

Users can toggle this in Settings > Appearance.

---

## Performance Notes

- The SVG filter is GPU-accelerated on most browsers but can be expensive at large sizes. The dock and tooltip use `variant="dock"` / `variant="tooltip"` which apply smaller filter extents.
- The WebGL shimmer canvas uses `requestAnimationFrame` and is paused when the tab is in the background (`document.hidden`).
- Avoid nesting `LiquidGlass` inside another `LiquidGlass` — double-filtering is visually incorrect and expensive.

---

## Integration Points

- **Dock** (`Dock.tsx`): `variant="dock"` — absolute-positioned behind the icon row
- **MenuBar** (`MenuBar.tsx`): `variant="menubar"` — full-width top bar
- **Tooltip** (Radix `Tooltip.Content`): `variant="tooltip"` — small pill
- **ControlCenter popover**: `variant="panel"`
- **SnapAssist overlay** (macOS): `variant="panel"` with white/20 tint
