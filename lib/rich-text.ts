// Copy with inline links, kept as data so the same words render as the page
// and as markdown for agents. A `location` part opens the map of where I am.
export type Rich = (
  | string
  | { text: string; href: string }
  | { text: string; location: true }
)[];
