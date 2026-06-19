'use client';

import { cn } from '@/lib/utils';
import { useGlassEnabled } from '@/store';
import { GlassShimmer } from './GlassShimmer';

export type GlassVariant = 'dock' | 'menubar' | 'taskbar' | 'window' | 'panel';

interface LiquidGlassProps {
  children?: React.ReactNode;
  className?: string;
  variant?: GlassVariant;
  forceGlass?: boolean;
}

const VARIANT_RADIUS_VAR: Record<GlassVariant, string | null> = {
  dock:    'var(--radius-dock)',
  menubar: null,
  taskbar: null,
  window:  'var(--radius-window)',
  panel:   'var(--radius-card)',
};

export function LiquidGlass({
  children,
  className,
  variant = 'panel',
  forceGlass,
}: LiquidGlassProps) {
  const globalGlass = useGlassEnabled();
  const isGlass = forceGlass !== undefined ? forceGlass : globalGlass;
  const radiusVar = VARIANT_RADIUS_VAR[variant];
  const radiusStyle: React.CSSProperties = radiusVar ? { borderRadius: radiusVar } : {};

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        isGlass
          ? 'backdrop-blur-2xl bg-white/25 dark:bg-white/10 border-white/40 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)]'
          : 'backdrop-blur-xl bg-white/25 dark:bg-black/35 border-white/30 dark:border-white/15',
        'border',
        className
      )}
      style={radiusStyle}
    >
      {/* ── SVG distortion layer (absolute, behind content) ── */}
      {isGlass && (
        <div
          aria-hidden
          className={cn('absolute inset-0 pointer-events-none overflow-hidden')}
          style={{ ...radiusStyle, filter: 'url(#lg-distort)', opacity: 0.4 }}
        >
          <div className="absolute inset-0 bg-white/30 dark:bg-white/10" />
        </div>
      )}

      {/* ── Top specular highlight ── */}
      {isGlass && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[1.5px] pointer-events-none z-10"
          style={{
            background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.85) 70%, transparent 95%)',
          }}
        />
      )}

      {/* ── Left edge glow ── */}
      {isGlass && (
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-px pointer-events-none z-10"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)' }}
        />
      )}

      {/* ── Content ── */}
      <div className="relative z-20 min-w-0 w-full h-full">
        {children}
      </div>

      {/* ── WebGL shimmer (subtle caustics overlay) ── */}
      {isGlass && (
        <GlassShimmer className="absolute inset-0 w-full h-full z-30 opacity-25 pointer-events-none" />
      )}
    </div>
  );
}
