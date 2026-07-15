import { WidgetInstance, WidgetSize, WidgetDefinition } from '../types/widget';
export interface WidgetSlice {
    widgetInstances: WidgetInstance[];
    /** True when the widget gallery panel is open */
    isEditingWidgets: boolean;
    /** Window IDs minimized when gallery opened — restored on Done */
    _galleryMinimizedWindowIds: string[];
    openWidgetGallery: () => void;
    closeWidgetGallery: () => void;
    addWidget: (def: WidgetDefinition, size: WidgetSize, x: number, y: number) => void;
    removeWidget: (instanceId: string) => void;
    moveWidget: (instanceId: string, x: number, y: number) => void;
}
type S = WidgetSlice;
type Setter = (fn: (state: S) => void) => void;
type Getter = () => WidgetSlice & {
    windows: Record<string, {
        id: string;
        isMinimized: boolean;
    }>;
    minimizeWindow: (id: string) => void;
    restoreWindow: (id: string) => void;
};
export declare function createWidgetSlice(set: Setter, get: Getter): WidgetSlice;
export {};
