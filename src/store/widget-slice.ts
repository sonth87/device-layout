import { nanoid } from 'nanoid';
import type { WidgetInstance, WidgetSize, WidgetDefinition } from '@/types/widget';

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
  windows: Record<string, { id: string; isMinimized: boolean }>;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
};

export function createWidgetSlice(set: Setter, get: Getter): WidgetSlice {
  return {
    widgetInstances: [],
    isEditingWidgets: false,
    _galleryMinimizedWindowIds: [],

    openWidgetGallery() {
      // Collect all non-minimized window IDs to restore later
      const openWindowIds = Object.values(get().windows)
        .filter((w) => !w.isMinimized)
        .map((w) => w.id);

      // Minimize all open windows
      for (const id of openWindowIds) {
        get().minimizeWindow(id);
      }

      set((state) => {
        state.isEditingWidgets = true;
        state._galleryMinimizedWindowIds = openWindowIds;
      });
    },

    closeWidgetGallery() {
      const idsToRestore = get()._galleryMinimizedWindowIds;

      set((state) => {
        state.isEditingWidgets = false;
        state._galleryMinimizedWindowIds = [];
      });

      // Restore windows that were minimized by the gallery
      for (const id of idsToRestore) {
        // Only restore if still exists
        if (get().windows[id]) {
          get().restoreWindow(id);
        }
      }
    },

    addWidget(def, size, x, y) {
      const instance: WidgetInstance = {
        instanceId: nanoid(8),
        definitionId: def.id,
        size,
        x,
        y,
      };
      set((state) => {
        state.widgetInstances.push(instance);
      });
    },

    removeWidget(instanceId) {
      set((state) => {
        state.widgetInstances = state.widgetInstances.filter(
          (w) => w.instanceId !== instanceId
        );
      });
    },

    moveWidget(instanceId, x, y) {
      set((state) => {
        const inst = state.widgetInstances.find((w) => w.instanceId === instanceId);
        if (inst) {
          inst.x = x;
          inst.y = y;
        }
      });
    },
  };
}
