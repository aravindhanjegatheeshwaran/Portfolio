# Aravindhan J — Portfolio Website

Personal portfolio built with **Vite + React + TypeScript + Tailwind CSS**, deployed as a free
Static Site on [Render](https://render.com).

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Before You Go Live — Checklist

### 1. Copy your resume PDF

Copy `Aravindhan.pdf` (already in the project root) to the assets folder:

```
public/assets/Aravindhan.pdf
```

This makes it available at `/assets/Aravindhan.pdf` for the download button.

### 2. Update your contact details

Edit `src/data/profile.ts` and replace the placeholder values:

```ts
contact: {
  email: 'your.real@email.com',
  github: 'https://github.com/your-actual-username',
  linkedin: 'https://linkedin.com/in/your-actual-profile',
},
```

### 3. Update stats (optional)

Also in `src/data/profile.ts`, update the `stats` array values to match reality.

### 4. Review project descriptions

All project content lives in `src/data/projects.ts`. Confirm descriptions, tech stacks, and
impact statements are accurate before deploying.

---

## Build

```bash
npm run build       # Type-checks + builds to dist/
npm run preview     # Preview the production build locally
```

---

## Deploy to Render (Free Static Site)

1. Push this project to a GitHub repository.
2. On [render.com](https://render.com), click **New → Static Site**.
3. Connect your GitHub repo.
4. Use these settings:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click **Deploy**. Render will give you a free `.onrender.com` URL.

The `render.yaml` in this repo pre-configures all of the above automatically if you use
Render's Blueprint (IaC) feature.

---

## Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg
│   └── assets/          ← Put Aravindhan.pdf here
├── src/
│   ├── data/
│   │   ├── profile.ts   ← Your name, contact, stats, summary
│   │   ├── projects.ts  ← All project case studies
│   │   └── skills.ts    ← Skill groups
│   ├── components/
│   │   ├── layout/      ← Navbar, Footer
│   │   ├── sections/    ← Hero, About, Skills, EmbeddedSystems, Projects, Contact
│   │   └── ui/          ← Badge, SectionHeader, ProjectCard
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── render.yaml          ← Render deployment config
└── package.json
```

---

## Customisation

- **Theme colours:** All dark background values (`#09090b`, `#0c0c0f`, `#111113`) and accent
  colour (`cyan-400`/`cyan-500`) are in Tailwind classes throughout the component files.
- **Sections order:** Change the section order in `src/App.tsx`.
- **Add a project:** Add a new entry to the `projects` array in `src/data/projects.ts`.
- **Add a skill:** Add items to any group in `src/data/skills.ts`.
