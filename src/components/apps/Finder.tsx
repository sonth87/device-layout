'use client';

import { useState } from 'react';
import { Folder, FileText, Image as ImageIcon, Music, Film, HardDrive, Home, Monitor, Download, ChevronRight, Grid3X3, List, ChevronLeft } from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { useAppLayout } from '@/hooks/useAppLayout';
import { useTranslation } from '@/hooks/useTranslation';
import type { VFSEntry } from '@/store/vfs-slice';
import type { AppContentProps } from './AppRegistry';

const FINDER_LOCALE = {
  en: {
    favourites: 'Favourites',
    emptyFolder: 'Empty folder',
    name: 'Name',
    kind: 'Kind',
    size: 'Size',
    folder: 'Folder',
    file: 'File',
    home: 'Home',
    desktop: 'Desktop',
    downloads: 'Downloads',
    documents: 'Documents',
    music: 'Music',
    pictures: 'Pictures',
    root: 'Root',
  },
  vi: {
    favourites: 'Mục ưa thích',
    emptyFolder: 'Thư mục trống',
    name: 'Tên',
    kind: 'Loại',
    size: 'Kích thước',
    folder: 'Thư mục',
    file: 'Tệp tin',
    home: 'Trang chủ',
    desktop: 'Màn hình chính',
    downloads: 'Tải về',
    documents: 'Tài liệu',
    music: 'Nhạc',
    pictures: 'Hình ảnh',
    root: 'Thư mục gốc',
  },
  ja: {
    favourites: 'よく使う項目',
    emptyFolder: '空のフォルダ',
    name: '名前',
    kind: '種類',
    size: 'サイズ',
    folder: 'フォルダ',
    file: 'ファイル',
    home: 'ホーム',
    desktop: 'デスクトップ',
    downloads: 'ダウンロード',
    documents: '書類',
    music: 'ミュージック',
    pictures: 'ピクチャ',
    root: 'ルート',
  },
  ko: {
    favourites: '즐겨찾기',
    emptyFolder: '빈 폴더',
    name: '이름',
    kind: '종류',
    size: '크기',
    folder: '폴더',
    file: '파일',
    home: '홈',
    desktop: '데스크탑',
    downloads: '다운로드',
    documents: '문서',
    music: '음악',
    pictures: '사진',
    root: '루트',
  },
  zh: {
    favourites: '个人收藏',
    emptyFolder: '空文件夹',
    name: '名称',
    kind: '种类',
    size: '大小',
    folder: '文件夹',
    file: '文件',
    home: '主屋',
    desktop: '桌面',
    downloads: '下载',
    documents: '文稿',
    music: '音乐',
    pictures: '图片',
    root: '根目录',
  },
  th: {
    favourites: 'รายการโปรด',
    emptyFolder: 'โฟลเดอร์ว่างเปล่า',
    name: 'ชื่อ',
    kind: 'ประเภท',
    size: 'ขนาด',
    folder: 'โฟลเดอร์',
    file: 'ไฟล์',
    home: 'หน้าแรก',
    desktop: 'เดสก์ท็อป',
    downloads: 'ดาวน์โหลด',
    documents: 'เอกสาร',
    music: 'เพลง',
    pictures: 'รูปภาพ',
    root: 'รูท',
  },
} as const;

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

export function Finder({ windowId, appId }: AppContentProps) {
  const { language } = useTranslation();
  const t = FINDER_LOCALE[language as keyof typeof FINDER_LOCALE] || FINDER_LOCALE.en;
  void appId;

  const vfsLs = useStore((s) => s.vfsLs);
  void windowId;

  const [path, setPath]       = useState('/Users/user');
  const [history, setHistory] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView]       = useState<'icon' | 'list'>('icon');

  const { isNarrow } = useAppLayout();

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

  const parts = path.split('/').filter(Boolean);

  const sidebarShortcuts = [
    { name: t.home,      path: '/Users/user',           icon: <Home      className="w-3.5 h-3.5" /> },
    { name: t.desktop,   path: '/Users/user/Desktop',   icon: <Monitor   className="w-3.5 h-3.5" /> },
    { name: t.downloads, path: '/Users/user/Downloads', icon: <Download  className="w-3.5 h-3.5" /> },
    { name: t.documents, path: '/Users/user/Documents', icon: <FileText  className="w-3.5 h-3.5" /> },
    { name: t.music,     path: '/Users/user/Music',     icon: <Music     className="w-3.5 h-3.5" /> },
    { name: t.pictures,  path: '/Users/user/Pictures',  icon: <ImageIcon className="w-3.5 h-3.5" /> },
    { name: t.root,      path: '/',                     icon: <HardDrive className="w-3.5 h-3.5" /> },
  ];

  // ── File browser (shared between mobile and desktop content area) ─────────
  const browser = (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F1115] text-black dark:text-white">
      {/* Toolbar */}
      <div className="flex shrink-0 items-center gap-2 border-b border-black/10 dark:border-white/10 px-3 py-2">
        <button
          onClick={goBack}
          disabled={history.length === 0}
          className="rounded p-1 transition-colors hover:bg-black/10 disabled:opacity-30 dark:hover:bg-white/10 shrink-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Breadcrumb — truncates gracefully */}
        <div className="flex flex-1 items-center gap-0.5 overflow-hidden text-xs min-w-0">
          <button onClick={() => navigate('/')} className="shrink-0 hover:underline">/</button>
          {parts.map((part, i) => {
            const partPath = '/' + parts.slice(0, i + 1).join('/');
            return (
              <span key={partPath} className="flex min-w-0 items-center gap-0.5">
                <ChevronRight className="h-3 w-3 shrink-0 text-black/30 dark:text-white/30" />
                <button
                  onClick={() => navigate(partPath)}
                  className={cn('hover:underline', i === parts.length - 1 ? 'font-medium truncate' : 'shrink-0')}
                >
                  {part}
                </button>
              </span>
            );
          })}
        </div>

        {/* View toggle */}
        <div className="flex shrink-0">
          <button onClick={() => setView('icon')} className={cn('rounded-l border border-black/15 dark:border-white/15 px-2 py-0.5 text-xs', view === 'icon' ? 'bg-blue-500 border-blue-500 text-white' : 'hover:bg-black/5 dark:hover:bg-white/10')}>
            <Grid3X3 className="h-3.5 w-3.5" />
          </button>
          <button onClick={() => setView('list')} className={cn('rounded-r border border-l-0 border-black/15 dark:border-white/15 px-2 py-0.5 text-xs', view === 'list' ? 'bg-blue-500 border-blue-500 text-white' : 'hover:bg-black/5 dark:hover:bg-white/10')}>
            <List className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-3">
        {entries.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-sm text-black/30 dark:text-white/30">
            <Folder className="h-12 w-12 opacity-20" />
            <p>{t.emptyFolder}</p>
          </div>
        ) : view === 'icon' ? (
          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))' }}>
            {entries.map((entry) => (
              <button
                key={entry.path}
                onClick={() => { if (entry.type === 'dir') navigate(entry.path); else setSelected(entry.path); }}
                className={cn('flex flex-col items-center gap-1.5 rounded-lg p-2 text-center transition-colors', selected === entry.path ? 'bg-blue-500/20' : 'hover:bg-black/5 dark:hover:bg-white/5')}
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
                <th className="py-1 text-left font-medium text-black/60 dark:text-white/60">{t.name}</th>
                {!isNarrow && <th className="py-1 text-left font-medium text-black/60 dark:text-white/60">{t.kind}</th>}
                <th className="py-1 text-right font-medium text-black/60 dark:text-white/60">{t.size}</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr
                  key={entry.path}
                  onClick={() => { if (entry.type === 'dir') navigate(entry.path); else setSelected(entry.path); }}
                  className={cn('cursor-pointer hover:bg-black/5 dark:hover:bg-white/5', selected === entry.path && 'bg-blue-500/10')}
                >
                  <td className="flex items-center gap-2 py-1.5">
                    <span>{getFileIcon(entry, 4)}</span>
                    <span className="truncate">{entry.name}</span>
                  </td>
                  {!isNarrow && (
                    <td className="py-1.5 text-black/50 dark:text-white/50">{entry.type === 'dir' ? t.folder : t.file}</td>
                  )}
                  <td className="py-1.5 text-right text-black/50 dark:text-white/50">
                    {entry.type === 'file' ? fmtBytes(new TextEncoder().encode(entry.content).byteLength) : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );

  // ── Mobile: single-screen browser (no sidebar) ────────────────────────────
  if (isNarrow) {
    return browser;
  }

  // ── Desktop: sidebar + browser side-by-side ───────────────────────────────
  return (
    <div className="flex h-full bg-white dark:bg-[#0F1115] text-black dark:text-white">
      <aside className="w-40 shrink-0 border-r border-black/10 dark:border-white/10 overflow-y-auto bg-neutral-100/80 dark:bg-[#11141B] p-2">
        <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-wider text-black/40 dark:text-white/40">
          {t.favourites}
        </p>
        {sidebarShortcuts.map((s) => (
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
      </aside>
      <div className="flex-1 min-w-0">
        {browser}
      </div>
    </div>
  );
}
