import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume of Nitin Panwar, full-stack software engineer working across web, mobile, backend, and real-time data.',
};

interface Role {
  title: string;
  note?: string;
  company: string;
  url?: string;
  dates: string;
  location: string;
  points: string[];
  stack?: string;
}

interface Project {
  title: string;
  description: string;
  url: string;
  label: string;
  points: string[];
  stack: string;
}

const skills: { label: string; items: string }[] = [
  {
    label: 'Languages',
    items: 'TypeScript, JavaScript, Python, Go, Rust, Swift, C++',
  },
  {
    label: 'Frontend & Mobile',
    items:
      'React, Next.js, Vue.js, React Native, Expo, SwiftUI, Redux, Tailwind CSS, Material UI, D3.js',
  },
  {
    label: 'Backend',
    items: 'Node.js, NestJS, GraphQL, REST APIs, FastAPI, WebSockets',
  },
  {
    label: 'Databases',
    items: 'PostgreSQL, TimescaleDB, MongoDB, MySQL, Redis, Pinecone',
  },
  {
    label: 'Streaming & Cloud',
    items:
      'Kafka, MQTT, Docker, Kubernetes, Terraform, AWS (EC2, S3, RDS, Lambda, IAM), GCP, CI/CD',
  },
  {
    label: 'AI & LLM',
    items:
      'LangChain, LangGraph, RAG pipelines, MCP servers, prompt engineering',
  },
];

const experience: Role[] = [
  {
    title: 'Software Engineer',
    company: 'AMPD Energy',
    url: 'https://www.ampd.energy',
    dates: 'Sep 2025 – Present',
    location: 'Remote (Hong Kong)',
    points: [
      'Architected and built AMPD PQ from scratch, a product qualification platform where customers upload consumption data and evaluate CO2 reduction and savings, cutting the customer evaluation cycle from days to under 5 minutes.',
      'Developed AMPD Charlie, a RAG-powered AI assistant that cut average support resolution time by 40%.',
      'Own the customer mobile app end to end (React Native, Expo): monitoring, live power flow, push notifications.',
      'Built and maintained real-time data ingestion pipelines using Kafka and MQTT for high-throughput energy device telemetry.',
      'Developed backend services using NestJS, GraphQL and TimescaleDB for energy device data and analytics.',
    ],
    stack:
      'Kafka, MQTT, NestJS, Vue.js, GraphQL, TimescaleDB, React Native, Docker, Kubernetes, AWS, Terraform',
  },
  {
    title: 'Senior Full-Stack Engineer',
    note: 'promoted from Full-Stack Software Engineer II',
    company: 'BITCS',
    dates: 'Mar 2023 – Aug 2025',
    location: 'Noida, India',
    points: [
      'Architected and led Raven, an internal issue management system, cutting mean time to resolution by 40%.',
      'Increased test coverage to 75% across core modules, reducing production bugs and improving release confidence.',
      'Added frontend caching, reducing API call latency by 30% and raising the Lighthouse score by 25 points.',
      'Built a company-wide real-time notification system on WebSockets, improving cross-team incident response.',
      'Redesigned schemas, indexes and queries, reducing average query execution time by 40%.',
      'Mentored 4 junior engineers through structured code reviews and pairing sessions.',
    ],
    stack:
      'React, TypeScript, GraphQL, AWS (S3, EC2, RDS, CloudWatch), PostgreSQL, Docker, Kubernetes',
  },
  {
    title: 'Software Development Engineer I',
    company: 'Codersera',
    url: 'https://codersera.com',
    dates: 'Dec 2021 – Mar 2023',
    location: 'Noida, India',
    points: [
      'Built features for Codersera, a talent marketplace matching companies with vetted remote developers.',
      'Developed REST APIs and data pipelines in NestJS and PostgreSQL and the React frontend, deployed on AWS.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Sapio Analytics',
    dates: 'Aug 2021 – Nov 2021',
    location: 'Mumbai, India',
    points: [
      'Developed an interactive analytics dashboard with real-time data visualization using D3.js and Plotly.js.',
      'Implemented a geospatial map feature using Mapbox for state-wise data exploration.',
      'Improved initial page load time by 35% through code splitting, lazy loading and bundle optimization.',
    ],
  },
];

const projects: Project[] = [
  {
    title: 'promptomato',
    description: 'Focus and wellbeing companion for macOS',
    url: 'https://promptomato.app',
    label: 'promptomato.app',
    points: [
      'macOS notch companion with reminders and focus sessions; flags distractions with a local on-device LLM (Qwen 2.5 3B).',
    ],
    stack: 'Swift 6, SwiftUI, on-device ML',
  },
  {
    title: 'dicta',
    description: 'AI speech-to-text for macOS',
    url: 'https://github.com/nitintf/dicta',
    label: 'github.com/nitintf/dicta',
    points: [
      'Native macOS app that turns speech into polished text with AI, fully on-device: no cloud, subscription or usage limits.',
    ],
    stack: 'Rust, Tauri, TypeScript, on-device ML',
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif italic text-base tracking-wide font-medium text-ui-12 mb-4">
      {children}
    </h2>
  );
}

function Points({ points, stack }: { points: string[]; stack?: string }) {
  return (
    <>
      <ul className="mt-2 space-y-1.5 list-disc pl-4 marker:text-ui-7">
        {points.map((point) => (
          <li key={point} className="text-sm leading-relaxed text-ui-10">
            {point}
          </li>
        ))}
      </ul>
      {stack && <p className="mt-2 text-xs text-ui-8">{stack}</p>}
    </>
  );
}

export default function ResumePage() {
  return (
    <main role="main" aria-label="Resume">
      <div className="w-full max-w-2xl mx-auto px-8 pb-8">
        <h1 className="sr-only">Resume — Nitin Panwar</h1>
        <div className="pt-5">
          <p className="text-sm leading-relaxed text-ui-10">
            Full-stack software engineer with 5+ years of experience owning
            products end to end across web, mobile and backend, from
            customer-facing platforms and RAG-powered AI products to real-time
            data pipelines (Kafka, MQTT).
          </p>
          <p className="text-sm leading-relaxed text-ui-10 pt-2">
            Prefer paper? Grab the{' '}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-link"
            >
              PDF
            </a>
            .
          </p>
        </div>

        <section className="pt-20" aria-labelledby="experience-heading">
          <SectionHeading>
            <span id="experience-heading">Experience</span>
          </SectionHeading>
          <ol className="list-none space-y-10">
            {experience.map((role) => (
              <li key={`${role.company}-${role.title}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-ui-12">
                    {role.title}
                    <span className="text-ui-8 font-normal">
                      {' '}
                      at{' '}
                      {role.url ? (
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pill-link"
                        >
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                    </span>
                  </span>
                  <span className="text-[11px] text-ui-7 shrink-0 tabular-nums">
                    {role.dates}
                  </span>
                </div>
                <p className="text-xs text-ui-8 mt-0.5">
                  {role.location}
                  {role.note && <span className="italic"> · {role.note}</span>}
                </p>
                <Points points={role.points} stack={role.stack} />
              </li>
            ))}
          </ol>
        </section>

        <section className="pt-16" aria-labelledby="projects-heading">
          <SectionHeading>
            <span id="projects-heading">Projects</span>
          </SectionHeading>
          <ul className="list-none space-y-8">
            {projects.map((project) => (
              <li key={project.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-ui-12">
                    {project.title}
                    <span className="text-xs text-ui-8 font-normal">
                      {' '}
                      {project.description}
                    </span>
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plain-link text-[11px] text-ui-7 hover:text-accent-500 transition-colors shrink-0"
                  >
                    {project.label} ↗
                  </a>
                </div>
                <Points points={project.points} stack={project.stack} />
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-16" aria-labelledby="skills-heading">
          <SectionHeading>
            <span id="skills-heading">Skills</span>
          </SectionHeading>
          <dl className="divide-y divide-ui-4/40">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="py-2.5 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-4"
              >
                <dt className="text-xs font-medium text-ui-11">
                  {skill.label}
                </dt>
                <dd className="text-xs leading-relaxed text-ui-9 mt-1 sm:mt-0">
                  {skill.items}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pt-16" aria-labelledby="education-heading">
          <SectionHeading>
            <span id="education-heading">Education</span>
          </SectionHeading>
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm font-medium text-ui-12">
              Bachelor&apos;s in Computer Science
              <span className="text-ui-8 font-normal">
                {' '}
                at Meerut Institute of Engineering and Technology
              </span>
            </span>
          </div>
          <p className="text-xs text-ui-8 mt-0.5">Meerut, India</p>
        </section>
      </div>
    </main>
  );
}
