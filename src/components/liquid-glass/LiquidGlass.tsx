"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { useStore } from "@/store";
import { GlassShimmer } from "./GlassShimmer";
import { useLiquidGlass } from "./useLiquidGlass";

export type GlassVariant =
  | "dock"
  | "menubar"
  | "taskbar"
  | "window"
  | "panel"
  | "widget";

interface LiquidGlassProps {
  children?: React.ReactNode;
  className?: string;
  variant?: GlassVariant;
  forceGlass?: boolean;
  /** Overrides the variant's default radius (e.g. Dock scaling `--radius-dock` down with dockSize). */
  borderRadius?: string | number;
}

const VARIANT_RADIUS_VAR: Record<GlassVariant, string | null> = {
  dock: "var(--radius-dock)",
  menubar: null,
  taskbar: null,
  window: "var(--radius-window)",
  panel: "var(--radius-card)",
  widget: "var(--radius-card)",
};

const VARIANT_SHADOW_CLS: Record<GlassVariant, string> = {
  dock: "shadow-[0_8px_24px_rgba(0,0,0,0.15)]",
  menubar: "shadow-sm",
  taskbar: "shadow-none",
  window: "shadow-[0_16px_48px_rgba(0,0,0,0.3)]",
  panel: "shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
  widget: "shadow-none",
};

export function LiquidGlass({
  children,
  className,
  variant = "panel",
  forceGlass,
  borderRadius,
}: LiquidGlassProps) {
  const { isGlass: themeGlass } = useTheme();
  const isGlass = forceGlass !== undefined ? forceGlass : themeGlass;
  const glassMode = useStore((s) => s.glassMode);
  const radiusVar = borderRadius ?? VARIANT_RADIUS_VAR[variant];

  const radiusStyle: React.CSSProperties = radiusVar
    ? { borderRadius: radiusVar }
    : {};
  const shadowCls = VARIANT_SHADOW_CLS[variant];

  // Dynamic glass maps generator hook
  const { elementRef, maps } = useLiquidGlass();

  const filterStr =
    isGlass && maps
      ? `url(#${maps.filterId}) blur(24px)`
      : isGlass
        ? "url(#lg-distort) blur(24px)"
        : "blur(20px)";

  if (!isGlass) {
    return (
      <div
        ref={elementRef}
        className={cn(
          "relative overflow-hidden",
          "bg-white/15 dark:bg-black/20 border-white/20 dark:border-white/10",
          shadowCls,
          "border",
          className,
        )}
        style={radiusStyle}
      >
        <div className="relative z-20 min-w-0 w-full h-full">{children}</div>
      </div>
    );
  }

  if (glassMode === "clear") {
    return (
      <div
        ref={elementRef}
        className={cn(
          "relative overflow-hidden border border-white/25 dark:border-white/10",
          shadowCls,
          className,
        )}
        style={radiusStyle}
      >
        {/* Glass background layer with distortion */}
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            ...radiusStyle,
            backdropFilter: "blur(3px)",
            filter: "url(#glass-distortion)",
            isolation: "isolate",
          }}
        />
        {/* Clean border / backdrop opacity */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            ...radiusStyle,
            background: "rgba(255, 255, 255, 0.08)",
          }}
        />
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            ...radiusStyle,
            boxShadow:
              "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.25), inset -0.5px -0.5px 1px 1px rgba(255, 255, 255, 0.15)",
          }}
        />

        {/* Content */}
        <div className="relative z-20 min-w-0 w-full h-full">{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={elementRef}
      className={cn(
        "relative overflow-hidden",
        isGlass
          ? cn(
              "bg-white/12 dark:bg-white/5 border-white/30 dark:border-white/15",
              shadowCls,
              "inset_0_1px_0_rgba(255,255,255,0.4)",
            )
          : cn(
              "bg-white/15 dark:bg-black/20 border-white/20 dark:border-white/10",
              shadowCls,
            ),
        "border",
        className,
      )}
      style={{
        ...radiusStyle,
        backdropFilter: filterStr,
        WebkitBackdropFilter: filterStr,
      }}
    >
      {/* ── Top specular highlight ── */}
      {isGlass && variant !== "menubar" && variant !== "taskbar" && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.85) 70%, transparent 95%)",
          }}
        />
      )}

      {/* ── Left edge glow ── */}
      {isGlass && variant !== "menubar" && variant !== "taskbar" && (
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-px pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)",
          }}
        />
      )}

      {/* ── Content ── */}
      <div className="relative z-20 min-w-0 w-full h-full">{children}</div>

      {/* ── WebGL shimmer (subtle caustics overlay) ── */}
      {isGlass && (
        <GlassShimmer className="absolute inset-0 w-full h-full z-30 opacity-25 pointer-events-none" />
      )}

      {/* ── Inline SVG filter definition for precise refraction ── */}
      {isGlass && maps && (
        <svg
          aria-hidden
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <filter id={maps.filterId} colorInterpolationFilters="sRGB">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0.2"
              result="blurred_source"
            />
            <feImage
              href={maps.displacementUrl}
              x="0"
              y="0"
              width={maps.width}
              height={maps.height}
              result="displacement_map"
            />
            <feDisplacementMap
              in="blurred_source"
              in2="displacement_map"
              scale={80}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feColorMatrix
              in="displaced"
              type="saturate"
              result="displaced_saturated"
              values="6"
            />
            <feImage
              href={maps.specularUrl}
              x="0"
              y="0"
              width={maps.width}
              height={maps.height}
              result="specular_layer"
            />
            <feComposite
              in="displaced_saturated"
              in2="specular_layer"
              operator="in"
              result="specular_saturated"
            />
            <feComponentTransfer in="specular_layer" result="specular_faded">
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feBlend
              in="specular_saturated"
              in2="displaced"
              mode="normal"
              result="withSaturation"
            />
            <feBlend in="specular_faded" in2="withSaturation" mode="normal" />
          </filter>
        </svg>
      )}
    </div>
  );
}
