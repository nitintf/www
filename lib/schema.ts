import { SITE_DESCRIPTION, SITE_URL as siteUrl } from '@/lib/constants';

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nitin Panwar',
  url: siteUrl,
  jobTitle: 'Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Ampd Energy',
    url: 'https://www.ampd.energy',
  },
  sameAs: [
    'https://github.com/nitintf',
    'https://www.linkedin.com/in/nitin-panwarr/',
    'https://x.com/nitinpanwarrr',
  ],
  knowsAbout: [
    'Software Engineering',
    'Full-stack Development',
    'React Native',
    'Real-time Data Pipelines',
    'Web Development',
    'System Design',
    'AI Agents',
    'TypeScript',
    'React',
    'Go',
    'Rust',
  ],
  description: SITE_DESCRIPTION,
  nationality: { '@type': 'Country', name: 'India' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Meerut Institute of Engineering and Technology',
  },
};
