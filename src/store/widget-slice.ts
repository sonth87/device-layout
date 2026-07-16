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
        .filter((w: any) => !w.isMinimized)
        .map((w: any) => w.id);

      (set as any)((state: any) => {
        // Minimize all open windows in one batch
        for (const id of openWindowIds) {
          if (state.windows[id]) {
            state.windows[id].isMinimized = true;
            state.windows[id].isFocused = false;
          }
        }
        state.focusedWindowId = null;
        state.activeAppId = null;

        state.isEditingWidgets = true;
        state._galleryMinimizedWindowIds = openWindowIds;
      });
    },

    closeWidgetGallery() {
      const idsToRestore = get()._galleryMinimizedWindowIds;

      (set as any)((state: any) => {
        state.isEditingWidgets = false;
        state._galleryMinimizedWindowIds = [];

        // Restore windows that were minimized by the gallery
        let highestZIndex = -1;
        let lastIdToFocus = null;

        for (const id of idsToRestore) {
          if (state.windows[id]) {
            state.windows[id].isMinimized = false;
            state.windows[id].isFocused = false;
            if (state.windows[id].zIndex > highestZIndex) {
              highestZIndex = state.windows[id].zIndex;
              lastIdToFocus = id;
            }
          }
        }

        if (lastIdToFocus) {
          state.focusedWindowId = lastIdToFocus;
          state.windows[lastIdToFocus].isFocused = true;
          state.activeAppId = state.windows[lastIdToFocus].appId;
        }
      });
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
