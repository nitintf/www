import { SITE_URL } from '@/lib/constants';
import type { Rich } from '@/lib/rich-text';

export function absoluteUrl(href: string) {
  return href.startsWith('/') ? `${SITE_URL}${href}` : href;
}

export function link(text: string, href: string) {
  return `[${text}](${absoluteUrl(href)})`;
}

export function richToMarkdown(value: Rich) {
  return value
    .map((part) =>
      typeof part === 'string' ? part : link(part.text, part.href),
    )
    .join('');
}

// Markdown twins are for agents, so search engines keep the real pages.
export function markdownResponse(body: string) {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
}
