# GravityTech Software React Website

A complete professional React + Vite website for GravityTech Software. The site
presents client software services, real-time project work, technology project
tracks, uploaded Coditas-style design tokens, impact sections, animated
backgrounds, sliders, client reviews, proper client cards, and a careers page for applicants interested in
Java, Python, data analytics, React, and web/full-stack project experience.

## Pages

- `/` - landing page, services, dynamic project catalog,
  process, and project inquiry form.
- `/about` - about page with company story, values, stats, and delivery
  method.
- `/careers` - career/project-work tracks, application form, local
  application history, and FAQ.
- `/job-openings` - technical job openings board with search, filters, and
  role cards.

Legacy URLs such as `/careers.html`, `/about.html`, and `/job-openings.html`
redirect inside the React app for compatibility.

## React structure

- `src/main.jsx` - React entry point.
- `src/App.jsx` - small app shell that selects the current page.
- `src/routes.js` - route constants and legacy URL normalization.
- `src/pages/` - page-level React components for home, careers, and job
  openings.
- `src/components/` - shared components such as header, footer, brand, toast,
  animated background, animated section, and section headings.
- `src/sections/home/` - homepage sections including hero, services, project
  slider, impact stats, process, clients, CTA, and contact form.
- `src/sections/careers/` - careers page sections including hero, openings,
  life-at section, why-join image story, perks and benefits, highlights,
  application form, and FAQ.
- `src/sections/shared/` - shared testimonial/review slider.
- `src/hooks/` - custom React hooks.
- `src/utils/` - icon mapping and formatting helpers.
- `src/data.js` - project, service, client, review, process, career track, and
  job opening data.
- `src/storage.js` - local-storage helpers for demo submissions.
- `assets/styles.css` - shared responsive styling.
- `assets/logo.svg` and `assets/favicon.svg` - GravityTech brand assets.

## Features

- Professional responsive GravityTech-branded layout inspired by modern careers
  pages.
- Enterprise-style client-side routing with React Router so navigation opens
  pages without a full app reload.
- CSS tokens from the provided GravityTech style guide: dark pill navbar,
  pink/purple gradient sections, cyan-to-purple buttons, light cards, and dark
  rounded footer.
- Animated hero/background effects powered by Framer Motion.
- Swiper project slider and client review slider.
- Coditas-inspired impact stats and structured delivery/career journey sections.
- Dedicated job openings page for Java, Python, React, Data Analytics, QA,
  DevOps, full-stack, and documentation roles.
- About page and homepage about preview section.
- Live validation for contact and job application forms.
- Resume uploader on the career application form.
- Expanded perks and benefits grid with managed icons and staggered cards.
- React state for dynamic project filtering by technology track.
- Data-driven React career cards and service cards.
- Separate proper client section with animated client cards generated from
  `src/data.js`.
- Client review/testimonial section.
- Local-storage demo forms for project inquiries and career applications.
- Mobile navigation and animated hero counters.
- SVG logo and favicon included in `assets/`.
- Local SVG career illustrations in `assets/` for team/project imagery.

## Main packages

- React
- Vite
- React Router
- Framer Motion
- Swiper
- Lucide React

## Install dependencies

```bash
npm install
```

## Run locally in development

```bash
npm run dev
```

Then open `http://localhost:4173`.

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Verify

```bash
npm run check
```