export const routes = {
  about: "/about",
  careers: "/careers",
  clients: "/clients",
  contact: "/contact",
  home: "/",
  jobs: "/job-openings",
  projects: "/projects",
  services: "/services",
};

export function normalizeLegacyPath(pathname) {
  const legacyRoutes = {
    "/about.html": routes.about,
    "/careers.html": routes.careers,
    "/index.html": routes.home,
    "/job-openings.html": routes.jobs,
  };

  return legacyRoutes[pathname] || pathname;
}
