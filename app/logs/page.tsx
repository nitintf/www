import { getAllLogs } from '@/lib/logs';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logs',
  description: 'Notes, thoughts, and things I found interesting.',
};

export default function LogsPage() {
  const logs = getAllLogs();

  return (
    <main role="main" aria-label="Logs">
      <div className="w-full max-w-2xl mx-auto px-8 pt-5 pb-8">
        <h1 className="sr-only">Logs — Nitin Panwar</h1>
        <div className="pt-2">
          <p className="text-sm leading-relaxed text-ui-10">
            Notes, thoughts, and things I found interesting.
          </p>
        </div>

        {logs.length > 0 ? (
          <ul className="list-none divide-y divide-ui-4/40 mt-12">
            {logs.map((log) => (
              <li key={log.slug}>
                <Link
                  href={`/logs/${log.slug}`}
                  className="plain-link group flex items-start justify-between gap-4 py-3"
                >
                  <div className="min-w-0">
                    <span className="text-sm font-medium text-ui-12 group-hover:text-accent-500 transition-colors">
                      {log.title}
                    </span>
                    <p className="text-xs text-ui-8 mt-0.5 leading-relaxed">
                      {log.description}
                    </p>
                  </div>
                  <time className="text-[11px] text-ui-7 shrink-0 tabular-nums pt-0.5">
                    {formatDate(log.date)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-ui-10 text-sm italic mt-12">
            Nothing here yet. Probably still debugging the first draft.
          </p>
        )}
      </div>
    </main>
  );
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}
