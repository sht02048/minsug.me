/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#111110",
        primary: "#eeeeec",
        secondary: "#b5b3ad",
      },
    },
  },
  plugins: [],
};
