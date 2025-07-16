'use client';

import { HeadingProps } from '@radix-ui/themes';
import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import './mdx.css';

import { Pre } from './code';
import { MdxHeading } from './headings';

export const mdxComponents: MDXComponents = {
  pre: Pre,
  h1: (props) => <MdxHeading as="h1" size="6" {...(props as HeadingProps)} />,
  h2: (props) => <MdxHeading as="h2" size="5" {...(props as HeadingProps)} />,
  h3: (props) => <MdxHeading as="h3" size="4" {...(props as HeadingProps)} />,
  h4: (props) => <MdxHeading as="h4" size="3" {...(props as HeadingProps)} />,
  h5: (props) => <MdxHeading as="h5" size="2" {...(props as HeadingProps)} />,
  h6: (props) => <MdxHeading as="h6" size="1" {...(props as HeadingProps)} />,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return <Component components={mdxComponents} />;
}
