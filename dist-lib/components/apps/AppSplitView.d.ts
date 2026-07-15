import { ReactNode } from 'react';
interface AppSplitViewProps {
    sidebar: ReactNode;
    sidebarWidthClass?: string;
    sidebarClassName?: string;
    contentClassName?: string;
    className?: string;
    children: (size: {
        width: number;
        height: number;
    }) => ReactNode;
}
export declare function AppSplitView({ sidebar, sidebarWidthClass, sidebarClassName, contentClassName, className, children, }: AppSplitViewProps): import("react/jsx-runtime").JSX.Element;
export {};
