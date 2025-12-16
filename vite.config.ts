import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync } from "fs";
import { join } from "path";

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
const copy404Plugin = () => ({
  name: "copy-404",
  closeBundle() {
    const distPath = join(__dirname, "dist");
    copyFileSync(
      join(distPath, "index.html"),
      join(distPath, "404.html")
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/pinchat/',
  server: {
    host: "::",
    port: 8080,
    open: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    copy404Plugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.mts', '.ts', '.mjs', '.js', '.tsx', '.jsx', '.json'],
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    force: true,
  },
}));
