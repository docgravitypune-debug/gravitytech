import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ScrollManager from "./components/ScrollManager.jsx";
import Toast from "./components/Toast.jsx";
import { routes } from "./routes.js";

const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const CareersPage = lazy(() => import("./pages/CareersPage.jsx"));
const ClientsPage = lazy(() => import("./pages/ClientsPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const JobOpeningsPage = lazy(() => import("./pages/JobOpeningsPage.jsx"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.jsx"));

const routeTitles = {
  [routes.home]: "GravityTech Software | Software Delivery Partner",
  [routes.services]: "Services | GravityTech Software",
  [routes.projects]: "Projects | GravityTech Software",
  [routes.about]: "About Us | GravityTech Software",
  [routes.clients]: "Clients | GravityTech Software",
  [routes.careers]: "Careers | GravityTech Software",
  [routes.jobs]: "Job Openings | GravityTech Software",
  [routes.contact]: "Contact | GravityTech Software",
};

export default function App() {
  const [toast, setToast] = useState("");
  const toastTimer = useRef();
  const location = useLocation();

  useEffect(() => {
    document.title = routeTitles[location.pathname] || routeTitles[routes.home];
  }, [location.pathname]);

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 4200);

    return () => window.clearTimeout(toastTimer.current);
  }, [toast]);

  const showToast = (message) => setToast(message);

  return (
    <>
      <ScrollManager />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.services} element={<ServicesPage />} />
          <Route path={routes.projects} element={<ProjectsPage />} />
          <Route path={routes.about} element={<AboutPage />} />
          <Route path={routes.clients} element={<ClientsPage />} />
          <Route path={routes.careers} element={<CareersPage showToast={showToast} />} />
          <Route path={routes.jobs} element={<JobOpeningsPage />} />
          <Route path={routes.contact} element={<ContactPage showToast={showToast} />} />
          <Route path="/index.html" element={<Navigate replace to={routes.home} />} />
          <Route path="/about.html" element={<Navigate replace to={routes.about} />} />
          <Route path="/careers.html" element={<Navigate replace to={routes.careers} />} />
          <Route path="/job-openings.html" element={<Navigate replace to={routes.jobs} />} />
          <Route path="*" element={<Navigate replace to={routes.home} />} />
        </Routes>
      </Suspense>
      <Toast message={toast} />
    </>
  );
}

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span />
      Loading GravityTech...
    </div>
  );
}
