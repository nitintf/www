import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';

function Video({
  src,
  caption,
  autoPlay = false,
}: {
  src: string;
  caption?: string;
  autoPlay?: boolean;
}) {
  return (
    <figure className="my-8">
      <div className="relative rounded-lg overflow-hidden border border-neutral-800/60 bg-neutral-900">
        <video
          src={src}
          controls
          autoPlay={autoPlay}
          loop={autoPlay}
          muted={autoPlay}
          playsInline
          className="w-full block"
        />
      </div>
      {caption && (
        <figcaption className="text-neutral-600 text-xs mt-3 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt?: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div className="relative rounded-lg overflow-hidden border border-neutral-800/60 bg-neutral-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || caption || ''}
          className="w-full block"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="text-neutral-600 text-xs mt-3 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export const mdxComponents: MDXComponents = {
  Video,
  Figure,
  h1: (props) => (
    <h1
      className="text-neutral-300 font-medium text-base mt-10 mb-4 tracking-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      id={slugify(props.children)}
      className="text-neutral-300 font-medium text-sm mt-10 mb-3 tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      id={slugify(props.children)}
      className="text-neutral-400 font-medium text-sm mt-6 mb-2"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-neutral-500 text-sm leading-relaxed mt-4 [&:first-child]:mt-0"
      {...props}
    />
  ),
  a: (props) => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 underline decoration-neutral-700 underline-offset-2 hover:decoration-wavy hover:text-neutral-300 transition-colors"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="text-neutral-400 font-medium" {...props} />
  ),
  em: (props) => <em className="text-neutral-400 italic" {...props} />,
  code: (props) => {
    // If inside a <pre>, rehype-pretty-code handles it — don't add inline styles
    const isInline = typeof props.children === 'string';
    if (!isInline) return <code {...props} />;
    return (
      <code
        className="text-neutral-400 bg-neutral-800/60 border border-neutral-800 px-1.5 py-0.5 rounded text-[0.8em] font-mono"
        {...props}
      />
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <div className="relative mt-5 mb-5">
      <pre
        className="bg-[#0c0c0c] border border-neutral-800/80 rounded-lg py-4 overflow-x-auto text-[0.8rem] leading-relaxed font-mono"
        {...props}
      >
        {children}
      </pre>
    </div>
  ),
  img: (props) => (
    <figure className="my-8">
      <div className="relative rounded-lg overflow-hidden border border-neutral-800/60 bg-neutral-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full block"
          alt={props.alt || ''}
          loading="lazy"
          {...props}
        />
      </div>
      {props.alt && props.alt !== '' && (
        <figcaption className="text-neutral-600 text-xs mt-3 text-center italic">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
  ul: (props) => (
    <ul
      className="text-neutral-500 text-sm mt-4 space-y-2 pl-4 list-none [&>li]:relative [&>li]:pl-4 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-neutral-700"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="text-neutral-500 text-sm mt-4 space-y-2 pl-4 list-decimal list-inside [&>li]:pl-1"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l border-neutral-700 pl-4 mt-6 mb-6 text-neutral-500 text-sm italic [&>p]:mt-0"
      {...props}
    />
  ),
  hr: () => (
    <hr className="border-none h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-10" />
  ),
  table: (props) => (
    <div className="mt-6 mb-6 overflow-x-auto rounded-lg border border-neutral-800/80">
      <table className="w-full text-sm text-left" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead
      className="bg-neutral-800/30 text-neutral-400 text-xs uppercase tracking-wider"
      {...props}
    />
  ),
  tbody: (props) => (
    <tbody className="divide-y divide-neutral-800/50" {...props} />
  ),
  tr: (props) => (
    <tr className="hover:bg-neutral-800/20 transition-colors" {...props} />
  ),
  th: (props) => <th className="px-4 py-3 font-medium" {...props} />,
  td: (props) => <td className="px-4 py-3 text-neutral-500" {...props} />,
};

function slugify(children: unknown): string {
  if (typeof children === 'string') {
    return children
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  return '';
}
