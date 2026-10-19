import { ampd, promptomato } from '@/lib/links';
import type { Rich } from '@/lib/rich-text';

export const intro: Rich[] = [
  [
    "i'm nitin, a full-stack engineer from india. i've spent 5+ years building web, mobile and backend systems, and these days i work at ",
    ampd,
    ' on clean energy software.',
  ],
  [
    "on the side i build my own apps for the web, the mac and phones. right now that's ",
    promptomato,
    ", and budly, which is coming soon. off the screen i'm chasing footballs, running, or somewhere in the mountains. see what i'm doing ",
    { text: 'now', href: '/now' },
    '.',
  ],
];
