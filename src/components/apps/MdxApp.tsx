'use client';

import { useStore } from '@/store';
import type { AppContentProps } from './AppRegistry';

/**
 * Placeholder MDX app — content loaded by slug from /content/*.mdx
 * To enable full MDX support: install @next/mdx and add content files.
 */
export function MdxApp({ appId }: AppContentProps) {
  const appConfig = useStore((s) => s.apps[appId]);

  return (
    <div className="p-6 max-w-prose mx-auto prose dark:prose-invert text-sm">
      <h1>{appConfig?.name ?? 'Content'}</h1>
      <p className="text-black/50 dark:text-white/50">
        MDX content for slug <code>{appConfig?.mdxSlug}</code> would load here.
        Add <code>@next/mdx</code> and create <code>content/{appConfig?.mdxSlug}.mdx</code> to populate this window.
      </p>
    </div>
  );
}
