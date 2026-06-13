import { useEffect, useRef, useState } from "react";
import CareersPage from "./pages/CareersPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Toast from "./components/Toast.jsx";

export default function App({ page }) {
  const [toast, setToast] = useState("");
  const toastTimer = useRef();

  useEffect(() => {
    document.title =
      page === "careers"
        ? "Careers | GravityTech Software"
        : "GravityTech Software | Futuristic Client Project Lab";
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
      {page === "careers" ? <CareersPage showToast={showToast} /> : <HomePage showToast={showToast} />}
      <Toast message={toast} />
    </>
  );
}
