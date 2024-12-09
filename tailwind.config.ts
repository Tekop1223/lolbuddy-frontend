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
        'container-color': '#3f3f3f',
        'background-color': '#2a2a2a',
        'recentGames-color': '#1C1B1B',
      },
    },
  },
  plugins: [],
} satisfies Config;
