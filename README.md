# GravityTech Software React Website

A complete React + Vite website for GravityTech Software. The site presents
client software services, real-time project work, technology project tracks, and
a careers page for applicants interested in Java, Python, data analytics, and
web/full-stack project experience.

## Pages

- `/` or `index.html` - landing page, services, dynamic project catalog,
  process, and project inquiry form.
- `/careers.html` - career/project-work tracks, application form, local
  application history, and FAQ.

## React structure

- `src/main.jsx` - React entry point.
- `src/App.jsx` - page components, forms, navigation, cards, and dynamic UI.
- `src/data.js` - project, service, process, and career track data.
- `src/storage.js` - local-storage helpers for demo submissions.
- `assets/styles.css` - shared responsive styling.
- `assets/logo.svg` and `assets/favicon.svg` - GravityTech brand assets.

## Features

- Responsive GravityTech-branded layout.
- React state for dynamic project filtering by technology track.
- Data-driven React career cards.
- Local-storage demo forms for project inquiries and career applications.
- Mobile navigation and animated hero counters.
- SVG logo and favicon included in `assets/`.

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