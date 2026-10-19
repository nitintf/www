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
