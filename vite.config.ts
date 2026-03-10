// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
  resolve: {
    alias: {},
  },
});
