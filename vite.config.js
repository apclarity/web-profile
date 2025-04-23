import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sass from "sass";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    NodeGlobalsPolyfillPlugin({
      buffer: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  server: {
    allowedHosts: [
      "bb96-2404-8000-1047-32b-484d-eacc-3da2-fb2f.ngrok-free.app", // tambahkan ngrok URL di sini
    ],
  },
});
