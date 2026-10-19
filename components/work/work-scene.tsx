import { BudlyScene } from '@/components/work/projects/budly/budly-scene';
import { DictaScene } from '@/components/work/projects/dicta/dicta-scene';
import { EaselScene } from '@/components/work/projects/easel/easel-scene';
import { LayoutScene } from '@/components/work/projects/layout/layout-scene';
import { PromptomatoScene } from '@/components/work/projects/promptomato/promptomato-scene';
import type { ProjectSlug } from '@/lib/work';

const SCENES: Record<ProjectSlug, () => React.JSX.Element> = {
  promptomato: PromptomatoScene,
  budly: BudlyScene,
  dicta: DictaScene,
  layout: LayoutScene,
  easel: EaselScene,
};

export function WorkScene({ slug }: { slug: ProjectSlug }) {
  const Scene = SCENES[slug];
  return <Scene />;
}
