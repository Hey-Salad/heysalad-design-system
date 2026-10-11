import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        catalog: "ui_kits/index.html",
        web: "ui_kits/web/index.html",
        mobile: "ui_kits/mobile/index.html",
      },
    },
  },
});
