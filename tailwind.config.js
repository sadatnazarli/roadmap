/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: theme('colors.gray.700'),
            h1: {
              fontFamily: 'Outfit, sans-serif',
              fontWeight: '800',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontFamily: 'Outfit, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              marginTop: '2em',
            },
            h3: {
              fontFamily: 'Outfit, sans-serif',
              fontWeight: '600',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              borderRadius: '0.375rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              borderColor: theme('colors.gray.200'),
              borderWidth: '1px',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
            code: {
              backgroundColor: theme('colors.gray.800'),
              borderColor: theme('colors.gray.700'),
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [],
}

