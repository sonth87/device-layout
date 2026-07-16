export interface Folder {
    id: string;
    name: string;
    isSystem?: boolean;
}
export interface Note {
    id: string;
    title: string;
    body: string;
    folderId: string | null;
    modifiedAt: number;
    createdAt: number;
    isPinned?: boolean;
    isShared?: boolean;
    recentlyDeletedAt?: number | null;
}
