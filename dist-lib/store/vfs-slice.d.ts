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
type S = VFSSlice;
type Setter = (fn: (state: S) => void) => void;
type Getter = () => S;
export declare function createVFSSlice(set: Setter, get: Getter): VFSSlice;
export {};
