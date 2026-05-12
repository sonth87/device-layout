'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AppListGroupProps {
  children: ReactNode;
  className?: string;
}

/**
 * A grouped list of rows — iOS-style rounded card with dividers between rows.
 * Wrap AppListRow components inside this.
 *
 * Example:
 *   <AppListGroup>
 *     <AppListRow label="Language" value="English" onPress={...} />
 *     <AppListRow label="Region" value="Vietnam" onPress={...} />
 *   </AppListGroup>
 */
export function AppListGroup({ children, className }: AppListGroupProps) {
  return (
    <div className={cn(
      'rounded-xl overflow-hidden',
      'divide-y divide-black/8 dark:divide-white/8',
      'bg-white dark:bg-white/5',
      'border border-black/8 dark:border-white/8',
      className
    )}>
      {children}
    </div>
  );
}
