'use client';

import { useState } from 'react';
import type { AppContentProps } from './AppRegistry';

export function TextEditor({ windowId }: AppContentProps) {
  const [content, setContent] = useState('# Welcome\n\nStart typing here...');
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const charCount = content.length;

  return (
    <div className="flex flex-col h-full">
      <textarea
        className="flex-1 w-full resize-none p-4 text-sm font-mono bg-white dark:bg-neutral-900 text-black dark:text-white outline-none leading-relaxed"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        spellCheck={false}
        placeholder="Start typing..."
      />
      {/* Status bar info (shows in the windowStatusBar area via the data) */}
      <div className="shrink-0 px-4 py-1 text-xs text-black/40 dark:text-white/40 border-t border-black/10 dark:border-white/10 flex gap-4">
        <span>{wordCount} words</span>
        <span>{charCount} characters</span>
      </div>
    </div>
  );
}
