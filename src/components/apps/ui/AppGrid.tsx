'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useAppLayout } from '@/hooks/useAppLayout';

interface AppGridProps {
  /** Columns per breakpoint. Defaults: narrow=2, medium=3, wide=4 */
  narrow?: number;
  medium?: number;
  wide?: number;
  gap?: string;
  children: ReactNode;
  className?: string;
}

/**
 * A responsive CSS grid that uses container width (not viewport width).
 * Automatically picks the right column count for phone frame / desktop window.
 *
 * Example:
 *   <AppGrid narrow={2} medium={3} wide={4}>
 *     {photos.map(p => <PhotoCard key={p.id} photo={p} />)}
 *   </AppGrid>
 */
export function AppGrid({
  narrow = 2,
  medium = 3,
  wide = 4,
  gap = '8px',
  children,
  className,
}: AppGridProps) {
  const { cols } = useAppLayout();
  const numCols = cols(narrow, medium, wide);

  return (
    <div
      className={cn('grid', className)}
      style={{ gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))`, gap }}
    >
      {children}
    </div>
  );
}
