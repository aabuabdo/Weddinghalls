import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "build", // Specify the 'build' folder as the output directory
  },
  plugins: [react()],
});
