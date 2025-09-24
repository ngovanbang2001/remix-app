import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config