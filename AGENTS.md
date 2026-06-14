# gravitytech

## Cursor Cloud specific instructions

This repo is the **GravityTech Software** marketing website: a single client-side
**React 19 + Vite 8** app with no backend, database, or external services. Form
submissions persist to browser `localStorage` (`src/storage.js`), so no API keys
or `.env` are needed.

- **Single service**: the Vite dev server. Run it with `npm run dev`; it serves
  on `0.0.0.0:4173` (not Vite's usual 5173 — this is set explicitly in
  `package.json`). Open `http://localhost:4173/`.
- **Build / verify**: `npm run build` (alias: `npm run check`). There is **no
  lint script and no test suite** — `check` just runs the production build.
- **Multi-page app**: there are 4 HTML entry points (`index.html`, `about.html`,
  `careers.html`, `job-openings.html`) wired up in `vite.config.js`. Routing is
  client-side via React Router, with legacy `*.html` URLs redirected in-app.
- **Node**: requires Node 20.19+/22.12+ for Vite 8 (Node 22 is used here).
- End-to-end testing is just loading the site in a browser and exercising pages
  and forms (e.g. submitting the homepage project inquiry form shows a "saved
  locally" toast).
