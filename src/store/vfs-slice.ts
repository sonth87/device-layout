/**
 * Virtual Filesystem (VFS) slice — in-memory tree persisted to localStorage.
 *
 * Uses a flat map keyed by absolute path for O(1) lookup.
 * Directories are stored as entries with content === undefined.
 */

export interface VFSFile {
  type: 'file';
  name: string;
  path: string;
  content: string;
  createdAt: number;
  modifiedAt: number;
  mimeType?: string;
}

export interface VFSDirectory {
  type: 'dir';
  name: string;
  path: string;
  createdAt: number;
}

export type VFSEntry = VFSFile | VFSDirectory;

export interface VFSSlice {
  vfs: Record<string, VFSEntry>;
  vfsWriteFile: (path: string, content: string, mimeType?: string) => void;
  vfsReadFile: (path: string) => string | null;
  vfsMkdir: (path: string) => void;
  vfsRm: (path: string) => void;
  vfsMv: (from: string, to: string) => void;
  vfsLs: (dirPath: string) => VFSEntry[];
  vfsExists: (path: string) => boolean;
}

function dirname(path: string) {
  const i = path.lastIndexOf('/');
  return i <= 0 ? '/' : path.slice(0, i);
}

function basename(path: string) {
  return path.slice(path.lastIndexOf('/') + 1);
}

const INITIAL_VFS: Record<string, VFSEntry> = buildInitialVFS();

function buildInitialVFS(): Record<string, VFSEntry> {
  const now = Date.now();
  const dirs = [
    '/',
    '/Users',
    '/Users/user',
    '/Users/user/Desktop',
    '/Users/user/Documents',
    '/Users/user/Downloads',
    '/Users/user/Pictures',
    '/Users/user/Music',
    '/Applications',
  ];
  const entries: Record<string, VFSEntry> = {};
  for (const d of dirs) {
    entries[d] = { type: 'dir', name: d === '/' ? '/' : basename(d), path: d, createdAt: now };
  }

  const files: [string, string][] = [
    ['/Users/user/Documents/README.md', '# Welcome\n\nThis is your virtual filesystem.\n\nYou can create, edit, and delete files here.\n'],
    ['/Users/user/Documents/Notes.txt', 'My first note\n\nCreated on the Desktop Layout OS simulator.\n'],
    ['/Users/user/Desktop/Getting Started.txt', 'Welcome to Desktop Layout!\n\nClick apps in the dock to get started.\n'],
  ];

  for (const [path, content] of files) {
    entries[path] = {
      type: 'file',
      name: basename(path),
      path,
      content,
      createdAt: now,
      modifiedAt: now,
      mimeType: path.endsWith('.md') ? 'text/markdown' : 'text/plain',
    };
  }

  return entries;
}

type S = VFSSlice;
type Setter = (fn: (state: S) => void) => void;
type Getter = () => S;

export function createVFSSlice(set: Setter, get: Getter): VFSSlice {
  return {
    vfs: INITIAL_VFS,

    vfsWriteFile(path, content, mimeType) {
      set((state) => {
        const now = Date.now();
        const existing = state.vfs[path];
        if (existing && existing.type === 'file') {
          existing.content = content;
          existing.modifiedAt = now;
        } else {
          state.vfs[path] = {
            type: 'file',
            name: basename(path),
            path,
            content,
            createdAt: now,
            modifiedAt: now,
            mimeType,
          };
          // Ensure parent dir exists
          const parent = dirname(path);
          if (!state.vfs[parent]) {
            state.vfs[parent] = { type: 'dir', name: basename(parent), path: parent, createdAt: now };
          }
        }
      });
    },

    vfsReadFile(path) {
      const entry = get().vfs[path];
      return entry?.type === 'file' ? entry.content : null;
    },

    vfsMkdir(path) {
      set((state) => {
        if (!state.vfs[path]) {
          state.vfs[path] = { type: 'dir', name: basename(path), path, createdAt: Date.now() };
        }
      });
    },

    vfsRm(path) {
      set((state) => {
        // Remove entry and all children
        const prefix = path.endsWith('/') ? path : path + '/';
        for (const key of Object.keys(state.vfs)) {
          if (key === path || key.startsWith(prefix)) {
            delete state.vfs[key];
          }
        }
      });
    },

    vfsMv(from, to) {
      set((state) => {
        const now = Date.now();
        const entries = Object.entries(state.vfs);
        const prefix = from.endsWith('/') ? from : from + '/';
        for (const [key, entry] of entries) {
          if (key === from || key.startsWith(prefix)) {
            const newKey = to + key.slice(from.length);
            const updated: VFSEntry =
              entry.type === 'file'
                ? { ...entry, path: newKey, name: basename(newKey), modifiedAt: now }
                : { ...entry, path: newKey, name: basename(newKey) };
            delete state.vfs[key];
            state.vfs[newKey] = updated;
          }
        }
      });
    },

    vfsLs(dirPath) {
      const vfs = get().vfs;
      const normalized = dirPath.endsWith('/') && dirPath !== '/' ? dirPath.slice(0, -1) : dirPath;
      return Object.values(vfs).filter((e) => {
        if (e.path === normalized) return false;
        const parent = dirname(e.path);
        return parent === normalized;
      });
    },

    vfsExists(path) {
      return !!get().vfs[path];
    },
  };
}
