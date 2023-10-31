import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@api", replacement: "/src/api" },
      { find: "@components", replacement: "/src/components" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@store", replacement: "/src/store" },
      { find: "@types", replacement: "/src/types" },
      { find: "@util", replacement: "/src/util" },
    ],
  },
});
