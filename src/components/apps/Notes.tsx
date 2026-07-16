"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import {
  Plus,
  Folder,
  FolderPlus,
  Trash2,
  Search,
  Pin,
  Menu,
  Columns,
  Zap,
  Users,
  FileText,
  X,
  Share2,
  FolderClosed,
  ChevronRight,
  MoreHorizontal,
  SquarePen,
  ArrowUpDown,
  Calendar,
  Settings
} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useStore } from "@/store";
import { cn } from "@/lib/utils";
import { NotesEditor } from "./notes/NotesEditor";
import type { Folder as FolderType, Note } from "./notes/NotesTypes";

const NOTES_BASE_DIR = "/Users/user/Documents/Notes/";

function stripHtml(html: string) {
  if (typeof window === "undefined") return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

export function Notes() {
  const vfs = useStore((s) => s.vfs);
  const vfsWriteFile = useStore((s) => s.vfsWriteFile);
  const vfsMkdir = useStore((s) => s.vfsMkdir);
  const vfsRm = useStore((s) => s.vfsRm);

  // ── 1. Load folders and notes on mount ──
  const [folders, setFolders] = useState<FolderType[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedFolderId, setSelectedFolderId] = useState<string>("all-notes");
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Folder renaming state
  const [renamingFolderId, setRenamingFolderId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");

  // Initialize VFS folders and notes
  useEffect(() => {
    vfsMkdir(NOTES_BASE_DIR.slice(0, -1));

    // Load folders
    let loadedFolders: FolderType[] = [];
    try {
      const foldersFile = vfs[`${NOTES_BASE_DIR}folders.json`];
      if (foldersFile && foldersFile.type === "file") {
        loadedFolders = JSON.parse(foldersFile.content) as FolderType[];
      }
    } catch (e) {
      console.error("Error parsing folders.json", e);
    }
    if (loadedFolders.length === 0) {
      loadedFolders = [
        { id: "notes", name: "Notes" },
        { id: "work", name: "Work" },
        { id: "personal", name: "Personal" }
      ];
      vfsWriteFile(
        `${NOTES_BASE_DIR}folders.json`,
        JSON.stringify(loadedFolders),
        "application/json"
      );
    }
    setFolders(loadedFolders);

    // Load notes
    let loadedNotes: Note[] = [];
    try {
      loadedNotes = Object.values(vfs)
        .filter(
          (e) =>
            e.type === "file" &&
            e.path.startsWith(NOTES_BASE_DIR) &&
            e.path.endsWith(".note")
        )
        .map((e) => {
          if (e.type !== "file") return null;
          try {
            return JSON.parse(e.content) as Note;
          } catch {
            return null;
          }
        })
        .filter(Boolean) as Note[];
    } catch (e) {
      console.error("Error reading notes from VFS", e);
    }

    if (loadedNotes.length === 0) {
      const welcomeNote: Note = {
        id: "welcome",
        title: "Welcome to Notes",
        body: "<h1>Welcome to Notes</h1><p>Start writing your thoughts here using the premium rich-text editor.</p><p>Create custom folders in the sidebar, pin important notes, and toggle the shared flag.</p>",
        folderId: "notes",
        modifiedAt: Date.now(),
        createdAt: Date.now(),
        isPinned: false,
        isShared: false,
        recentlyDeletedAt: null
      };
      vfsWriteFile(
        `${NOTES_BASE_DIR}${welcomeNote.id}.note`,
        JSON.stringify(welcomeNote),
        "application/json"
      );
      loadedNotes = [welcomeNote];
    }
    setNotes(loadedNotes.sort((a, b) => b.modifiedAt - a.modifiedAt));
  }, []);

  // ── Helper to save folders ──
  const saveFolders = (updatedFolders: FolderType[]) => {
    vfsWriteFile(
      `${NOTES_BASE_DIR}folders.json`,
      JSON.stringify(updatedFolders),
      "application/json"
    );
  };

  // ── Helper to save a single note ──
  const saveNoteFile = (note: Note) => {
    vfsWriteFile(
      `${NOTES_BASE_DIR}${note.id}.note`,
      JSON.stringify(note),
      "application/json"
    );
  };

  // ── Create custom folder ──
  const handleCreateFolder = () => {
    const newFolder: FolderType = {
      id: crypto.randomUUID(),
      name: "New Folder"
    };
    const updated = [...folders, newFolder];
    setFolders(updated);
    saveFolders(updated);
    setRenamingFolderId(newFolder.id);
    setRenameValue(newFolder.name);
  };

  // ── Rename folder ──
  const handleRenameFolderSubmit = (id: string) => {
    if (!renameValue.trim()) return;
    const updated = folders.map((f) =>
      f.id === id ? { ...f, name: renameValue.trim() } : f
    );
    setFolders(updated);
    saveFolders(updated);
    setRenamingFolderId(null);
  };

  // ── Delete folder ──
  const handleDeleteFolder = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    // 1. Remove folder from state and save folders.json
    const updatedFolders = folders.filter((f) => f.id !== id);
    setFolders(updatedFolders);
    saveFolders(updatedFolders);

    // 2. Orphan all notes in this folder (assign to null i.e. 'All Notes')
    const now = Date.now();
    const updatedNotesList = notes.map((n) => {
      if (n.folderId === id) {
        const updatedNote = { ...n, folderId: null, modifiedAt: now };
        saveNoteFile(updatedNote);
        return updatedNote;
      }
      return n;
    });
    setNotes(updatedNotesList);

    if (selectedFolderId === id) {
      setSelectedFolderId("all-notes");
    }
  };

  // ── Create new note ──
  const handleCreateNote = () => {
    // If selected Recently Deleted, don't allow note creation
    if (selectedFolderId === "recently-deleted") return;

    let targetFolderId: string | null = null;
    let isQuickNote = false;
    let isSharedNote = false;

    if (selectedFolderId === "quick-notes") {
      targetFolderId = "quick-notes";
      isQuickNote = true;
    } else if (selectedFolderId === "shared") {
      isSharedNote = true;
    } else if (selectedFolderId !== "all-notes") {
      targetFolderId = selectedFolderId;
    }

    const newNote: Note = {
      id: crypto.randomUUID(),
      title: "New Note",
      body: "",
      folderId: targetFolderId,
      modifiedAt: Date.now(),
      createdAt: Date.now(),
      isPinned: false,
      isShared: isSharedNote,
      recentlyDeletedAt: null
    };

    saveNoteFile(newNote);
    setNotes((prev) => [newNote, ...prev]);
    setSelectedNoteId(newNote.id);
  };

  // ── Update Note ──
  const handleUpdateNote = (id: string, patch: Partial<Note>) => {
    const existing = notes.find((n) => n.id === id);
    if (!existing) return;
    const updated = { ...existing, ...patch, modifiedAt: Date.now() };
    saveNoteFile(updated);
    setNotes((prev) => prev.map((n) => (n.id === id ? updated : n)));
  };

  // ── Soft Delete Note ──
  const handleDeleteNote = (id: string) => {
    const existing = notes.find((n) => n.id === id);
    if (!existing) return;
    const updated = { ...existing, recentlyDeletedAt: Date.now(), isPinned: false };
    saveNoteFile(updated);
    setNotes((prev) => prev.map((n) => (n.id === id ? updated : n)));
    if (selectedNoteId === id) setSelectedNoteId(null);
  };

  // ── Restore Note from Trash ──
  const handleRestoreNote = (id: string) => {
    const existing = notes.find((n) => n.id === id);
    if (!existing) return;
    const updated = { ...existing, recentlyDeletedAt: null, modifiedAt: Date.now() };
    saveNoteFile(updated);
    setNotes((prev) => prev.map((n) => (n.id === id ? updated : n)));
    if (selectedNoteId === id) setSelectedNoteId(null);
  };

  // ── Delete Permanently ──
  const handleDeletePermanently = (id: string) => {
    vfsRm(`${NOTES_BASE_DIR}${id}.note`);
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (selectedNoteId === id) setSelectedNoteId(null);
  };

  // ── Empty Trash (Recently Deleted) ──
  const handleEmptyTrash = () => {
    const deletedNotes = notes.filter((n) => n.recentlyDeletedAt !== null);
    deletedNotes.forEach((n) => {
      vfsRm(`${NOTES_BASE_DIR}${n.id}.note`);
    });
    setNotes((prev) => prev.filter((n) => n.recentlyDeletedAt === null));
    setSelectedNoteId(null);
  };

  // ── Folder Count Selectors ──
  const getFolderNoteCount = (folderId: string) => {
    if (folderId === "quick-notes") {
      return notes.filter((n) => n.folderId === "quick-notes" && n.recentlyDeletedAt === null).length;
    }
    if (folderId === "shared") {
      return notes.filter((n) => n.isShared && n.recentlyDeletedAt === null).length;
    }
    if (folderId === "all-notes") {
      return notes.filter((n) => n.folderId === null && n.recentlyDeletedAt === null).length;
    }
    if (folderId === "recently-deleted") {
      return notes.filter((n) => n.recentlyDeletedAt !== null).length;
    }
    return notes.filter((n) => n.folderId === folderId && n.recentlyDeletedAt === null).length;
  };

  // ── Filtered and Active notes for current folder ──
  const folderNotes = useMemo(() => {
    let list = notes;
    if (selectedFolderId === "recently-deleted") {
      list = notes.filter((n) => n.recentlyDeletedAt !== null);
    } else {
      list = notes.filter((n) => n.recentlyDeletedAt === null);
      if (selectedFolderId === "quick-notes") {
        list = list.filter((n) => n.folderId === "quick-notes");
      } else if (selectedFolderId === "shared") {
        list = list.filter((n) => n.isShared);
      } else if (selectedFolderId === "all-notes") {
        list = list.filter((n) => n.folderId === null);
      } else {
        list = list.filter((n) => n.folderId === selectedFolderId);
      }
    }

    // Search query filter
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          stripHtml(n.body).toLowerCase().includes(q)
      );
    }

    return list;
  }, [notes, selectedFolderId, search]);

  const activeFolderName = useMemo(() => {
    if (selectedFolderId === "all-notes") return "All Notes";
    if (selectedFolderId === "quick-notes") return "Quick Notes";
    if (selectedFolderId === "shared") return "Shared";
    if (selectedFolderId === "recently-deleted") return "Recently Deleted";
    return folders.find((f) => f.id === selectedFolderId)?.name ?? "Notes";
  }, [selectedFolderId, folders]);

  // Group notes into sections: Pinned, Today, Previous 7 Days, Earlier
  const groupedNotes = useMemo(() => {
    const pinned = folderNotes.filter((n) => n.isPinned);
    const unpinned = folderNotes.filter((n) => !n.isPinned);

    const today: Note[] = [];
    const week: Note[] = [];
    const earlier: Note[] = [];

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const startOfWeek = startOfToday - 7 * 24 * 60 * 60 * 1000;

    unpinned.forEach((n) => {
      if (n.modifiedAt >= startOfToday) {
        today.push(n);
      } else if (n.modifiedAt >= startOfWeek) {
        week.push(n);
      } else {
        earlier.push(n);
      }
    });

    return {
      pinned,
      today,
      week,
      earlier
    };
  }, [folderNotes]);

  const selectedNote = notes.find((n) => n.id === selectedNoteId) ?? null;

  return (
    <div className="flex h-full select-none text-neutral-800 dark:text-neutral-100 font-sans">
      {/* ── 1. Left Folders Sidebar ── */}
      {isSidebarOpen && (
        <div className="w-60 h-full border-r border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-xl flex flex-col shrink-0">
          {/* Header Action Tools */}
          <div className="flex items-center justify-between px-3 py-2 shrink-0 border-b border-neutral-200/20 dark:border-neutral-800/20">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-neutral-500 dark:text-neutral-400"
              title="Hide Sidebar"
            >
              <Columns className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={handleCreateFolder}
              className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-neutral-500 dark:text-neutral-400"
              title="New Folder"
            >
              <FolderPlus className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Folder List Scroll Area */}
          <div className="flex-1 overflow-y-auto p-2 space-y-4">
            {/* System Shortcuts */}
            <div className="space-y-0.5">
              <button
                onClick={() => {
                  setSelectedFolderId("quick-notes");
                  setSelectedNoteId(null);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left text-xs font-medium transition-colors",
                  selectedFolderId === "quick-notes"
                    ? "bg-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold"
                    : "hover:bg-black/5 dark:hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Quick Notes</span>
                </div>
                <span className="text-[10px] opacity-60">
                  {getFolderNoteCount("quick-notes")}
                </span>
              </button>

              <button
                onClick={() => {
                  setSelectedFolderId("shared");
                  setSelectedNoteId(null);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left text-xs font-medium transition-colors",
                  selectedFolderId === "shared"
                    ? "bg-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold"
                    : "hover:bg-black/5 dark:hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5" />
                  <span>Shared</span>
                </div>
                <span className="text-[10px] opacity-60">
                  {getFolderNoteCount("shared")}
                </span>
              </button>

              <button
                onClick={() => {
                  setSelectedFolderId("all-notes");
                  setSelectedNoteId(null);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left text-xs font-medium transition-colors",
                  selectedFolderId === "all-notes"
                    ? "bg-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold"
                    : "hover:bg-black/5 dark:hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" />
                  <span>All Notes</span>
                </div>
                <span className="text-[10px] opacity-60">
                  {getFolderNoteCount("all-notes")}
                </span>
              </button>
            </div>

            {/* Custom Folders Section */}
            <div>
              <div className="px-2.5 mb-1 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                Folders
              </div>
              <div className="space-y-0.5">
                {folders.map((folder) => {
                  const isRenaming = renamingFolderId === folder.id;
                  const count = getFolderNoteCount(folder.id);

                  return (
                    <div
                      key={folder.id}
                      onClick={() => {
                        if (!isRenaming) {
                          setSelectedFolderId(folder.id);
                          setSelectedNoteId(null);
                        }
                      }}
                      onDoubleClick={() => {
                        setRenamingFolderId(folder.id);
                        setRenameValue(folder.name);
                      }}
                      style={
                        selectedFolderId === folder.id
                          ? { backgroundColor: "var(--accent-color, #e03178)", color: "white" }
                          : undefined
                      }
                      className={cn(
                        "group w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left text-xs font-medium cursor-pointer transition-colors relative",
                        selectedFolderId !== folder.id && "hover:bg-black/5 dark:hover:bg-white/5"
                      )}
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <Folder className="w-3.5 h-3.5 shrink-0" />
                        {isRenaming ? (
                          <input
                            type="text"
                            value={renameValue}
                            onChange={(e) => setRenameValue(e.target.value)}
                            onBlur={() => handleRenameFolderSubmit(folder.id)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleRenameFolderSubmit(folder.id);
                              if (e.key === "Escape") setRenamingFolderId(null);
                            }}
                            autoFocus
                            className="bg-white dark:bg-neutral-800 border border-amber-500 px-1 py-0.5 rounded outline-none w-full text-xs font-normal text-black dark:text-white"
                            onClick={(e) => e.stopPropagation()}
                          />
                        ) : (
                          <span className="truncate">{folder.name}</span>
                        )}
                      </div>

                      {!isRenaming && (
                        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                          <DropdownMenu.Root modal={false}>
                            <DropdownMenu.Trigger asChild>
                              <button
                                className={cn(
                                  "items-center justify-center w-4 h-4 rounded-full transition-colors",
                                  selectedFolderId === folder.id
                                    ? "hover:bg-white/20 text-white"
                                    : "hover:bg-black/10 dark:hover:bg-white/10 text-neutral-500 dark:text-neutral-400",
                                  selectedFolderId === folder.id
                                    ? "flex"
                                    : "hidden group-hover:flex data-[state=open]:flex"
                                )}
                                title="Folder Actions"
                              >
                                <MoreHorizontal className="w-3 h-3" />
                              </button>
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Portal>
                              <DropdownMenu.Content
                                align="end"
                                sideOffset={4}
                                className="w-52 bg-white/95 dark:bg-[#1f232b]/95 backdrop-blur-xl border border-neutral-200/60 dark:border-neutral-800/80 rounded-xl shadow-xl py-1 text-neutral-800 dark:text-neutral-200 select-none text-xs z-[9999]"
                              >
                                <DropdownMenu.Item
                                  onClick={() => {
                                    setRenamingFolderId(folder.id);
                                    setRenameValue(folder.name);
                                  }}
                                  className="w-full px-3 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 outline-none cursor-pointer"
                                >
                                  <SquarePen className="w-3.5 h-3.5" />
                                  Rename Folder
                                </DropdownMenu.Item>
                                <DropdownMenu.Item
                                  onClick={(e) => {
                                    handleDeleteFolder(e, folder.id);
                                  }}
                                  className="w-full px-3 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 text-red-500 font-semibold outline-none cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5 text-red-500" />
                                  Delete Folder
                                </DropdownMenu.Item>

                                <DropdownMenu.Separator className="h-px bg-neutral-200/40 dark:bg-neutral-800/60 my-1" />

                                <DropdownMenu.Item
                                  onClick={() => {
                                    handleCreateFolder();
                                  }}
                                  className="w-full px-3 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 outline-none cursor-pointer"
                                >
                                  <FolderPlus className="w-3.5 h-3.5" />
                                  New Folder
                                </DropdownMenu.Item>
                                <DropdownMenu.Item
                                  onClick={() => {
                                    alert(`Sharing folder: ${folder.name}`);
                                  }}
                                  className="w-full px-3 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 outline-none cursor-pointer"
                                >
                                  <Share2 className="w-3.5 h-3.5" />
                                  Share Folder
                                </DropdownMenu.Item>

                                <DropdownMenu.Separator className="h-px bg-neutral-200/40 dark:bg-neutral-800/60 my-1" />

                                <DropdownMenu.Item className="w-full px-3 py-1.5 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer outline-none">
                                  <div className="flex items-center gap-2">
                                    <ArrowUpDown className="w-3.5 h-3.5" />
                                    <span>Sort By</span>
                                  </div>
                                  <ChevronRight className="w-3 h-3 opacity-60" />
                                </DropdownMenu.Item>

                                <DropdownMenu.Item className="w-full px-3 py-1.5 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer outline-none">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>Group By Date</span>
                                  </div>
                                  <ChevronRight className="w-3 h-3 opacity-60" />
                                </DropdownMenu.Item>

                                <DropdownMenu.Separator className="h-px bg-neutral-200/40 dark:bg-neutral-800/60 my-1" />

                                <DropdownMenu.Item className="w-full px-3 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 outline-none cursor-pointer">
                                  <Settings className="w-3.5 h-3.5" />
                                  Convert to Smart Folder
                                </DropdownMenu.Item>
                              </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                          </DropdownMenu.Root>
                          <span
                            className={cn(
                              "text-[10px]",
                              selectedFolderId === folder.id ? "text-white/80" : "opacity-60"
                            )}
                          >
                            {count}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Sidebar section: Recently Deleted */}
          <div className="p-2 border-t border-neutral-200/20 dark:border-neutral-800/20 shrink-0">
            <button
              onClick={() => {
                setSelectedFolderId("recently-deleted");
                setSelectedNoteId(null);
              }}
              className={cn(
                "w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left text-xs font-medium transition-colors",
                selectedFolderId === "recently-deleted"
                  ? "bg-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold"
                  : "hover:bg-black/5 dark:hover:bg-white/5"
              )}
            >
              <div className="flex items-center gap-2">
                <Trash2 className="w-3.5 h-3.5" />
                <span>Recently Deleted</span>
              </div>
              <span className="text-[10px] opacity-60">
                {getFolderNoteCount("recently-deleted")}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* ── 2. Right Panels (Grid Dashboard or Note Editor) ── */}
      <div className="flex-1 h-full bg-[#fdf9ef] dark:bg-[#11141b] overflow-hidden flex flex-col relative">
        {selectedNote ? (
          // Case 2: Editor View
          <NotesEditor
            note={selectedNote}
            folderName={activeFolderName}
            noteCount={folderNotes.length}
            onBack={() => setSelectedNoteId(null)}
            onUpdate={handleUpdateNote}
            onShareToggle={(id) => handleUpdateNote(id, { isShared: !selectedNote.isShared })}
            onPinToggle={(id) => handleUpdateNote(id, { isPinned: !selectedNote.isPinned })}
            onDelete={handleDeleteNote}
            onRestore={handleRestoreNote}
            onDeletePermanently={handleDeletePermanently}
            onCreateNoteInFolder={handleCreateNote}
          />
        ) : (
          // Case 1: Grid Dashboard View
          <div className="flex flex-col h-full">
            {/* Header / Actions toolbar */}
            <div className="flex items-center justify-between px-6 py-2.5 border-b border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-md select-none shrink-0 z-10">
              {/* Left Title */}
              <div className="flex items-center gap-3">
                {!isSidebarOpen && (
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 text-neutral-500 dark:text-neutral-400 shrink-0"
                    title="Show Sidebar"
                  >
                    <Columns className="w-4.5 h-4.5" />
                  </button>
                )}
                <div>
                  <h1 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 leading-none">
                    {activeFolderName}
                  </h1>
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                    {folderNotes.length} {folderNotes.length === 1 ? "note" : "notes"}
                  </span>
                </div>
              </div>

              {/* Center / Right controls */}
              <div className="flex items-center gap-2">
                {/* Empty Trash Button (Recently Deleted only) */}
                {selectedFolderId === "recently-deleted" && folderNotes.length > 0 && (
                  <button
                    onClick={handleEmptyTrash}
                    className="text-xs px-2.5 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-semibold rounded-md transition-colors"
                  >
                    Empty Trash
                  </button>
                )}

                {/* Create note (Disabled in Recently Deleted) */}
                {selectedFolderId !== "recently-deleted" && (
                  <button
                    onClick={handleCreateNote}
                    className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-300 transition-colors"
                    title="New Note"
                  >
                    <SquarePen className="w-4.5 h-4.5" />
                  </button>
                )}

                {/* Search */}
                <div className="relative flex items-center bg-black/5 dark:bg-white/10 rounded-md px-2 py-1 w-44">
                  <Search className="w-3.5 h-3.5 text-neutral-400 shrink-0 mr-1.5" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="bg-transparent text-xs outline-none border-none p-0 focus:ring-0 w-full placeholder:text-neutral-400/80"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-neutral-400"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Grid List View Panel */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Recently Deleted banner message */}
              {selectedFolderId === "recently-deleted" && (
                <div className="bg-amber-500/10 border border-amber-500/25 rounded-lg p-3 text-xs text-amber-700 dark:text-amber-400">
                  Notes inside Recently Deleted are archived and will be permanently destroyed. Restoring a note recovers it to its parent folder.
                </div>
              )}

              {folderNotes.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-neutral-400 select-none">
                  <FolderClosed className="w-10 h-10 stroke-[1.2] mb-2 opacity-55" />
                  <p className="text-xs">No Notes Found</p>
                </div>
              ) : (
                <>
                  {/* ── Section: Pinned Notes ── */}
                  {groupedNotes.pinned.length > 0 && (
                    <div>
                      <h2 className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5 flex items-center gap-1">
                        <Pin className="w-3 h-3 rotate-45" /> Pinned
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {groupedNotes.pinned.map((n) => (
                          <NoteCard
                            key={n.id}
                            note={n}
                            folders={folders}
                            onClick={() => setSelectedNoteId(n.id)}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Section: Today ── */}
                  {groupedNotes.today.length > 0 && (
                    <div>
                      <h2 className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">
                        Today
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {groupedNotes.today.map((n) => (
                          <NoteCard
                            key={n.id}
                            note={n}
                            folders={folders}
                            onClick={() => setSelectedNoteId(n.id)}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Section: Previous 7 Days ── */}
                  {groupedNotes.week.length > 0 && (
                    <div>
                      <h2 className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">
                        Previous 7 Days
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {groupedNotes.week.map((n) => (
                          <NoteCard
                            key={n.id}
                            note={n}
                            folders={folders}
                            onClick={() => setSelectedNoteId(n.id)}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Section: Earlier ── */}
                  {groupedNotes.earlier.length > 0 && (
                    <div>
                      <h2 className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">
                        Earlier
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {groupedNotes.earlier.map((n) => (
                          <NoteCard
                            key={n.id}
                            note={n}
                            folders={folders}
                            onClick={() => setSelectedNoteId(n.id)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── NoteCard Component ──
interface NoteCardProps {
  note: Note;
  folders: FolderType[];
  onClick: () => void;
}

function NoteCard({ note, folders, onClick }: NoteCardProps) {
  const plainTextSnippet = useMemo(() => {
    return stripHtml(note.body);
  }, [note.body]);

  const folderName = useMemo(() => {
    if (note.folderId === null) return "All Notes";
    if (note.folderId === "quick-notes") return "Quick Notes";
    return folders.find((f) => f.id === note.folderId)?.name ?? "Notes";
  }, [note.folderId, folders]);

  const displayTime = new Date(note.modifiedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "2-digit"
  });

  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-1.5 cursor-pointer select-none group"
    >
      {/* Paper box preview */}
      <div className="w-full h-28 rounded-xl bg-white dark:bg-[#1a1c24] border border-neutral-200/70 dark:border-neutral-800/80 p-3 shadow-sm hover:shadow-md hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all relative flex flex-col overflow-hidden">
        {/* Pinned / Shared badge indicators */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
          {note.isPinned && (
            <span className="p-0.5 rounded-full bg-amber-500/10 text-amber-500">
              <Pin className="w-3 h-3 rotate-45" />
            </span>
          )}
          {note.isShared && (
            <span className="p-0.5 rounded-full bg-blue-500/10 text-blue-500">
              <Share2 className="w-3 h-3" />
            </span>
          )}
        </div>

        {/* Paper texture/lines styling preview */}
        <div className="flex-1 flex flex-col min-w-0 pr-6">
          <span className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 truncate leading-none mb-1">
            {note.title || "Untitled Note"}
          </span>
          <span className="text-[9px] text-neutral-400/80 dark:text-neutral-500 font-semibold mb-1.5 select-none leading-none">
            {displayTime}
          </span>
          <p className="text-[8px] leading-relaxed text-neutral-400 dark:text-neutral-500 overflow-hidden line-clamp-4 select-none pr-1">
            {plainTextSnippet || "No additional text"}
          </p>
        </div>
      </div>

      {/* Note Description below card */}
      <div className="px-1 flex flex-col gap-0.5 leading-none">
        <span className="text-xs font-semibold truncate text-neutral-900 dark:text-neutral-100 group-hover:text-amber-500 transition-colors">
          {note.title || "Untitled Note"}
        </span>
        <div className="flex items-center justify-between text-[9px] text-neutral-400 dark:text-neutral-500">
          <span>{displayTime}</span>
          <span className="flex items-center gap-0.5 font-medium truncate max-w-[90px]">
            <FolderClosed className="w-2.5 h-2.5" />
            {folderName}
          </span>
        </div>
      </div>
    </div>
  );
}
