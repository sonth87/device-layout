import { ReactNode } from 'react';
interface AppSectionProps {
    title?: string;
    description?: string;
    children: ReactNode;
    className?: string;
}
/**
 * A labelled content section — title + optional description + children.
 * Used as the top-level grouping inside any settings/detail panel.
 */
export declare function AppSection({ title, description, children, className }: AppSectionProps): import("react").JSX.Element;
export {};
