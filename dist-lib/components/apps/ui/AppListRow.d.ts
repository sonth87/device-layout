import { ReactNode } from 'react';
interface AppListRowProps {
    /** Primary label (left side) */
    label: string;
    /** Optional subtitle below label */
    subtitle?: string;
    /** Optional icon/element before the label */
    icon?: ReactNode;
    /** Secondary value shown before the chevron */
    value?: ReactNode;
    /** Right-side control (toggle, badge, custom element) — replaces chevron */
    control?: ReactNode;
    /** If true, shows a chevron and makes the row a button */
    onPress?: () => void;
    /** Mark the row as selected/active */
    active?: boolean;
    /** Disable interaction */
    disabled?: boolean;
    className?: string;
}
/**
 * A single row inside an AppListGroup.
 * Adapts between interactive (button with chevron) and display-only modes.
 *
 * Example — navigation row:
 *   <AppListRow label="Appearance" icon={<Paintbrush />} onPress={() => nav('appearance')} />
 *
 * Example — value row:
 *   <AppListRow label="Language" value="English" />
 *
 * Example — toggle row:
 *   <AppListRow label="Dark Mode" control={<AppToggle checked={dark} onChange={setDark} />} />
 *
 * Example — selected row (checkmark):
 *   <AppListRow label="macOS 26" active={theme === 'macos'} onPress={() => setTheme('macos')} />
 */
export declare function AppListRow({ label, subtitle, icon, value, control, onPress, active, disabled, className, }: AppListRowProps): import("react").JSX.Element;
export {};
