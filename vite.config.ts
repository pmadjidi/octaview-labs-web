import { defineConfig } from "vite";

// Relative base so the built assets resolve both on the GitHub Pages
// project subpath (/octaview-labs-web/) and on the Firebase root domain.
export default defineConfig({
  base: "./",
});
