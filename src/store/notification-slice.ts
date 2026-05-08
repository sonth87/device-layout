import { nanoid } from 'nanoid';
import type { AppNotification } from '@/types/notification';

const MAX_NOTIFICATIONS = 50;

export interface NotificationSlice {
  notifications: AppNotification[];
  pushNotification: (n: Omit<AppNotification, 'id' | 'timestamp' | 'read'>) => string;
  markRead: (id: string) => void;
  markAllRead: (appId?: string) => void;
  dismissNotification: (id: string) => void;
  clearAll: () => void;
}

type S = NotificationSlice;
type Setter = (fn: (state: S) => void) => void;

export function createNotificationSlice(set: Setter): NotificationSlice {
  return {
    notifications: [],

    pushNotification(n) {
      const id = nanoid(8);
      set((state) => {
        state.notifications.unshift({ ...n, id, timestamp: Date.now(), read: false });
        if (state.notifications.length > MAX_NOTIFICATIONS) {
          state.notifications = state.notifications.slice(0, MAX_NOTIFICATIONS);
        }
      });
      return id;
    },

    markRead(id) {
      set((state) => {
        const n = state.notifications.find((x) => x.id === id);
        if (n) n.read = true;
      });
    },

    markAllRead(appId) {
      set((state) => {
        for (const n of state.notifications) {
          if (!appId || n.appId === appId) n.read = true;
        }
      });
    },

    dismissNotification(id) {
      set((state) => {
        state.notifications = state.notifications.filter((n) => n.id !== id);
      });
    },

    clearAll() {
      set((state) => { state.notifications = []; });
    },
  };
}
