import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), db()],
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  }
});