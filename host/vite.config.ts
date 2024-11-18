import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { withZephyr } from "vite-plugin-zephyr";

const mfConfig = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    remote: {
      name: "remote",
      entry: "http://localhost:5174/remoteEntry.js",
      type: "module",
    },
  },
  shared: {
    react: {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
  },
};

export default defineConfig({
  plugins: [react(), withZephyr({ mfConfig })],
  build: {
    target: "chrome89",
  },
});
