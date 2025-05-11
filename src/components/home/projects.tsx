import { Box, Text, Heading, Flex, Badge } from '@radix-ui/themes';
import Link from 'next/link';

interface ProjectItemProps {
  title: string;
  description: string;
  href?: string;
  tag?: string;
}

const ProjectItem = ({ title, description, href, tag }: ProjectItemProps) => {
  const projectTitleId = `${title.toLowerCase().replace(/\W+/g, '-')}-heading`;

  const titleElement = (
    <Heading as="h3" id={projectTitleId} size="3" weight="medium">
      {title}
    </Heading>
  );

  const titleWithLink = href ? (
    <Link
      href={href}
      className="writing-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {titleElement}
    </Link>
  ) : (
    titleElement
  );

  return (
    <Box asChild mb="6">
      <article aria-labelledby={projectTitleId}>
        <Flex align="center" gap="2" mb="1">
          {titleWithLink}
          {tag && (
            <Badge color="gray" variant="soft" style={{ alignSelf: 'center' }}>
              {tag}
            </Badge>
          )}
        </Flex>
        <Text size="3" color="gray" as="p">
          {description}
        </Text>
      </article>
    </Box>
  );
};

export const ProjectsSection = () => {
  const projects: ProjectItemProps[] = [
    {
      title: 'Layout app',
      description: 'A macOS app for seamless windows and app management.',
      href: 'https://github.com/nitintf/layout',
    },
    {
      title: 'Navi',
      description:
        'Command-line tool to generate shell commands and assist you using AI.',
      href: 'https://github.com/nitintf/navi',
    },
    {
      title: 'Zaars',
      description: 'Multivendor market place for ethnic clothes.',
      href: 'https://www.shopzaars.com/',
      tag: 'Freelance Project',
    },
  ];

  return (
    <section aria-labelledby="projects-heading">
      <Heading
        as="h2"
        id="projects-heading"
        size="4"
        weight="bold"
        mb="4"
        tabIndex={-1}
      >
        Projects
      </Heading>
      {projects.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </section>
  );
};
