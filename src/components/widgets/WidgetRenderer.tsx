'use client';

import { lazy, Suspense } from 'react';
import type { WidgetSize } from '@/types/widget';

export interface WidgetComponentProps {
  size: WidgetSize;
}

const WIDGET_COMPONENTS: Record<string, React.LazyExoticComponent<React.ComponentType<WidgetComponentProps>>> = {
  ClockWidget:         lazy(() => import('./built-in/ClockWidget').then((m) => ({ default: m.ClockWidget }))),
  ClockWorldWidget:    lazy(() => import('./built-in/ClockWidget').then((m) => ({ default: m.ClockWorldWidget }))),
  ClockDigitalWidget:  lazy(() => import('./built-in/ClockWidget').then((m) => ({ default: m.ClockDigitalWidget }))),
  ClockFlipWidget:     lazy(() => import('./built-in/ClockWidget').then((m) => ({ default: m.ClockFlipWidget }))),
  CalendarWidget:      lazy(() => import('./built-in/CalendarWidget').then((m) => ({ default: m.CalendarWidget }))),
  CalendarTodayWidget: lazy(() => import('./built-in/CalendarWidget').then((m) => ({ default: m.CalendarTodayWidget }))),
  WeatherWidget:       lazy(() => import('./built-in/WeatherWidget').then((m) => ({ default: m.WeatherWidget }))),
  NotesWidget:         lazy(() => import('./built-in/NotesWidget').then((m) => ({ default: m.NotesWidget }))),
};

interface Props {
  componentKey: string;
  size: WidgetSize;
}

export function WidgetRenderer({ componentKey, size }: Props) {
  const Component = WIDGET_COMPONENTS[componentKey];
  if (!Component) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white/30 text-xs rounded-[20px] bg-white/5">
        Unknown widget
      </div>
    );
  }
  return (
    <Suspense fallback={<div className="w-full h-full rounded-[20px] bg-white/5 animate-pulse" />}>
      <Component size={size} />
    </Suspense>
  );
}
