# Virtual Filesystem (VFS)

## Overview

The VFS is an in-memory, localStorage-persisted filesystem used by Terminal and Finder. It stores files and directories as a flat map keyed by absolute POSIX path. This enables cross-app file sharing without a real backend.

---

## Structure

```ts
interface VFSFile {
  type: 'file';
  name: string;
  path: string;        // absolute path, e.g. '/Users/user/Documents/notes.txt'
  content: string;
  createdAt: number;
  modifiedAt: number;
  mimeType?: string;
}

interface VFSDirectory {
  type: 'dir';
  name: string;
  path: string;
  createdAt: number;
}
```

---

## Initial Filesystem

The VFS is bootstrapped with a minimal POSIX-like tree:

```
/
├── Users/
│   └── user/
│       ├── Desktop/
│       │   └── Getting Started.txt
│       ├── Documents/
│       │   ├── README.md
│       │   └── Notes.txt
│       ├── Downloads/
│       ├── Pictures/
│       └── Music/
└── Applications/
```

---

## Store Actions

| Action | Signature | Description |
|--------|-----------|-------------|
| `vfsWriteFile` | `(path, content, mimeType?) => void` | Creates or overwrites a file. Auto-creates parent dir if missing. |
| `vfsReadFile` | `(path) => string \| null` | Returns file content or `null` if missing/directory |
| `vfsMkdir` | `(path) => void` | Creates a directory (no-op if already exists) |
| `vfsRm` | `(path) => void` | Removes entry and all children recursively |
| `vfsMv` | `(from, to) => void` | Moves/renames an entry and all children |
| `vfsLs` | `(dirPath) => VFSEntry[]` | Lists direct children of a directory |
| `vfsExists` | `(path) => boolean` | Returns whether a path exists |

---

## Usage Example

```ts
import { useStore } from '@/store';

// Inside a component:
const vfsWriteFile = useStore((s) => s.vfsWriteFile);
const vfsReadFile = useStore((s) => s.vfsReadFile);

// Write
vfsWriteFile('/Users/user/Documents/my-note.txt', 'Hello world', 'text/plain');

// Read
const content = vfsReadFile('/Users/user/Documents/my-note.txt');
```

---

## Persistence

The VFS is serialized to `localStorage` as part of the Zustand `persist` middleware. The entire `vfs` map is saved. Changes survive page reloads.

> **Caution:** Large files or many files may approach localStorage limits (~5–10 MB). For large binary blobs, consider using `IndexedDB` separately.

---

## Integration Points

- **Terminal** (`Terminal.tsx`): implements shell commands (`ls`, `cat`, `echo`, `rm`, `mkdir`, `touch`) that call VFS actions directly
- **Finder** (`Finder.tsx`): reads `vfsLs` to populate the file browser; supports rename and delete via `vfsMv` / `vfsRm`
- **TextEditor** (`TextEditor.tsx`): reads/writes files by path via `vfsReadFile` / `vfsWriteFile`
