# Portfolio — Project Guide

## What This Is

Personal portfolio website for Aravindhan J (Senior Software Engineer).
Static site: Vite + React + TypeScript + Tailwind CSS.
Deployed free on Render as a Static Site.

## Quick Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:5173
npm run build        # Type-check + production build → dist/
npm run preview      # Preview production build locally
```

## Customise Content

| What to change                                             | File                   |
| ---------------------------------------------------------- | ---------------------- |
| Name, email, GitHub, LinkedIn, resume path, stats, summary | `src/data/profile.ts`  |
| Project case studies, stack, impact, embedded detail       | `src/data/projects.ts` |
| Skill groups and items                                     | `src/data/skills.ts`   |
| Section order                                              | `src/App.tsx`          |

## Before Deploying

1. Copy `Aravindhan.pdf` → `public/assets/Aravindhan.pdf`
2. Update `src/data/profile.ts` contact fields (email, github, linkedin)
3. Run `npm run build` and verify no TypeScript errors
4. Push to GitHub → connect Render Static Site

## Render Settings

- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Config file: `render.yaml` (already present)

## Project Structure

```
src/
  data/          ← All content (profile, projects, skills)
  components/
    layout/      ← Navbar, Footer
    sections/    ← Hero, About, Skills, EmbeddedSystems, Projects, Contact
    ui/          ← Badge, SectionHeader, ProjectCard
  App.tsx
  main.tsx
public/
  assets/        ← Put Aravindhan.pdf here
render.yaml      ← Render deployment config
```
