export interface AppNotification {
  id: string;
  appId: string;
  appName: string;
  title: string;
  body: string;
  timestamp: number;
  read: boolean;
  icon?: string;
}
