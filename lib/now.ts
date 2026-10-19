import { ampd, promptomato } from '@/lib/links';
import type { Rich } from '@/lib/rich-text';

export const now: Rich[] = [
  [
    'work is ',
    ampd,
    '. we make batteries that replace diesel generators, and i build the software around them. most days that means the customer app people use to watch their sites, the kafka and mqtt pipelines that bring in a reading from every device every second, and the backend that turns it all into something you can look at.',
  ],
  [
    "after work i'm building two apps of my own. ",
    promptomato,
    ' lives in the mac notch: you hold fn and talk to write anywhere, it takes notes from your calls, and a small tomato nudges you when you drift. budly is a calm habit app for ios and android. a sprout called bud copies what you do, and after about 66 days a habit is learned and a new leaf grows. budly is coming soon.',
  ],
  [
    "i'm learning go and what happens closer to the metal, picking up rust for systems side projects, and building ai agents with langchain and langgraph. i keep coming back to operating systems, networking, and tools that stay out of the way.",
  ],
  [
    "outside of all that it's football, running as much as i can, and travelling anywhere with mountains. on a slow day it's a game i'll never finish, a good movie, or chai and doing nothing.",
  ],
];

export const nowCaption =
  'the goal is to one day find work-life balance with the same grace bruce lee finds ping pong balls with a pair of nunchucks.';
