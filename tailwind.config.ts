import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5B8DEF',
          secondary: '#0EA5E9',
          dark: '#0B1220',
          light: '#F8FAFC',
        }
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(2,6,23,0.15)',
      },
    },
  },
  plugins: [],
}
export default config
