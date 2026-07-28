import { MenuBarItem } from '../../types/app';
interface MenuDropdownProps {
    label: string;
    items: MenuBarItem[];
    appId: string | null;
    windowId?: string;
    activeId: string | null;
    setActiveId: (id: string | null) => void;
}
export declare function MenuDropdown({ label, items, appId, windowId, activeId, setActiveId, }: MenuDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
