interface DropdownPanelProps {
    anchorRef: React.RefObject<HTMLElement | null>;
    open: boolean;
    onClose: () => void;
    minWidth?: number;
    children: React.ReactNode;
}
export declare function DropdownPanel({ anchorRef, open, onClose, minWidth, children, }: DropdownPanelProps): import('react').ReactPortal | null;
export {};
