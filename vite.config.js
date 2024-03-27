// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        producten: resolve(__dirname, "producten.html"),
        winkelmandje: resolve(__dirname, "winkelmandje.html"),
      },
    },
  },
});
