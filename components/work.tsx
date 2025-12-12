interface WorkItem {
  title: string;
  description: string;
  url: string;
}

const workItems: WorkItem[] = [
  {
    title: 'navi',
    description:
      'AI-powered shell guide that helps developers navigate and understand their command-line environment more efficiently. Built with Go for performance and reliability.',
    url: 'https://github.com/nitintf/navi',
  },
  {
    title: 'layout',
    description:
      'A macOS app for seamless windows and app management, providing intuitive controls for organizing your workspace. Built with TypeScript for a smooth native experience.',
    url: 'https://github.com/nitintf/layout',
  },
  {
    title: 'commet',
    description:
      'AI-powered commit message generator and Git utilities to help you write better commits. Automates the process of creating meaningful commit messages using AI.',
    url: 'https://github.com/nitintf/commet',
  },
  {
    title: 'nullmail',
    description:
      'A fully self-deployable and open source Temp Mail SMTP Service written in Go. Provides temporary email functionality with full control over your deployment.',
    url: 'https://github.com/nitintf/nullmail',
  },
  {
    title: 'nl2sql',
    description:
      'Natural Language to SQL conversion API using LangChain, FastAPI and React. Converts plain English queries into SQL statements through advanced AI processing.',
    url: 'https://github.com/nitintf/nl2sql',
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
