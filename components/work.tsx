interface WorkItem {
  title: string;
  description: string;
  url: string;
}

const workItems: WorkItem[] = [
  {
    title: 'dicta',
    description:
      'On-device voice-to-text for macOS. Local AI transcription with zero latency, 50+ languages, and complete privacy.',
    url: 'https://github.com/nitintf/dicta',
  },
  {
    title: 'navi',
    description:
      'AI-powered shell guide for developers. Built with Go for performance and reliability.',
    url: 'https://github.com/nitintf/navi',
  },
  {
    title: 'layout',
    description:
      'macOS app for seamless windows and app management. Built with Electron.',
    url: 'https://github.com/nitintf/layout',
  },
  {
    title: 'commet',
    description:
      'AI-powered commit message generator and Git utilities. Automates meaningful commit messages using AI.',
    url: 'https://github.com/nitintf/commet',
  },
  {
    title: 'nullmail',
    description:
      'Self-deployable open source Temp Mail SMTP Service written in Go. Full control over your deployment.',
    url: 'https://github.com/nitintf/nullmail',
  },
  {
    title: 'nl2sql',
    description:
      'Natural Language to SQL conversion API using LangChain, FastAPI and React. Converts plain English to SQL queries.',
    url: 'https://github.com/nitintf/nl2sql',
  },
  {
    title: 'openport',
    description:
      'Expose local services to the internet with secure tunnels. Like ngrok, but simple and open source. Built with Go.',
    url: 'https://github.com/nitintf/openport',
  },
];

export default function Work() {
  return (
    <section className="mt-8" aria-labelledby="work-heading">
      <h2 id="work-heading" className="text-primary mb-4">
        Work
      </h2>
      <ul className="space-y-3 list-none">
        {workItems.map((item) => (
          <li key={item.title} className="text-secondary">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.title} - ${item.description}`}
            >
              {item.title}
            </a>
            <span aria-hidden="true"> — </span>
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
