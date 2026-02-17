import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const LOGS_DIR = path.join(process.cwd(), 'content', 'logs');

export interface LogMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export function getAllLogs(): LogMeta[] {
  if (!fs.existsSync(LOGS_DIR)) return [];

  const files = fs.readdirSync(LOGS_DIR).filter((f) => f.endsWith('.mdx'));

  const logs = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const raw = fs.readFileSync(path.join(LOGS_DIR, filename), 'utf-8');
    const { data } = matter(raw);

    return {
      title: data.title,
      date: data.date,
      description: data.description,
      slug,
    };
  });

  return logs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getLogBySlug(
  slug: string,
): { meta: LogMeta; content: string } | null {
  const filePath = path.join(LOGS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    meta: {
      title: data.title,
      date: data.date,
      description: data.description,
      slug,
    },
    content,
  };
}

export function getAllLogSlugs(): string[] {
  if (!fs.existsSync(LOGS_DIR)) return [];

  return fs
    .readdirSync(LOGS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}
