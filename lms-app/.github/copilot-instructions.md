# AI Agent Instructions for LMS App

## Project Overview

This is a Learning Management System (LMS) built with Next.js 16.0.0 using the App Router pattern. The project uses TypeScript and TailwindCSS for styling.

## Architecture & Structure

- `/app` - Core application using Next.js App Router architecture
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Main landing page component
  - `globals.css` - Global styles including Tailwind directives

## Key Technologies & Patterns

- **Framework**: Next.js 16.0.0 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: TailwindCSS with custom Geist font configuration
- **Code Style**: ESLint with Next.js recommended config

## Development Workflow

1. **Local Development**

   ```bash
   npm run dev    # Start development server at http://localhost:3000
   ```

2. **Type Checking**

   - TypeScript is configured for strict mode
   - Run `tsc` to check types without emitting files

3. **Linting**

   ```bash
   npm run lint   # Run ESLint checks
   ```

4. **Building for Production**
   ```bash
   npm run build  # Create production build
   npm run start  # Start production server
   ```

## Conventions & Patterns

1. **Font Usage**:

   - Use `--font-geist-sans` CSS variable for regular text
   - Use `--font-geist-mono` CSS variable for monospace text

2. **Component Architecture**:

   - Follow Next.js App Router conventions for routing and layouts
   - Place page components in appropriate app directory segments

3. **Styling**:
   - Use Tailwind classes directly in components
   - Global styles should be added to `globals.css`

## Integration Points

- Production deployments are configured for Vercel platform
- Fonts are loaded via `next/font` integration with Google Fonts
