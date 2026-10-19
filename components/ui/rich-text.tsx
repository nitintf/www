import { TextLink } from '@/components/ui/text-link';
import type { Rich } from '@/lib/rich-text';

export function RichText({ value }: { value: Rich }) {
  return value.map((part, i) =>
    typeof part === 'string' ? (
      part
    ) : (
      <TextLink key={i} href={part.href}>
        {part.text}
      </TextLink>
    ),
  );
}
