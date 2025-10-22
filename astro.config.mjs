import { defineConfig } from "astro/config";

export default defineConfig({
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  vite: {
    build: {
      cssCodeSplit: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
});
