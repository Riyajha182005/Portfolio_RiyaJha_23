/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep rich plum/charcoal slate dark theme
        background: '#181419',
        'theme-bg': '#181419',
        plum: {
          950: '#110D12',
          900: '#181419',
          850: '#1F1921',
          800: '#261F29',
          750: '#2E2431',
          700: '#3A2E39',
          600: '#4E3E4D',
          500: '#685466',
        },
        // Glowing rose-gold accents (#E0A96D / #F43F5E)
        gold: {
          DEFAULT: '#E0A96D',
          300: '#F5CCA0',
          400: '#EBB985',
          500: '#E0A96D',
          600: '#C98D52',
        },
        'rose-gold': '#E0A96D',
        'rose-glow': '#F43F5E',
        'rose-blush': '#E0A96D',
        'primary-rose': '#E0A96D',
        'warm-taupe': '#E0A96D',
        'taupe-accent': '#E0A96D',
        'taupe': {
          DEFAULT: '#E0A96D',
          accent: '#E0A96D',
          light: '#F5CCA0',
          dark: '#C98D52',
        },
        // Soft muted rose borders (#3A2E39)
        border: {
          muted: '#3A2E39',
          rose: '#3A2E39',
        },
        'rose-muted': '#3A2E39',
        // High-contrast clear text (#FAF5F7, #EDE4E7, #C7B8BF)
        text: {
          primary: '#FAF5F7',
          secondary: '#EDE4E7',
          muted: '#C7B8BF',
        },
        charcoal: {
          DEFAULT: '#FAF5F7',
          text: '#FAF5F7',
          muted: '#C7B8BF',
          light: '#A3929C',
          dark: '#181419',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.65), 0 0 25px -4px rgba(224, 169, 109, 0.28)',
        'glow-gold': '0 0 20px -3px rgba(224, 169, 109, 0.35)',
        'glow-rose': '0 0 20px -3px rgba(244, 63, 94, 0.35)',
      },
    },
  },
  plugins: [],
};
