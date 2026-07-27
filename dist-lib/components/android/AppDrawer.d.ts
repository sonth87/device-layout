import { AppConfig } from '../../types/app';
interface AppDrawerProps {
    open: boolean;
    onClose: () => void;
    onOpenApp: (app: AppConfig) => void;
}
export declare function AndroidAppDrawer({ open, onClose, onOpenApp }: AppDrawerProps): import("react").JSX.Element;
export {};
