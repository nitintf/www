import { Section } from '@/components/layout/section';
import { MoreProjects } from '@/components/work/more-projects';
import { WorkIndex } from '@/components/work/work-index';
import { WorkStrip } from '@/components/work/work-strip';
import { WorkStructuredData } from '@/components/work/work-structured-data';
import { projects } from '@/lib/work';

export function WorkSection() {
  return (
    <Section title="work">
      <WorkStructuredData projects={projects} />
      <WorkStrip projects={projects} />
      <WorkIndex projects={projects} />
      <MoreProjects />
    </Section>
  );
}
