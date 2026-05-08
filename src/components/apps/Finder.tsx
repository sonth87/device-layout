'use client';

import { useState } from 'react';
import { Folder, FileText, Image, Music, Film, HardDrive, Home, Monitor, Download, ChevronRight, Grid3X3, List, ChevronLeft } from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import type { VFSEntry } from '@/store/vfs-slice';
import type { AppContentProps } from './AppRegistry';

const SIDEBAR_SHORTCUTS = [
  { name: 'Home', path: '/Users/user', icon: <Home className="w-3.5 h-3.5" /> },
  { name: 'Desktop', path: '/Users/user/Desktop', icon: <Monitor className="w-3.5 h-3.5" /> },
  { name: 'Downloads', path: '/Users/user/Downloads', icon: <Download className="w-3.5 h-3.5" /> },
  { name: 'Documents', path: '/Users/user/Documents', icon: <FileText className="w-3.5 h-3.5" /> },
  { name: 'Music', path: '/Users/user/Music', icon: <Music className="w-3.5 h-3.5" /> },
  { name: 'Pictures', path: '/Users/user/Pictures', icon: <Image className="w-3.5 h-3.5" /> },
  { name: 'Root', path: '/', icon: <HardDrive className="w-3.5 h-3.5" /> },
];

function getFileIcon(entry: VFSEntry, size = 10): React.ReactNode {
  if (entry.type === 'dir') return <Folder className={`w-${size} h-${size} text-blue-400`} />;
  const ext = entry.name.split('.').pop()?.toLowerCase() ?? '';
  if (['jpg','jpeg','png','gif','webp','svg'].includes(ext)) return <Image className={`w-${size} h-${size} text-green-400`} />;
  if (['mp3','flac','aac','wav','m4a'].includes(ext)) return <Music className={`w-${size} h-${size} text-orange-400`} />;
  if (['mp4','mov','avi','mkv'].includes(ext)) return <Film className={`w-${size} h-${size} text-purple-400`} />;
  return <FileText className={`w-${size} h-${size} text-gray-400`} />;
}

function fmtBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

export function Finder({ windowId }: AppContentProps) {
  const vfsLs = useStore((s) => s.vfsLs);
  const vfsMkdir = useStore((s) => s.vfsMkdir);

  const [path, setPath] = useState('/Users/user');
  const [history, setHistory] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<'icon' | 'list'>('icon');

  const entries = vfsLs(path).sort((a, b) => {
    if (a.type !== b.type) return a.type === 'dir' ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  const navigate = (newPath: string) => {
    setHistory((h) => [...h, path]);
    setPath(newPath);
    setSelected(null);
  };

  const goBack = () => {
    const prev = history[history.length - 1];
    if (!prev) return;
    setHistory((h) => h.slice(0, -1));
    setPath(prev);
    setSelected(null);
  };

  const handleDoubleClick = (entry: VFSEntry) => {
    if (entry.type === 'dir') navigate(entry.path);
  };

  // Breadcrumb parts
  const parts = path.split('/').filter(Boolean);

  return (
    <div className="flex h-full bg-white dark:bg-neutral-900 text-black dark:text-white">
      {/* Sidebar */}
      <aside className="w-40 shrink-0 bg-neutral-100/80 dark:bg-neutral-800/80 border-r border-black/10 dark:border-white/10 overflow-y-auto p-2">
        <p className="text-[10px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider px-2 mb-1">Favourites</p>
        {SIDEBAR_SHORTCUTS.map((s) => (
          <button
            key={s.path}
            onClick={() => navigate(s.path)}
            className={cn(
              'flex items-center gap-2 w-full px-2 py-1 rounded-md text-xs transition-colors text-left',
              path === s.path ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400' : 'hover:bg-black/10 dark:hover:bg-white/10'
            )}
          >
            <span className="text-blue-500">{s.icon}</span>
            {s.name}
          </button>
        ))}
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-hidden flex flex-col min-w-0">
        {/* Toolbar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 shrink-0">
          <button
            onClick={goBack}
            disabled={history.length === 0}
            className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Breadcrumb */}
          <div className="flex items-center gap-0.5 flex-1 overflow-hidden text-xs">
            <button onClick={() => navigate('/')} className="hover:underline shrink-0">
              /
            </button>
            {parts.map((part, i) => {
              const partPath = '/' + parts.slice(0, i + 1).join('/');
              return (
                <span key={partPath} className="flex items-center gap-0.5 min-w-0">
                  <ChevronRight className="w-3 h-3 text-black/30 dark:text-white/30 shrink-0" />
                  <button onClick={() => navigate(partPath)} className="hover:underline truncate">{part}</button>
                </span>
              );
            })}
          </div>

          {/* View toggle */}
          <div className="flex">
            <button onClick={() => setView('icon')} className={cn('px-2 py-0.5 text-xs rounded-l border border-black/15 dark:border-white/15', view === 'icon' ? 'bg-blue-500 text-white border-blue-500' : 'hover:bg-black/5 dark:hover:bg-white/10')}>
              <Grid3X3 className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => setView('list')} className={cn('px-2 py-0.5 text-xs rounded-r border border-l-0 border-black/15 dark:border-white/15', view === 'list' ? 'bg-blue-500 text-white border-blue-500' : 'hover:bg-black/5 dark:hover:bg-white/10')}>
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-3">
          {entries.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-black/30 dark:text-white/30 text-sm gap-2">
              <Folder className="w-12 h-12 opacity-20" />
              <p>Empty folder</p>
            </div>
          ) : view === 'icon' ? (
            <div className="grid grid-cols-5 gap-4">
              {entries.map((entry) => (
                <button
                  key={entry.path}
                  onClick={() => setSelected(entry.path)}
                  onDoubleClick={() => handleDoubleClick(entry)}
                  className={cn(
                    'flex flex-col items-center gap-1.5 p-2 rounded-lg text-center transition-colors',
                    selected === entry.path ? 'bg-blue-500/20' : 'hover:bg-black/5 dark:hover:bg-white/5'
                  )}
                >
                  {getFileIcon(entry)}
                  <span className="text-xs truncate w-full">{entry.name}</span>
                </button>
              ))}
            </div>
          ) : (
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="text-left py-1 font-medium">Name</th>
                  <th className="text-left py-1 font-medium">Kind</th>
                  <th className="text-right py-1 font-medium">Size</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr
                    key={entry.path}
                    onClick={() => setSelected(entry.path)}
                    onDoubleClick={() => handleDoubleClick(entry)}
                    className={cn('cursor-pointer hover:bg-black/5 dark:hover:bg-white/5', selected === entry.path && 'bg-blue-500/10')}
                  >
                    <td className="py-1.5 flex items-center gap-2">
                      <span>{getFileIcon(entry, 4)}</span>
                      {entry.name}
                    </td>
                    <td className="py-1.5 text-black/50 dark:text-white/50">{entry.type === 'dir' ? 'Folder' : 'File'}</td>
                    <td className="py-1.5 text-right text-black/50 dark:text-white/50">
                      {entry.type === 'file' ? fmtBytes(new TextEncoder().encode(entry.content).byteLength) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
