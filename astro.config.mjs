import { defineConfig } from "astro/config";

// The marketing site (cleanracer.com), served by GitHub Pages. Every page keeps its old URL (a folder with an index.html).
export default defineConfig({
  site: "https://cleanracer.com",
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
