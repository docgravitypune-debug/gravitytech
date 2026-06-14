import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ScrollManager from "./components/ScrollManager.jsx";
import Toast from "./components/Toast.jsx";
import { routes } from "./routes.js";

const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const CareersPage = lazy(() => import("./pages/CareersPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const JobOpeningsPage = lazy(() => import("./pages/JobOpeningsPage.jsx"));

const routeTitles = {
  "/": "GravityTech Software | Futuristic Client Project Lab",
  "/about": "About Us | GravityTech Software",
  "/careers": "Careers | GravityTech Software",
  "/job-openings": "Job Openings | GravityTech Software",
};

export default function App() {
  const [toast, setToast] = useState("");
  const toastTimer = useRef();
  const location = useLocation();

  useEffect(() => {
    document.title = routeTitles[location.pathname] || routeTitles["/"];
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
          <Route path={routes.home} element={<HomePage showToast={showToast} />} />
          <Route path={routes.about} element={<AboutPage />} />
          <Route path={routes.careers} element={<CareersPage showToast={showToast} />} />
          <Route path={routes.jobs} element={<JobOpeningsPage />} />
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
