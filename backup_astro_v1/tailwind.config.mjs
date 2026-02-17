/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-dark': '#1d4ed8',
        secondary: '#8b5cf6',
        accent: '#ec4899',
        success: '#16a34a',
        warning: '#d97706',
        danger: '#dc2626',
      },
      spacing: {
        sidebar: '280px',
        toc: '240px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'typewriter': 'typewriter 4s steps(40, end)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      maxWidth: {
        content: '780px',
      },
    },
  },
  safelist: [
    // Dark mode variants for interactive components
    'dark:bg-slate-900',
    'dark:bg-slate-800',
    'dark:text-slate-100',
    'dark:text-slate-200',
    'dark:border-slate-700',
    'dark:border-slate-600',
    'dark:hover:bg-slate-700',
    // Utility classes for different UI elements
    'bg-success',
    'bg-warning',
    'bg-danger',
    'text-success',
    'text-warning',
    'text-danger',
    'dark:bg-success/10',
    'dark:bg-warning/10',
    'dark:bg-danger/10',
  ],
  plugins: [],
};
