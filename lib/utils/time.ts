import { HOME_TIMEZONE } from '@/lib/constants';

// "12:03 pm" at home.
export function homeTime(date: Date) {
  return date
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: HOME_TIMEZONE,
    })
    .toLowerCase();
}

// "5m ago", "3h ago", "2d ago"
export function timeAgo(iso: string, now: Date) {
  const minutes = Math.max(
    1,
    Math.round((now.getTime() - new Date(iso).getTime()) / 60000),
  );
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}
