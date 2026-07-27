import { Note } from './NotesTypes';
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
export declare function NotesEditor({ note, folderName, noteCount, onUpdate, onBack, onShareToggle, onPinToggle, onDelete, onRestore, onDeletePermanently, onCreateNoteInFolder }: NotesEditorProps): import("react").JSX.Element | null;
export {};
