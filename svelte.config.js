import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      "@/*": "./path/to/lib/*",
      "@src/*": "./src",
    },
    adapter: adapter(),
  },
};

export default config;
