import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CareersPage from "./pages/CareersPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import JobOpeningsPage from "./pages/JobOpeningsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import Toast from "./components/Toast.jsx";
import { routes } from "./routes.js";

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
      <Toast message={toast} />
    </>
  );
}
