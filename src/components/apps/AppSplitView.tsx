'use client';

import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useResizeObserver } from '@/hooks/useResizeObserver';

interface AppSplitViewProps {
  sidebar: ReactNode;
  sidebarWidthClass?: string;
  sidebarClassName?: string;
  contentClassName?: string;
  className?: string;
  children: (size: { width: number; height: number }) => ReactNode;
}

export function AppSplitView({
  sidebar,
  sidebarWidthClass = 'w-52',
  sidebarClassName,
  contentClassName,
  className,
  children,
}: AppSplitViewProps) {
  const contentRef = useRef<HTMLElement | null>(null);
  const contentSize = useResizeObserver(contentRef);

  return (
    <div className={cn('flex h-full', className)}>
      <aside
        className={cn(
          sidebarWidthClass,
          'shrink-0 border-r border-black/10 dark:border-white/10',
          sidebarClassName
        )}
      >
        {sidebar}
      </aside>

      <main ref={contentRef} className={cn('min-w-0 flex-1', contentClassName)}>
        {children(contentSize)}
      </main>
    </div>
  );
}
