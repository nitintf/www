# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking

## Project Architecture

This is a personal portfolio website built with Next.js 15 and the App Router. The project structure follows Next.js conventions:

### Key Technologies
- **Next.js 15** with App Router
- **TypeScript** with strict mode
- **Contentlayer** for MDX blog posts processing
- **Radix UI Themes** for UI components
- **Tailwind CSS** for styling
- **next-themes** for theme switching
- **Motion (Framer Motion)** for animations

### Content Management
- Blog posts are stored in `/writings/` as MDX files
- Contentlayer processes MDX files and generates type-safe data
- Each writing requires `title`, `date`, and `summary` frontmatter
- Content is served at `/writing/[slug]` routes

### Component Architecture
- Components are organized in `/src/components/`
- MDX components are in `/src/components/mdx/`
- Home page components are in `/src/components/home/`
- Uses Radix UI Themes with custom theming

### Styling
- Global styles in `/src/app/globals.css`
- Tailwind CSS with custom configuration
- Dark theme as default with theme switching capability
- Geist font family (sans and mono variants)

### Import Aliases
- `@/*` maps to `./src/*`
- `contentlayer/generated` maps to `./.contentlayer/generated`

### Code Quality
- ESLint with Next.js, TypeScript, and Prettier configurations
- Husky for git hooks
- lint-staged for pre-commit formatting
- TypeScript strict mode enabled