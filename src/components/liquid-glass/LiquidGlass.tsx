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

const VARIANT_RADIUS: Record<GlassVariant, string> = {
  dock:    'rounded-[20px]',
  menubar: 'rounded-none',
  taskbar: 'rounded-none',
  window:  'rounded-[var(--radius-window,10px)]',
  panel:   'rounded-2xl',
};

export function LiquidGlass({
  children,
  className,
  variant = 'panel',
  forceGlass,
}: LiquidGlassProps) {
  const globalGlass = useGlassEnabled();
  const isGlass = forceGlass !== undefined ? forceGlass : globalGlass;
  const radius = VARIANT_RADIUS[variant];

  if (!isGlass) {
    return (
      <div
        className={cn(
          radius,
          'bg-white/25 dark:bg-black/35',
          'backdrop-blur-xl',
          'border border-white/30 dark:border-white/15',
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        radius,
        'backdrop-blur-2xl',
        'bg-white/25 dark:bg-white/10',
        'border border-white/40 dark:border-white/20',
        'shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)]',
        className
      )}
    >
      {/* ── SVG distortion layer (absolute, behind content) ── */}
      <div
        aria-hidden
        className={cn('absolute inset-0 pointer-events-none overflow-hidden', radius)}
        style={{ filter: 'url(#lg-distort)', opacity: 0.4 }}
      >
        <div className="absolute inset-0 bg-white/30 dark:bg-white/10" />
      </div>

      {/* ── Top specular highlight ── */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[1.5px] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.85) 70%, transparent 95%)',
        }}
      />

      {/* ── Left edge glow ── */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-px pointer-events-none z-10"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)' }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 min-w-0">
        {children}
      </div>

      {/* ── WebGL shimmer (subtle caustics overlay) ── */}
      <GlassShimmer className="absolute inset-0 w-full h-full z-30 opacity-25 pointer-events-none" />
    </div>
  );
}
