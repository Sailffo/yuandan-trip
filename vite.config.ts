import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { CodeInspectorPlugin } from "@rdservices/aime-code-inspector";

export default defineConfig({
  base: './',
  plugins: [
    CodeInspectorPlugin({
      bundler: "vite",
    }),
    react(),
    // IMPORTANT: DO NOT REMOVE THIS!
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs", // 改成 docs
  },
});
