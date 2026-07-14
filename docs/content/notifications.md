# Notifications

## Overview

The notification system is a lightweight queue managed in the Zustand store. Apps push banners that auto-dismiss after a configurable duration, and unread counts are tracked per-app.

---

## Notification Shape

```ts
interface AppNotification {
  id: string;         // nanoid(8) — assigned on push
  appId: string;      // source app
  title: string;
  body?: string;
  iconUrl?: string;   // optional custom icon
  timestamp: number;  // Date.now()
  read: boolean;
}
```

---

## Pushing a Notification

Call `pushNotification` from any component or hook:

```ts
import { useStore } from '@/store';

const pushNotification = useStore((s) => s.pushNotification);

pushNotification({
  appId: 'my-app',
  title: 'Download complete',
  body: 'report.pdf has been saved to Downloads.',
});
```

`pushNotification` returns the generated `id` string.

---

## Store Actions

| Action | Signature | Description |
|--------|-----------|-------------|
| `pushNotification` | `(n) => string` | Adds a notification; returns its `id`. Queue capped at 50. |
| `markRead` | `(id) => void` | Marks one notification as read |
| `markAllRead` | `(appId?) => void` | Marks all (or all for an app) as read |
| `dismissNotification` | `(id) => void` | Removes from queue |
| `clearAll` | `() => void` | Empties the entire queue |

---

## Notification Banner

`NotificationBanner.tsx` is mounted by the active OS compositor. It watches the notification queue and shows a slide-in banner for each new unread notification. Banners:

- Appear from the top-right corner
- Auto-dismiss after ~4 seconds
- Clicking the banner calls `markRead` + `dismissNotification`

---

## App Badge

Set `badge` in `AppConfig` to display a count on the dock/taskbar icon:

```ts
{ id: 'my-app', badge: 3 }
```

For dynamic badges, update the `apps` map in the store. The dock reads `apps[appId].badge` reactively.
