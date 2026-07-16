import { ReactNode } from 'react';
export declare function useMobileSplitBack(): (() => void) | null;
/**
 * Reusable hook for master-detail split views.
 * Automatically clears the selection on mobile/mockup screens (so it shows the list menu)
 * and defaults to defaultValue on desktop/large screens.
 */
export declare function useSplitViewSelection<T>(defaultValue: T): readonly [T | null, import('react').Dispatch<import('react').SetStateAction<T | null>>];
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
