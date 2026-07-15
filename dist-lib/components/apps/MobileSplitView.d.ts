import { ReactNode } from 'react';
export declare function useMobileSplitBack(): (() => void) | null;
interface MobileSplitViewProps {
    list: ReactNode;
    detail: ReactNode | null;
    onBack: () => void;
    detailTitle?: string;
    className?: string;
    listClassName?: string;
    detailClassName?: string;
    sidebarWidth?: string;
}
export declare function MobileSplitView({ list, detail, onBack, className, listClassName, detailClassName, sidebarWidth, }: MobileSplitViewProps): import("react/jsx-runtime").JSX.Element;
export {};
