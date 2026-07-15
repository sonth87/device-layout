'use client';

import { useState, useRef } from 'react';
import { Plus, Trash2, Search } from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { MobileSplitView, useMobileSplitBack, useSplitViewSelection } from './MobileSplitView';
import { useAppTranslation } from '@/hooks/useAppTranslation';

interface Note {
  id: string;
  title: string;
  body: string;
  modifiedAt: number;
}

const NOTES_DIR = '/Users/user/Documents/Notes/';

function deserializeNotes(vfs: ReturnType<typeof useStore.getState>['vfs']): Note[] {
  return Object.values(vfs)
    .filter((e) => e.type === 'file' && e.path.startsWith(NOTES_DIR) && e.path.endsWith('.note'))
    .map((e) => {
      if (e.type !== 'file') return null;
      try { return JSON.parse(e.content) as Note; }
      catch { return null; }
    })
    .filter(Boolean) as Note[];
}

// WELCOME note is static — defined below in the Notes component using nt (app translation)

// App-level locale — independent from system language setting UI.
// This locale is also declared in apps.config.ts for doc purposes.
const NOTES_LOCALE = {
  en: { search: 'Search', newNote: 'New Note', untitled: 'Untitled', startWriting: 'Start writing...', noteTitlePlaceholder: 'Note title', backLabel: 'Notes', welcomeTitle: 'Welcome to Notes', welcomeBody: 'Start writing your thoughts here.\n\nYou can create new notes with the + button, and delete them with the trash icon.' },
  vi: { search: 'Tìm kiếm', newNote: 'Ghi chú mới', untitled: 'Chưa đặt tiêu đề', startWriting: 'Bắt đầu viết...', noteTitlePlaceholder: 'Tiêu đề ghi chú', backLabel: 'Ghi chú', welcomeTitle: 'Chào mừng đến Ghi chú', welcomeBody: 'Bắt đầu viết suy nghĩ của bạn ở đây.\n\nBạn có thể tạo ghi chú mới bằng nút + và xóa chúng bằng biểu tượng thùng rác.' },
  ja: { search: '検索', newNote: '新規メモ', untitled: '無題', startWriting: '書き始める...', noteTitlePlaceholder: 'メモのタイトル', backLabel: 'メモ', welcomeTitle: 'メモへようこそ', welcomeBody: 'ここに考えを書き始めましょう。\n\n+ボタンで新しいメモを作成し、ゴミ箱アイコンで削除できます。' },
  ko: { search: '검색', newNote: '새 메모', untitled: '제목 없음', startWriting: '글쓰기 시작...', noteTitlePlaceholder: '메모 제목', backLabel: '메모', welcomeTitle: '메모에 오신 것을 환영합니다', welcomeBody: '여기에 생각을 적어보세요.\n\n+ 버튼으로 새 메모를 만들고 휴지통 아이콘으로 삭제할 수 있습니다.' },
  zh: { search: '搜索', newNote: '新建备忘录', untitled: '无标题', startWriting: '开始写作...', noteTitlePlaceholder: '备忘录标题', backLabel: '备忘录', welcomeTitle: '欢迎使用备忘录', welcomeBody: '在这里开始写下您的想法。\n\n您可以使用 + 按钮创建新备忘录，使用垃圾桶图标删除它们。' },
  th: { search: 'ค้นหา', newNote: 'บันทึกใหม่', untitled: 'ไม่มีชื่อ', startWriting: 'เริ่มเขียน...', noteTitlePlaceholder: 'ชื่อบันทึก', backLabel: 'บันทึก', welcomeTitle: 'ยินดีต้อนรับสู่บันทึก', welcomeBody: 'เริ่มเขียนความคิดของคุณที่นี่\n\nคุณสามารถสร้างบันทึกใหม่ด้วยปุ่ม + และลบด้วยไอคอนถังขยะ' },
} as const;

export function Notes() {
  const { t: nt } = useAppTranslation('notes', NOTES_LOCALE);
  const vfsWriteFile = useStore((s) => s.vfsWriteFile);
  const vfsMkdir = useStore((s) => s.vfsMkdir);
  const vfsRm = useStore((s) => s.vfsRm);

  // Initialise notes from VFS synchronously — avoids setState-in-effect
  const [notes, setNotes] = useState<Note[]>(() => {
    vfsMkdir(NOTES_DIR.slice(0, -1));
    const loaded = deserializeNotes(useStore.getState().vfs);
    if (loaded.length > 0) return loaded.sort((a, b) => b.modifiedAt - a.modifiedAt);
    const welcome: Note = { id: 'welcome', title: nt.welcomeTitle, body: nt.welcomeBody, modifiedAt: Date.now() };
    vfsWriteFile(`${NOTES_DIR}${welcome.id}.note`, JSON.stringify(welcome), 'application/json');
    return [welcome];
  });

  const [selectedId, setSelectedId] = useSplitViewSelection<string>(notes[0]?.id ?? null);
  const [search, setSearch] = useState('');
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const saveNote = (note: Note) => {
    vfsWriteFile(`${NOTES_DIR}${note.id}.note`, JSON.stringify(note), 'application/json');
  };

  const createNote = () => {
    const note: Note = { id: crypto.randomUUID(), title: nt.newNote, body: '', modifiedAt: Date.now() };
    saveNote(note);
    setNotes((prev) => [note, ...prev]);
    setSelectedId(note.id);
    setTimeout(() => bodyRef.current?.focus(), 50);
  };

  const deleteNote = (id: string) => {
    vfsRm(`${NOTES_DIR}${id}.note`);
    setNotes((prev) => {
      const next = prev.filter((n) => n.id !== id);
      if (selectedId === id) setSelectedId(next[0]?.id ?? null);
      return next;
    });
  };

  const updateNote = (id: string, patch: Partial<Pick<Note, 'title' | 'body'>>) => {
    setNotes((prev) => prev.map((n) => {
      if (n.id !== id) return n;
      const updated = { ...n, ...patch, modifiedAt: Date.now() };
      saveNote(updated);
      return updated;
    }));
  };

  const selected = notes.find((n) => n.id === selectedId) ?? null;
  const filtered = notes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.body.toLowerCase().includes(search.toLowerCase())
  );

  const listPanel = (
    <div className="flex flex-col h-full bg-[#fdf9ef] dark:bg-[#0F1115] text-black dark:text-white">
      {/* Search */}
      <div className="p-2 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-1.5 px-2 py-1.5 bg-black/5 dark:bg-white/10 rounded-lg">
          <Search className="w-3 h-3 text-black/40 dark:text-white/40 shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={nt.search}
            className="flex-1 bg-transparent text-xs outline-none placeholder:text-black/30 dark:placeholder:text-white/30"
          />
        </div>
      </div>

      {/* Notes list */}
      <div className="flex-1 overflow-y-auto">
        {filtered.map((note) => (
          <button
            key={note.id}
            onClick={() => setSelectedId(note.id)}
            className={cn(
              'w-full text-left px-3 py-2.5 border-b border-black/5 dark:border-white/5 transition-colors',
              note.id !== selectedId && 'hover:bg-black/5 dark:hover:bg-white/5'
            )}
            style={note.id === selectedId ? { backgroundColor: 'var(--highlight-color)' } : undefined}
          >
            <p className="text-sm font-medium text-black/90 dark:text-white/90 truncate">{note.title || nt.untitled}</p>
            <p className="text-[11px] text-black/40 dark:text-white/40 mt-0.5">
              {new Date(note.modifiedAt).toLocaleDateString()}
            </p>
          </button>
        ))}
      </div>

      {/* Add note */}
      <div className="p-2 border-t border-black/10 dark:border-white/10 flex justify-end">
        <button
          onClick={createNote}
          className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity text-white"
          style={{ backgroundColor: 'var(--accent-color)' }}
        >
          <Plus className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );

  const editorPanel = selected ? (
    <NoteEditor
      note={selected}
      bodyRef={bodyRef}
      onUpdate={updateNote}
      onDelete={deleteNote}
      t={nt}
    />
  ) : null;

  return (
    <MobileSplitView
      list={listPanel}
      detail={editorPanel}
      onBack={() => setSelectedId(null)}
      detailTitle={selected?.title}
      className="bg-[#fdf9ef] dark:bg-[#0F1115]"
      sidebarWidth="w-56"
    />
  );
}

interface NoteEditorProps {
  note: { id: string; title: string; body: string };
  bodyRef: React.RefObject<HTMLTextAreaElement | null>;
  onUpdate: (id: string, patch: { title?: string; body?: string }) => void;
  onDelete: (id: string) => void;
  t: { backLabel: string; noteTitlePlaceholder: string; startWriting: string };
}

function NoteEditor({ note, bodyRef, onUpdate, onDelete, t }: NoteEditorProps) {
  const mobileBack = useMobileSplitBack();

  return (
    <div className="flex flex-col h-full bg-[#fdf9ef] dark:bg-[#0F1115] text-black dark:text-white">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 shrink-0">
        {mobileBack && (
          <button
            onClick={mobileBack}
            className="flex items-center gap-0.5 text-accent-active active:opacity-60 transition-opacity shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-[14px] font-medium">{t.backLabel}</span>
          </button>
        )}
        <input
          value={note.title}
          onChange={(e) => onUpdate(note.id, { title: e.target.value })}
          className="flex-1 bg-transparent font-semibold text-base outline-none min-w-0"
          placeholder={t.noteTitlePlaceholder}
        />
        <button
          onClick={() => onDelete(note.id)}
          className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-red-500/10 text-black/40 dark:text-white/40 hover:text-red-500 transition-colors shrink-0"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
      <textarea
        ref={bodyRef}
        value={note.body}
        onChange={(e) => onUpdate(note.id, { body: e.target.value })}
        className="flex-1 p-4 bg-transparent resize-none outline-none text-sm leading-relaxed font-mono placeholder:text-black/20 dark:placeholder:text-white/20"
        placeholder={t.startWriting}
      />
    </div>
  );
}
