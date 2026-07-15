import { WidgetDefinition } from '../types/widget';
/**
 * Aggregated widget registry.
 * Sources:
 *  1. Each AppConfig.widgets[] (auto-fills appId from AppConfig.id)
 *  2. BUILT_IN_WIDGETS
 */
export declare const WIDGET_REGISTRY: WidgetDefinition[];
/** All unique app IDs that have at least one widget */
export declare const WIDGET_APP_IDS: string[];
/** Lookup by definition id */
export declare function getWidgetDef(id: string): WidgetDefinition | undefined;
/** All widgets for a given appId */
export declare function getWidgetsByApp(appId: string): WidgetDefinition[];
