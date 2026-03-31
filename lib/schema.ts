const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nitin.sh';

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nitin Panwar',
  url: siteUrl,
  jobTitle: 'Senior Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Ampd Energy',
    url: 'https://www.ampd.energy',
  },
  sameAs: [
    'https://github.com/nitintf',
    'https://www.linkedin.com/in/nitin-panwarr/',
    'https://x.com/nitintf_',
  ],
  knowsAbout: [
    'Software Engineering',
    'Web Development',
    'System Design',
    'AI Agents',
    'TypeScript',
    'React',
    'Go',
    'Rust',
  ],
  description:
    'Senior software engineer building web, mobile, and backend systems. Creator of Dicta, an on-device voice-to-text app for macOS.',
};

export function blogPostingSchema(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Nitin Panwar',
      url: siteUrl,
    },
    url: `${siteUrl}/logs/${post.slug}`,
  };
}
