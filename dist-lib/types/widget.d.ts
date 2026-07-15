export type WidgetSize = 'small' | 'medium' | 'large';
export declare const WIDGET_SIZE_PX: Record<WidgetSize, {
    w: number;
    h: number;
}>;
/** Static declaration — registered in widgets.config.ts */
export interface WidgetDefinition {
    /** Globally unique, e.g. 'clock-analog', 'calendar-mini' */
    id: string;
    /** Source app id, or '__built-in__' */
    appId: string;
    name: string;
    description?: string;
    /** Which sizes this widget supports */
    sizes: WidgetSize[];
    /** Key into WIDGET_COMPONENTS lazy map in WidgetRenderer */
    componentKey: string;
}
/** Runtime instance placed on the desktop */
export interface WidgetInstance {
    /** Unique per placement (nanoid) */
    instanceId: string;
    /** References WidgetDefinition.id */
    definitionId: string;
    size: WidgetSize;
    /** Pixel offset from desktop canvas top-left */
    x: number;
    y: number;
}
