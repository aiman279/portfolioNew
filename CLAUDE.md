# portfolioNew — Project Instructions

Root workspace rules in the parent CLAUDE.md also apply. This file adds project-specific context only.

## Overview
Personal portfolio website: Hero, About, Projects, Contact, with dark/light mode and a 404 page.

## Stack
React 19, TypeScript ~5.8, Vite 7, Tailwind CSS 4, React Router 7, TanStack Query 5, shadcn/ui (Radix, `components.json`), sonner, next-themes. ESLint 9. npm.

## Commands
- `npm run dev`, `npm run build` (`tsc -b` then `vite build`), `npm run lint`, `npm run preview`
- No test runner. Verify with build and lint, and say so when reporting.

## Structure
- `src/components/`: Hero, About, Projects, Contact, Navigation, theme provider and toggle, `ui/` (shadcn)
- `src/contexts/ThemeContext.tsx`, `src/pages/` (Index, NotFound), `src/lib/utils.ts`

## Conventions
- Page content lives in the section components; keep sections self-contained.
- Reuse shadcn primitives in `src/components/ui/`. Follow existing patterns; no new dependencies without approval.

## Deployment
No deployment config in the repo. Do not deploy without approval.

## Repository
Own Git repo, remote `origin` on GitHub. No `.env` files present.
