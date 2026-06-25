import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "site-src",
  base: "./",
  publicDir: false,
  plugins: [react()],
  server: {
    host: true
  },
  build: {
    outDir: "../.stage-dist",
    emptyOutDir: true,
    assetsDir: "assets"
  }
});
