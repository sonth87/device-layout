import { AppConfig } from '../../types/app';
interface TaskbarProps {
    onOpenApp: (app: AppConfig) => void;
}
export declare function Taskbar({ onOpenApp }: TaskbarProps): import("react/jsx-runtime").JSX.Element;
export {};
