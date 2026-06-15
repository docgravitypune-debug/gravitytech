import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        careers: resolve(__dirname, "careers.html"),
        jobs: resolve(__dirname, "job-openings.html"),
        services: resolve(__dirname, "services.html"),
        projects: resolve(__dirname, "projects.html"),
        clients: resolve(__dirname, "clients.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
