import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { withZephyr } from "vite-plugin-zephyr";

const mfConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./category-view": "./src/components/CategoryView.tsx",
    "./collection-view": "./src/components/ProductsView.tsx",
    "./detail-view": "./src/components/ProductView.tsx",
  },
  shared: ["react", "react-dom"],
};

export default defineConfig({
  plugins: [react(), withZephyr({ mfConfig })],
  experimental: {
    renderBuiltUrl() {
      return { relative: true };
    },
  },
  build: {
    target: "chrome89",
  },
});
