"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TaskList } from "@tiptap/extension-task-list";
import { TaskItem } from "@tiptap/extension-task-item";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";
import {
  ChevronLeft,
  SquarePen,
  Type,
  ListTodo,
  Table as TableIcon,
  Paperclip,
  Share2,
  MoreHorizontal,
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Pin,
  Trash2,
  RotateCcw
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Note } from "./NotesTypes";

interface NotesEditorProps {
  note: Note;
  folderName: string;
  noteCount: number;
  onUpdate: (id: string, patch: Partial<Note>) => void;
  onBack: () => void;
  onShareToggle: (id: string) => void;
  onPinToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onRestore?: (id: string) => void;
  onDeletePermanently?: (id: string) => void;
  onCreateNoteInFolder: () => void;
}

export function NotesEditor({
  note,
  folderName,
  noteCount,
  onUpdate,
  onBack,
  onShareToggle,
  onPinToggle,
  onDelete,
  onRestore,
  onDeletePermanently,
  onCreateNoteInFolder
}: NotesEditorProps) {
  const [showFormatBar, setShowFormatBar] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const editor = useEditor(
    {
      extensions: [
        StarterKit,
        Underline,
        Placeholder.configure({
          placeholder: "Start writing...",
          emptyEditorClass: "is-editor-empty"
        }),
        TaskList,
        TaskItem.configure({
          nested: true
        }),
        Table.configure({
          resizable: true
        }),
        TableRow,
        TableHeader,
        TableCell
      ],
      content: note.body,
      onUpdate: ({ editor }) => {
        onUpdate(note.id, { body: editor.getHTML() });
      }
    },
    [note.id]
  );

  // Sync content when active note ID changes
  useEffect(() => {
    if (editor && editor.getHTML() !== note.body) {
      editor.commands.setContent(note.body, { emitUpdate: false });
    }
  }, [note.id, editor]);

  if (!editor) return null;

  const formattedDate = new Date(note.modifiedAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  return (
    <div className="flex flex-col h-full bg-[#fdf9ef] dark:bg-[#11141b] text-neutral-900 dark:text-neutral-100 relative">
      {/* Local Styles for TipTap ProseMirror content */}
      <style jsx global>{`
        .ProseMirror {
          outline: none;
          min-height: 200px;
          height: 100%;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: rgba(0, 0, 0, 0.25);
          pointer-events: none;
          height: 0;
        }
        .dark .ProseMirror p.is-editor-empty:first-child::before {
          color: rgba(255, 255, 255, 0.25);
        }
        .ProseMirror ul[data-type="taskList"] {
          list-style: none;
          padding: 0;
        }
        .ProseMirror ul[data-type="taskList"] li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }
        .ProseMirror ul[data-type="taskList"] input[type="checkbox"] {
          margin-top: 0.25rem;
          cursor: pointer;
        }
        .ProseMirror ul[data-type="taskList"] li[data-checked="true"] > div {
          text-decoration: line-through;
          opacity: 0.5;
        }
        .ProseMirror table {
          border-collapse: collapse;
          table-layout: fixed;
          width: 100%;
          margin: 0;
          overflow: hidden;
        }
        .ProseMirror td,
        .ProseMirror th {
          min-width: 1em;
          border: 1px solid rgba(0, 0, 0, 0.15);
          padding: 3px 5px;
          vertical-align: top;
          box-sizing: border-box;
          position: relative;
        }
        .dark .ProseMirror td,
        .dark .ProseMirror th {
          border-color: rgba(255, 255, 255, 0.15);
        }
        .ProseMirror th {
          font-weight: bold;
          text-align: left;
          background-color: rgba(0, 0, 0, 0.05);
        }
        .dark .ProseMirror th {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .ProseMirror ul:not([data-type="taskList"]) {
          list-style-type: disc;
          padding-left: 1.25rem;
        }
        .ProseMirror ol {
          list-style-type: decimal;
          padding-left: 1.25rem;
        }
      `}</style>

      {/* Toolbar / Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 select-none shrink-0 z-10">
        {/* Left: Back button with Folder & count */}
        <button
          onClick={onBack}
          className="flex items-center gap-1 hover:bg-black/5 dark:hover:bg-white/5 px-2 py-1 rounded-md transition-colors text-left"
        >
          <ChevronLeft className="w-5 h-5 text-amber-500" />
          <div>
            <div className="text-xs font-semibold text-amber-500 leading-tight">
              {folderName}
            </div>
            <div className="text-[10px] text-neutral-400 dark:text-neutral-500 leading-none">
              {noteCount} {noteCount === 1 ? "note" : "notes"}
            </div>
          </div>
        </button>

        {/* Center/Right: Action Tools */}
        <div className="flex items-center gap-1">
          {/* New note */}
          <button
            onClick={onCreateNoteInFolder}
            className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-300 transition-colors"
            title="New Note"
          >
            <SquarePen className="w-4.5 h-4.5" />
          </button>

          {/* Format (Aa) */}
          <button
            onClick={() => setShowFormatBar(!showFormatBar)}
            className={cn(
              "p-1.5 rounded-md transition-colors",
              showFormatBar
                ? "bg-amber-500/20 text-amber-500"
                : "hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-300"
            )}
            title="Formatting"
          >
            <Type className="w-4.5 h-4.5" />
          </button>

          {/* Checklist */}
          <button
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            className={cn(
              "p-1.5 rounded-md transition-colors",
              editor.isActive("taskList")
                ? "bg-amber-500/20 text-amber-500"
                : "hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-300"
            )}
            title="Checklist"
          >
            <ListTodo className="w-4.5 h-4.5" />
          </button>

          {/* Table */}
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                .run()
            }
            className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-300 transition-colors"
            title="Insert Table"
          >
            <TableIcon className="w-4.5 h-4.5" />
          </button>

          {/* Attachment */}
          <button
            onClick={() => {
              // Mock insert a beautiful photo
              editor
                .chain()
                .focus()
                .insertContent(
                  `<p>📎 <i>Attachment: <a href="#" class="text-amber-500 hover:underline">document_scan.pdf</a></i></p>`
                )
                .run();
            }}
            className="p-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-300 transition-colors"
            title="Add Attachment"
          >
            <Paperclip className="w-4.5 h-4.5" />
          </button>

          {/* Share */}
          <button
            onClick={() => onShareToggle(note.id)}
            className={cn(
              "p-1.5 rounded-md transition-colors",
              note.isShared
                ? "bg-amber-500/20 text-amber-500"
                : "hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-300"
            )}
            title={note.isShared ? "Shared Note" : "Share"}
          >
            <Share2 className="w-4.5 h-4.5" />
          </button>

          {/* More options (...) */}
          <div className="relative">
            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className={cn(
                "p-1.5 rounded-md transition-colors",
                showMoreMenu
                  ? "bg-black/10 dark:bg-white/10"
                  : "hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-300"
              )}
              title="More Actions"
            >
              <MoreHorizontal className="w-4.5 h-4.5" />
            </button>

            {/* More Menu Dropdown */}
            {showMoreMenu && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setShowMoreMenu(false)}
                />
                <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-[#1f232b] rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-800 py-1 z-40 text-xs">
                  <button
                    onClick={() => {
                      onPinToggle(note.id);
                      setShowMoreMenu(false);
                    }}
                    className="w-full px-3 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2"
                  >
                    <Pin className="w-3.5 h-3.5" />
                    {note.isPinned ? "Unpin Note" : "Pin Note"}
                  </button>

                  {note.recentlyDeletedAt ? (
                    <>
                      <button
                        onClick={() => {
                          onRestore?.(note.id);
                          setShowMoreMenu(false);
                        }}
                        className="w-full px-3 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 text-green-600"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Restore Note
                      </button>
                      <button
                        onClick={() => {
                          onDeletePermanently?.(note.id);
                          setShowMoreMenu(false);
                        }}
                        className="w-full px-3 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 text-red-500 font-semibold"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete Permanently
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        onDelete(note.id);
                        setShowMoreMenu(false);
                      }}
                      className="w-full px-3 py-1.5 text-left hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-2 text-red-500"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Move to Deleted
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Formatting Sub-Bar */}
      {showFormatBar && (
        <div className="flex items-center gap-1 px-4 py-1.5 bg-neutral-200/50 dark:bg-neutral-800/50 border-b border-neutral-200/30 dark:border-neutral-800/30 shrink-0 select-none overflow-x-auto">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={cn(
              "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5",
              editor.isActive("bold") && "bg-black/10 dark:bg-white/10 text-amber-500"
            )}
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={cn(
              "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5",
              editor.isActive("italic") && "bg-black/10 dark:bg-white/10 text-amber-500"
            )}
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={cn(
              "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5",
              editor.isActive("underline") &&
                "bg-black/10 dark:bg-white/10 text-amber-500"
            )}
          >
            <UnderlineIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={cn(
              "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5",
              editor.isActive("strike") && "bg-black/10 dark:bg-white/10 text-amber-500"
            )}
          >
            <Strikethrough className="w-4 h-4" />
          </button>
          <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={cn(
              "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5",
              editor.isActive("heading", { level: 1 }) &&
                "bg-black/10 dark:bg-white/10 text-amber-500"
            )}
          >
            <Heading1 className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={cn(
              "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5",
              editor.isActive("heading", { level: 2 }) &&
                "bg-black/10 dark:bg-white/10 text-amber-500"
            )}
          >
            <Heading2 className="w-4 h-4" />
          </button>
          <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={cn(
              "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5",
              editor.isActive("bulletList") &&
                "bg-black/10 dark:bg-white/10 text-amber-500"
            )}
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={cn(
              "p-1 rounded hover:bg-black/5 dark:hover:bg-white/5",
              editor.isActive("orderedList") &&
                "bg-black/10 dark:bg-white/10 text-amber-500"
            )}
          >
            <ListOrdered className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Editor Body */}
      <div className="flex-1 overflow-y-auto px-10 py-6 max-w-3xl mx-auto w-full flex flex-col">
        {/* Date/Time Indicator */}
        <div className="text-[11px] font-semibold text-neutral-400/80 dark:text-neutral-500 text-center select-none mb-4">
          {formattedDate}
        </div>

        {/* Title Input */}
        <input
          type="text"
          value={note.title}
          onChange={(e) => onUpdate(note.id, { title: e.target.value })}
          className="w-full text-2xl font-bold bg-transparent border-none outline-none focus:ring-0 placeholder-black/10 dark:placeholder-white/10 mb-4 text-neutral-900 dark:text-neutral-100"
          placeholder="Title"
        />

        {/* TipTap Rich Editor */}
        <div className="flex-1 min-h-[300px]">
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
}
