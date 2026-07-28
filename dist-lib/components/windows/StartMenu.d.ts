import { AppConfig } from '../../types/app';
interface StartMenuProps {
    open: boolean;
    onClose: () => void;
    onOpenApp: (app: AppConfig) => void;
}
export declare function StartMenu({ open, onClose, onOpenApp }: StartMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
