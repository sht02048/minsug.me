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
      spacing: {
        thin: "0.5px",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              marginLeft: 0,
              marginBottom: 32,
              fontWeight: 600,
              fontSize: "1rem",
            },
            h2: {
              margin: 0,
              fontSize: "1rem",
              fontWeight: 600,
              scrollMarginTop: "5rem",
            },
            p: {
              margin: 0,
              opacity: 90,
              lineHeight: 1.65,
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "p > code": {
              borderRadius: "0.375rem",
              borderWidth: "1px",
              borderColor: "#282826",
              backgroundColor: "#181817",
              padding: "2px 3.6px",
              fontSize: "0.8571429em",
              color: "#eeeeec",
              fontWeight: 400,
            },
            pre: {
              paddingRight: "1.5rem",
              paddingLeft: "1.5rem",
              backgroundColor: "var(--shiki-dark-bg)",
              color: "var(--shiki-dark)",
              border: "1px solid #374151",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
