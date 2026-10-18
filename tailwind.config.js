/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme Custom Colors requested
        background: '#FDF8F7',
        'theme-bg': '#FDF8F7',
        'primary-rose': '#E8C5C8',
        'primary-blush': '#E8C5C8',
        'rose-blush': '#E8C5C8',
        'warm-taupe': '#8C7A6B',
        'taupe-accent': '#8C7A6B',
        'charcoal-text': '#2D2B2A',
        charcoal: {
          DEFAULT: '#2D2B2A',
          text: '#2D2B2A',
          muted: '#5A5654',
          light: '#787371',
        },
        rose: {
          blush: '#E8C5C8',
          DEFAULT: '#E8C5C8',
          50: '#FDF9F9',
          100: '#F9ECEE',
          200: '#F3D8DB',
          300: '#E8C5C8',
          400: '#DCACB1',
          500: '#CE949A',
        },
        blush: {
          DEFAULT: '#E8C5C8',
          light: '#F3D8DB',
          dark: '#CE949A',
        },
        taupe: {
          DEFAULT: '#8C7A6B',
          accent: '#8C7A6B',
          50: '#F6F4F2',
          100: '#EDE9E5',
          200: '#DDD5CD',
          300: '#C5B7AB',
          400: '#A89788',
          500: '#8C7A6B',
          600: '#736355',
          700: '#5A4C41',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(140, 122, 107, 0.10)',
        'glass-hover': '0 16px 40px -8px rgba(140, 122, 107, 0.22)',
      },
    },
  },
  plugins: [],
};
