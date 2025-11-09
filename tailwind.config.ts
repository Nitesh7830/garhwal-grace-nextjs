import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b91c1c',
        primaryDark: '#7a1c1c',
        accent: '#fcd34d',
        light: '#fffaf0'
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.10)',
        card: '0 10px 30px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
}
export default config