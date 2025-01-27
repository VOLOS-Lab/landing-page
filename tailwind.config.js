/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beeper: {
          purple: '#6E56CF',
          'purple-light': '#F5F3FF',
          'purple-dark': '#4339CA',
        },
        footer: {
          dark: '#000000',
        }
      },
      fontSize: {
        'sm': ['14px', '1.5'],
        'base': ['16px', '1.5'],
        'lg': ['20px', '1.4'],
        'xl': ['24px', '1.3'],
        '2xl': ['32px', '1.2'],
        '4xl': ['48px', '1.1'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        'card': '24px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'button': '0 1px 2px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      maxWidth: {
        'card': '360px',
      },
    },
  },
  plugins: [],
}
