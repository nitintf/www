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
      <div className="relative rounded-lg overflow-hidden border border-ui-5 bg-ui-2">
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
        <figcaption className="text-ui-9 text-xs mt-3 text-center italic">
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
      <div className="relative rounded-lg overflow-hidden border border-ui-5 bg-ui-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || caption || ''}
          className="w-full block"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="text-ui-9 text-xs mt-3 text-center italic">
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
      className="text-ui-12 font-medium text-base mt-10 mb-4 tracking-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      id={slugify(props.children)}
      className="text-ui-12 font-medium text-sm mt-10 mb-3 tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      id={slugify(props.children)}
      className="text-ui-11 font-medium text-sm mt-6 mb-2"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-ui-11 text-sm leading-relaxed mt-4 [&:first-child]:mt-0"
      {...props}
    />
  ),
  a: (props) => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-ui-11 underline decoration-ui-7 underline-offset-2 hover:decoration-wavy hover:text-ui-12 transition-colors"
      {...props}
    />
  ),
  strong: (props) => <strong className="text-ui-12 font-medium" {...props} />,
  em: (props) => <em className="text-ui-11 italic" {...props} />,
  code: (props) => {
    // If inside a <pre>, rehype-pretty-code handles it — don't add inline styles
    const isInline = typeof props.children === 'string';
    if (!isInline) return <code {...props} />;
    return (
      <code
        className="text-ui-11 bg-ui-3 border border-ui-5 px-1.5 py-0.5 rounded text-[0.8em] font-mono"
        {...props}
      />
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <div className="relative mt-5 mb-5">
      <pre
        className="bg-ui-2 border border-ui-5 rounded-lg py-4 overflow-x-auto text-[0.8rem] leading-relaxed font-mono"
        {...props}
      >
        {children}
      </pre>
    </div>
  ),
  img: (props) => (
    <figure className="my-8">
      <div className="relative rounded-lg overflow-hidden border border-ui-5 bg-ui-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full block"
          alt={props.alt || ''}
          loading="lazy"
          {...props}
        />
      </div>
      {props.alt && props.alt !== '' && (
        <figcaption className="text-ui-9 text-xs mt-3 text-center italic">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
  ul: (props) => (
    <ul
      className="text-ui-11 text-sm mt-4 space-y-2 pl-4 list-none [&>li]:relative [&>li]:pl-4 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-ui-8"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="text-ui-11 text-sm mt-4 space-y-2 pl-4 list-decimal list-inside [&>li]:pl-1"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l border-ui-7 pl-4 mt-6 mb-6 text-ui-10 text-sm italic [&>p]:mt-0"
      {...props}
    />
  ),
  hr: () => (
    <hr className="border-none h-px bg-gradient-to-r from-transparent via-ui-6 to-transparent my-10" />
  ),
  table: (props) => (
    <div className="mt-6 mb-6 overflow-x-auto rounded-lg border border-ui-5">
      <table className="w-full text-sm text-left" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead
      className="bg-ui-3 text-ui-11 text-xs uppercase tracking-wider"
      {...props}
    />
  ),
  tbody: (props) => <tbody className="divide-y divide-ui-4" {...props} />,
  tr: (props) => <tr className="hover:bg-ui-3 transition-colors" {...props} />,
  th: (props) => <th className="px-4 py-3 font-medium" {...props} />,
  td: (props) => <td className="px-4 py-3 text-ui-11" {...props} />,
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
