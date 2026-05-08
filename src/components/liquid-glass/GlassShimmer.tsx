'use client';

import { useRef } from 'react';
import { useGlassShimmer } from './useGlassShimmer';

/** WebGL caustic shimmer canvas — overlaid on glass elements with mix-blend-mode: overlay */
export function GlassShimmer({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useGlassShimmer(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ mixBlendMode: 'overlay', pointerEvents: 'none' }}
    />
  );
}
