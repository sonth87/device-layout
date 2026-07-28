interface AppToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}
/**
 * iOS-style toggle switch. Use as `control` prop in AppListRow.
 *
 * Example:
 *   <AppListRow
 *     label="Liquid Glass"
 *     control={<AppToggle checked={enabled} onChange={setEnabled} />}
 *   />
 */
export declare function AppToggle({ checked, onChange, disabled }: AppToggleProps): import("react/jsx-runtime").JSX.Element;
export {};
