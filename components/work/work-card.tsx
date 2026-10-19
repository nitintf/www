import { CARD_TEXTURES } from '@/components/work/constants';
import { ScenePauseProvider } from '@/components/work/scene-pause';
import { WorkScene } from '@/components/work/work-scene';
import type { ProjectSlug } from '@/lib/work';

export function WorkCard({
  slug,
  paused = false,
}: {
  slug: ProjectSlug;
  paused?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`@container relative aspect-[10/7] leading-[1.25] w-full overflow-hidden rounded-[var(--theme-radius-card)] border border-line bg-card ${CARD_TEXTURES[slug]}`}
    >
      <ScenePauseProvider value={paused}>
        <WorkScene slug={slug} />
      </ScenePauseProvider>
    </div>
  );
}
