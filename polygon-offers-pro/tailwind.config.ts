import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 500: '#7C3AED', 600: '#6D28D9' },
        accent: { 500: '#EF4FC7' },
        indigoish: { 500: '#6366F1' },
        mint: { 50: '#E8FFF5', 500: '#10B981' },
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(20,20,40,.15)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #7C3AED 0%, #EF4FC7 50%, #6366F1 100%)',
      }
    }
  },
  plugins: []
} satisfies Config