import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Midnight Neon Color Palette
        primary: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
        },
        accent: '#06B6D4',
        text: {
          dark: '#E5E7EB',
          light: '#0B0F19',
        },
        bg: {
          dark: '#0A0E17',
          light: '#F5F7FB',
        },
        surface: {
          dark: '#0F1626',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
