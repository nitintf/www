import { StatusLine } from '@/components/footer/status-line';
import { getStatus } from '@/lib/status';

export async function Footer() {
  const status = await getStatus();

  return (
    <footer
      className="w-full max-w-content mx-auto px-gutter pb-page-top"
      aria-label="Site footer"
    >
      <StatusLine status={status} />
    </footer>
  );
}
