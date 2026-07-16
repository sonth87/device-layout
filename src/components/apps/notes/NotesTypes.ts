export interface Folder {
  id: string;
  name: string;
  isSystem?: boolean;
}

export interface Note {
  id: string;
  title: string;
  body: string; // Rich-text HTML content from TipTap
  folderId: string | null; // null means 'All Notes' (no folder)
  modifiedAt: number;
  createdAt: number;
  isPinned?: boolean;
  isShared?: boolean;
  recentlyDeletedAt?: number | null; // soft delete timestamp
}
