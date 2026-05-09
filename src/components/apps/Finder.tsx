'use client';

import { useState } from 'react';
import { Folder, FileText, Image as ImageIcon, Music, Film, HardDrive, Home, Monitor, Download, ChevronRight, Grid3X3, List, ChevronLeft } from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import type { VFSEntry } from '@/store/vfs-slice';
import type { AppContentProps } from './AppRegistry';
import { AppSplitView } from './AppSplitView';

const SIDEBAR_SHORTCUTS = [
  { name: 'Home', path: '/Users/user', icon: <Home className="w-3.5 h-3.5" /> },
  { name: 'Desktop', path: '/Users/user/Desktop', icon: <Monitor className="w-3.5 h-3.5" /> },
  { name: 'Downloads', path: '/Users/user/Downloads', icon: <Download className="w-3.5 h-3.5" /> },
  { name: 'Documents', path: '/Users/user/Documents', icon: <FileText className="w-3.5 h-3.5" /> },
  { name: 'Music', path: '/Users/user/Music', icon: <Music className="w-3.5 h-3.5" /> },
  { name: 'Pictures', path: '/Users/user/Pictures', icon: <ImageIcon className="w-3.5 h-3.5" /> },
  { name: 'Root', path: '/', icon: <HardDrive className="w-3.5 h-3.5" /> },
];

function getFileIcon(entry: VFSEntry, size = 10): React.ReactNode {
  if (entry.type === 'dir') return <Folder className={`w-${size} h-${size} text-blue-400`} />;
  const ext = entry.name.split('.').pop()?.toLowerCase() ?? '';
  if (['jpg','jpeg','png','gif','webp','svg'].includes(ext)) return <ImageIcon className={`w-${size} h-${size} text-green-400`} />;
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

  const [path, setPath] = useState('/Users/user');
  const [history, setHistory] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<'icon' | 'list'>('icon');

  void windowId;

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
    <AppSplitView
      className="bg-white text-black dark:bg-[#0F1115] dark:text-white"
      sidebarWidthClass="w-40"
      sidebarClassName="overflow-y-auto bg-neutral-100/80 p-2 dark:bg-[#11141B]"
      sidebar={(
        <>
          <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-wider text-black/40 dark:text-white/40">Favourites</p>
          {SIDEBAR_SHORTCUTS.map((s) => (
            <button
              key={s.path}
              onClick={() => navigate(s.path)}
              className={cn(
                'flex w-full items-center gap-2 rounded-md px-2 py-1 text-left text-xs transition-colors',
                path === s.path ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400' : 'hover:bg-black/10 dark:hover:bg-white/10'
              )}
            >
              <span className="text-blue-500">{s.icon}</span>
              {s.name}
            </button>
          ))}
        </>
      )}
      contentClassName="flex min-w-0 flex-col overflow-hidden"
    >
      {({ width }) => {
        const iconColumns =
          width < 360 ? 2 :
          width < 520 ? 3 :
          width < 720 ? 4 : 5;

        return (
          <>
            <div className="flex shrink-0 items-center gap-2 border-b border-black/10 px-3 py-2 dark:border-white/10">
              <button
                onClick={goBack}
                disabled={history.length === 0}
                className="rounded p-1 transition-colors hover:bg-black/10 disabled:opacity-30 dark:hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex flex-1 items-center gap-0.5 overflow-hidden text-xs">
                <button onClick={() => navigate('/')} className="shrink-0 hover:underline">
                  /
                </button>
                {parts.map((part, i) => {
                  const partPath = '/' + parts.slice(0, i + 1).join('/');
                  return (
                    <span key={partPath} className="flex min-w-0 items-center gap-0.5">
                      <ChevronRight className="h-3 w-3 shrink-0 text-black/30 dark:text-white/30" />
                      <button onClick={() => navigate(partPath)} className="truncate hover:underline">{part}</button>
                    </span>
                  );
                })}
              </div>

              <div className="flex">
                <button onClick={() => setView('icon')} className={cn('rounded-l border border-black/15 px-2 py-0.5 text-xs dark:border-white/15', view === 'icon' ? 'border-blue-500 bg-blue-500 text-white' : 'hover:bg-black/5 dark:hover:bg-white/10')}>
                  <Grid3X3 className="h-3.5 w-3.5" />
                </button>
                <button onClick={() => setView('list')} className={cn('rounded-r border border-l-0 border-black/15 px-2 py-0.5 text-xs dark:border-white/15', view === 'list' ? 'border-blue-500 bg-blue-500 text-white' : 'hover:bg-black/5 dark:hover:bg-white/10')}>
                  <List className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-3">
              {entries.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-sm text-black/30 dark:text-white/30">
                  <Folder className="h-12 w-12 opacity-20" />
                  <p>Empty folder</p>
                </div>
              ) : view === 'icon' ? (
                <div
                  className="grid gap-4"
                  style={{ gridTemplateColumns: `repeat(${iconColumns}, minmax(0, 1fr))` }}
                >
                  {entries.map((entry) => (
                    <button
                      key={entry.path}
                      onClick={() => setSelected(entry.path)}
                      onDoubleClick={() => handleDoubleClick(entry)}
                      className={cn(
                        'flex flex-col items-center gap-1.5 rounded-lg p-2 text-center transition-colors',
                        selected === entry.path ? 'bg-blue-500/20' : 'hover:bg-black/5 dark:hover:bg-white/5'
                      )}
                    >
                      {getFileIcon(entry)}
                      <span className="w-full truncate text-xs">{entry.name}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <th className="py-1 text-left font-medium">Name</th>
                      <th className="py-1 text-left font-medium">Kind</th>
                      <th className="py-1 text-right font-medium">Size</th>
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
                        <td className="flex items-center gap-2 py-1.5">
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
          </>
        );
      }}
    </AppSplitView>
  );
}
