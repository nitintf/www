// Copy with inline links, kept as data so the same words render as the page
// and as markdown for agents.
export type Rich = (string | { text: string; href: string })[];
