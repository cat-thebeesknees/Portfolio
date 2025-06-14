// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.docx'],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://cat-thebeesknees.github.io/Portfolio/",
  plugins: [react()],
  assetsInclude: ["**/*.docx"],
  build: {
    outDir: "dist",
  },
});
