import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          DEFAULT: "#007bff", // Your custom color here
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          // ... other shades if needed
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
