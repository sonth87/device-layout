'use client';

import { useState } from 'react';
import { Folder, FileText, Image, Music, Film, HardDrive, Home, Monitor, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { AppContentProps } from './AppRegistry';

interface FSItem {
  name: string;
  type: 'folder' | 'file';
  icon?: React.ReactNode;
  size?: string;
  modified?: string;
}

const SIDEBAR_ITEMS = [
  { label: 'Favourites', items: [
    { name: 'Home', icon: <Home className="w-3.5 h-3.5" /> },
    { name: 'Desktop', icon: <Monitor className="w-3.5 h-3.5" /> },
    { name: 'Downloads', icon: <Download className="w-3.5 h-3.5" /> },
  ]},
  { label: 'Locations', items: [
    { name: 'Macintosh HD', icon: <HardDrive className="w-3.5 h-3.5" /> },
  ]},
];

const DEMO_FILES: FSItem[] = [
  { name: 'Documents', type: 'folder', icon: <Folder className="w-10 h-10 text-blue-400" />, modified: 'Today' },
  { name: 'Pictures', type: 'folder', icon: <Folder className="w-10 h-10 text-blue-400" />, modified: 'Yesterday' },
  { name: 'Music', type: 'folder', icon: <Folder className="w-10 h-10 text-blue-400" />, modified: 'Last week' },
  { name: 'Videos', type: 'folder', icon: <Folder className="w-10 h-10 text-blue-400" />, modified: 'Last week' },
  { name: 'README.md', type: 'file', icon: <FileText className="w-10 h-10 text-gray-400" />, size: '4 KB', modified: 'Today' },
  { name: 'photo.jpg', type: 'file', icon: <Image className="w-10 h-10 text-green-400" />, size: '2.4 MB', modified: 'Yesterday' },
  { name: 'song.mp3', type: 'file', icon: <Music className="w-10 h-10 text-orange-400" />, size: '8 MB', modified: '3 days ago' },
  { name: 'movie.mp4', type: 'file', icon: <Film className="w-10 h-10 text-purple-400" />, size: '1.2 GB', modified: 'Last week' },
];

export function Finder({ windowId }: AppContentProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<'icon' | 'list'>('icon');

  return (
    <div className="flex h-full bg-white dark:bg-neutral-900">
      {/* Sidebar */}
      <aside className="w-40 shrink-0 bg-neutral-100/80 dark:bg-neutral-800/80 border-r border-black/10 dark:border-white/10 overflow-y-auto p-2">
        {SIDEBAR_ITEMS.map((section) => (
          <div key={section.label} className="mb-3">
            <p className="text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider px-2 mb-1">
              {section.label}
            </p>
            {section.items.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-2 w-full px-2 py-1 rounded-md text-xs hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-left"
              >
                <span className="text-blue-500">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-4">
        {/* Toolbar */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setView('icon')}
            className={cn('px-2 py-1 rounded text-xs', view === 'icon' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/5')}
          >
            Icons
          </button>
          <button
            onClick={() => setView('list')}
            className={cn('px-2 py-1 rounded text-xs', view === 'list' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/5 dark:hover:bg-white/5')}
          >
            List
          </button>
        </div>

        {view === 'icon' ? (
          <div className="grid grid-cols-5 gap-4">
            {DEMO_FILES.map((file) => (
              <button
                key={file.name}
                onDoubleClick={() => {}}
                onClick={() => setSelected(file.name)}
                className={cn(
                  'flex flex-col items-center gap-1 p-2 rounded-lg text-center transition-colors',
                  selected === file.name
                    ? 'bg-blue-500/20 dark:bg-blue-400/20'
                    : 'hover:bg-black/5 dark:hover:bg-white/5'
                )}
              >
                {file.icon}
                <span className="text-xs truncate w-full">{file.name}</span>
              </button>
            ))}
          </div>
        ) : (
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-black/10 dark:border-white/10">
                <th className="text-left py-1 font-medium">Name</th>
                <th className="text-left py-1 font-medium">Modified</th>
                <th className="text-right py-1 font-medium">Size</th>
              </tr>
            </thead>
            <tbody>
              {DEMO_FILES.map((file) => (
                <tr
                  key={file.name}
                  onClick={() => setSelected(file.name)}
                  className={cn(
                    'cursor-pointer hover:bg-black/5 dark:hover:bg-white/5',
                    selected === file.name && 'bg-blue-500/10'
                  )}
                >
                  <td className="py-1.5 flex items-center gap-2">
                    <span className="text-base">{file.icon}</span>
                    {file.name}
                  </td>
                  <td className="py-1.5 text-black/50 dark:text-white/50">{file.modified}</td>
                  <td className="py-1.5 text-right text-black/50 dark:text-white/50">{file.size ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}
