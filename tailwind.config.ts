import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './node_modules/react-json-formatter/**/*.js'],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
