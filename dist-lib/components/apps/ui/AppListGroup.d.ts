import { ReactNode } from 'react';
interface AppListGroupProps {
    children: ReactNode;
    className?: string;
}
/**
 * A grouped list of rows — iOS-style rounded card with dividers between rows.
 * Wrap AppListRow components inside this.
 *
 * Example:
 *   <AppListGroup>
 *     <AppListRow label="Language" value="English" onPress={...} />
 *     <AppListRow label="Region" value="Vietnam" onPress={...} />
 *   </AppListGroup>
 */
export declare function AppListGroup({ children, className }: AppListGroupProps): import("react").JSX.Element;
export {};
