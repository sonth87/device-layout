import { AppNotification } from '../types/notification';
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
export declare function createNotificationSlice(set: Setter): NotificationSlice;
export {};
