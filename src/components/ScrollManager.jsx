import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { normalizeLegacyPath } from "../routes.js";

export default function ScrollManager() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const normalizedPath = normalizeLegacyPath(location.pathname);

    if (normalizedPath !== location.pathname) {
      navigate(`${normalizedPath}${location.hash}`, { replace: true });
      return;
    }

    if (location.hash) {
      const target = document.querySelector(location.hash);

      if (target) {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.hash, location.pathname, navigate]);

  return null;
}
