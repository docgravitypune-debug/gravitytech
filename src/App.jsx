import { useEffect, useRef, useState } from "react";
import CareersPage from "./pages/CareersPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import JobOpeningsPage from "./pages/JobOpeningsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Toast from "./components/Toast.jsx";

export default function App({ page }) {
  const [toast, setToast] = useState("");
  const toastTimer = useRef();

  useEffect(() => {
    const titles = {
      careers: "Careers | GravityTech Software",
      jobs: "Job Openings | GravityTech Software",
      about: "About Us | GravityTech Software",
      home: "GravityTech Software | Futuristic Client Project Lab",
    };

    document.title = titles[page] || titles.home;
  }, [page]);

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
      {page === "about" ? (
        <AboutPage />
      ) : page === "jobs" ? (
        <JobOpeningsPage />
      ) : page === "careers" ? (
        <CareersPage showToast={showToast} />
      ) : (
        <HomePage showToast={showToast} />
      )}
      <Toast message={toast} />
    </>
  );
}
