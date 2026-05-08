'use client';

import { useState, FormEvent } from 'react';
import { ArrowLeft, ArrowRight, RefreshCw, Lock, X } from 'lucide-react';
import type { AppContentProps } from './AppRegistry';
import { useStore } from '@/store';

export function Browser({ appId, windowId }: AppContentProps) {
  const appConfig = useStore((s) => s.apps[appId]);
  const [url, setUrl] = useState(appConfig?.iframeUrl ?? 'https://example.com');
  const [inputUrl, setInputUrl] = useState(url);
  const [loading, setLoading] = useState(false);

  const navigate = (target: string) => {
    let normalized = target;
    if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
      normalized = `https://${normalized}`;
    }
    setUrl(normalized);
    setInputUrl(normalized);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(inputUrl);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-neutral-900">
      {/* Navigation bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-neutral-800 shrink-0">
        <button
          className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30"
          onClick={() => {}}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>
        <button
          className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30"
          onClick={() => {}}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
        <button
          className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10"
          onClick={() => navigate(url)}
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>

        {/* URL bar */}
        <form onSubmit={onSubmit} className="flex-1 flex items-center gap-1.5 bg-white dark:bg-neutral-700 rounded-md px-2 py-1 border border-black/10 dark:border-white/10">
          <Lock className="w-3 h-3 text-black/30 dark:text-white/30 shrink-0" />
          <input
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="flex-1 bg-transparent text-xs outline-none"
            placeholder="Enter URL..."
          />
          {inputUrl && (
            <button type="button" onClick={() => setInputUrl('')}>
              <X className="w-3 h-3 text-black/30" />
            </button>
          )}
        </form>
      </div>

      {/* iframe content */}
      <div className="flex-1 relative">
        <iframe
          src={url}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          title="Browser content"
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-neutral-900">
            <RefreshCw className="w-6 h-6 animate-spin text-black/30 dark:text-white/30" />
          </div>
        )}
      </div>
    </div>
  );
}
