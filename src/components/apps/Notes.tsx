'use client';

import { useState, useRef } from 'react';
import { Plus, Trash2, Search } from 'lucide-react';
import { useStore } from '@/store';
import { cn } from '@/lib/utils';
import { MobileSplitView, useMobileSplitBack } from './MobileSplitView';

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

const WELCOME: Note = {
  id: 'welcome',
  title: 'Welcome to Notes',
  body: 'Start writing your thoughts here.\n\nYou can create new notes with the + button, and delete them with the trash icon.',
  modifiedAt: Date.now(),
};

export function Notes() {
  const vfsWriteFile = useStore((s) => s.vfsWriteFile);
  const vfsMkdir = useStore((s) => s.vfsMkdir);
  const vfsRm = useStore((s) => s.vfsRm);

  // Initialise notes from VFS synchronously — avoids setState-in-effect
  const [notes, setNotes] = useState<Note[]>(() => {
    vfsMkdir(NOTES_DIR.slice(0, -1));
    const loaded = deserializeNotes(useStore.getState().vfs);
    if (loaded.length > 0) return loaded.sort((a, b) => b.modifiedAt - a.modifiedAt);
    vfsWriteFile(`${NOTES_DIR}${WELCOME.id}.note`, JSON.stringify(WELCOME), 'application/json');
    return [WELCOME];
  });

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const saveNote = (note: Note) => {
    vfsWriteFile(`${NOTES_DIR}${note.id}.note`, JSON.stringify(note), 'application/json');
  };

  const createNote = () => {
    const note: Note = { id: crypto.randomUUID(), title: 'New Note', body: '', modifiedAt: Date.now() };
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
            placeholder="Search"
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
              note.id === selectedId
                ? 'bg-yellow-400/30 dark:bg-yellow-500/20'
                : 'hover:bg-black/5 dark:hover:bg-white/5'
            )}
          >
            <p className="text-sm font-medium truncate">{note.title || 'Untitled'}</p>
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
          className="w-8 h-8 rounded-lg bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <Plus className="w-4 h-4 text-black" />
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
}

function NoteEditor({ note, bodyRef, onUpdate, onDelete }: NoteEditorProps) {
  const mobileBack = useMobileSplitBack();

  return (
    <div className="flex flex-col h-full bg-[#fdf9ef] dark:bg-[#0F1115] text-black dark:text-white">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-black/10 dark:border-white/10 shrink-0">
        {mobileBack && (
          <button
            onClick={mobileBack}
            className="flex items-center gap-0.5 text-blue-500 active:opacity-60 transition-opacity shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-[14px] font-medium">Notes</span>
          </button>
        )}
        <input
          value={note.title}
          onChange={(e) => onUpdate(note.id, { title: e.target.value })}
          className="flex-1 bg-transparent font-semibold text-base outline-none min-w-0"
          placeholder="Note title"
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
        placeholder="Start writing..."
      />
    </div>
  );
}
