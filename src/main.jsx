import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles.css";

const rootElement = document.getElementById("root");
const page = rootElement?.dataset.page || "home";

createRoot(rootElement).render(
  <StrictMode>
    <App page={page} />
  </StrictMode>,
);
