'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function parseHeadings(content: string): TocItem[] {
  const items: TocItem[] = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    items.push({ id, text, level: match[1].length });
  }

  return items;
}

export default function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState<string>('');
  const headings = useMemo(() => parseHeadings(content), [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      className="toc hidden xl:block fixed left-[max(1rem,calc(50%-40rem))] top-32 w-48"
      aria-label="Table of contents"
    >
      <Link
        href="/logs"
        className="log-back-nav-inline"
        aria-label="Back to logs"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        <span>logs</span>
      </Link>
      <p className="text-neutral-600 text-[0.65rem] uppercase tracking-widest mb-3 mt-6 font-medium">
        On this page
      </p>
      <ul className="space-y-0.5 list-none border-l border-neutral-800/60">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`toc-link ${level === 3 ? 'pl-6' : 'pl-3'} ${activeId === id ? 'active' : ''}`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
