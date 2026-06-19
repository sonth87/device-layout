import type { WidgetDefinition } from '@/types/widget';
import { APPS_CONFIG } from './apps.config';

/** Built-in widgets not tied to any specific app */
const BUILT_IN_WIDGETS: WidgetDefinition[] = [
  {
    id: 'weather',
    appId: '__built-in__',
    name: 'Weather',
    description: 'Current weather conditions',
    sizes: ['small', 'medium'],
    componentKey: 'WeatherWidget',
  },
];

/**
 * Aggregated widget registry.
 * Sources:
 *  1. Each AppConfig.widgets[] (auto-fills appId from AppConfig.id)
 *  2. BUILT_IN_WIDGETS
 */
export const WIDGET_REGISTRY: WidgetDefinition[] = [
  ...APPS_CONFIG.flatMap((app) =>
    (app.widgets ?? []).map((w) => ({ ...w, appId: app.id }))
  ),
  ...BUILT_IN_WIDGETS,
];

/** All unique app IDs that have at least one widget */
export const WIDGET_APP_IDS: string[] = [
  ...new Set(WIDGET_REGISTRY.map((w) => w.appId)),
];

/** Lookup by definition id */
export function getWidgetDef(id: string): WidgetDefinition | undefined {
  return WIDGET_REGISTRY.find((w) => w.id === id);
}

/** All widgets for a given appId */
export function getWidgetsByApp(appId: string): WidgetDefinition[] {
  return WIDGET_REGISTRY.filter((w) => w.appId === appId);
}
