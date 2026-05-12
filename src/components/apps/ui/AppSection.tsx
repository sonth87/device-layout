'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AppSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/**
 * A labelled content section — title + optional description + children.
 * Used as the top-level grouping inside any settings/detail panel.
 */
export function AppSection({ title, description, children, className }: AppSectionProps) {
  return (
    <section className={cn('space-y-3', className)}>
      {(title || description) && (
        <div>
          {title && <h2 className="text-[13px] font-semibold uppercase tracking-wide text-black/40 dark:text-white/40 px-1">{title}</h2>}
          {description && <p className="text-xs text-black/40 dark:text-white/40 mt-0.5 px-1">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
