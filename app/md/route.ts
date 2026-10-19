import { homeMarkdown } from '@/lib/agent-view';
import { markdownResponse } from '@/lib/utils/markdown';

export const dynamic = 'force-static';

export function GET() {
  return markdownResponse(homeMarkdown());
}
