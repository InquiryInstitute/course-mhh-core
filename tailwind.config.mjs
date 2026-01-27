/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        s0: { primary: '#f59e0b' },    // amber - Electric Sheep
        s1: { primary: '#06b6d4' },    // cyan - Voight-Kampff
        s2: { primary: '#f43f5e' },    // rose - More Human Than Human
        surface: {
          DEFAULT: '#18181b',
          dark: '#09090b',
        },
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        body: ['"EB Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
