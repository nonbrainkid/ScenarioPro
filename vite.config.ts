import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main:          path.resolve(__dirname, "index.html"),
        analysis:      path.resolve(__dirname, "analysis.html"),
        visualization: path.resolve(__dirname, "visualization.html"),
        aiAssistant:   path.resolve(__dirname, "ai-assistant.html"),
        about:         path.resolve(__dirname, "about.html"),
      },
    },
  },
});
