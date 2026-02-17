import { getAllLogs } from '@/lib/logs';
import Footer from '@/components/footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logs',
  description: 'Notes, thoughts, and things I found interesting.',
};

export default function LogsPage() {
  const logs = getAllLogs();

  return (
    <main className="min-h-screen flex flex-col" role="main" aria-label="Logs">
      <div className="w-full max-w-3xl mx-auto p-8 pt-16 flex-1">
        <header className="mb-12">
          <Link
            href="/"
            className="log-back-nav-inline mb-10 inline-flex"
            aria-label="Back to home"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span>home</span>
          </Link>
          <h1 className="text-primary">Logs</h1>
          <p className="text-neutral-600 text-sm mt-1">
            Notes, thoughts, and things I found interesting.
          </p>
        </header>

        {logs.length > 0 ? (
          <div className="space-y-1">
            {logs.map((log) => (
              <Link
                key={log.slug}
                href={`/logs/${log.slug}`}
                className="plain-link block group py-3 -mx-3 px-3 rounded-md hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <span className="text-neutral-400 text-sm font-medium group-hover:text-neutral-300 transition-colors">
                    {log.title}
                  </span>
                  <time className="text-neutral-700 text-xs shrink-0 tabular-nums">
                    {formatDate(log.date)}
                  </time>
                </div>
                <p className="text-neutral-600 text-xs mt-1 leading-relaxed">
                  {log.description}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-neutral-600 text-sm italic">
            Nothing here yet. Probably still debugging the first draft.
          </p>
        )}
      </div>

      <div className="w-full max-w-3xl mx-auto p-8 pt-0">
        <Footer />
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
