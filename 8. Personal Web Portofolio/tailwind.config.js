/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryTPlay: '#0f0f0f',
        secondaryTPlay: '#1f1b1e',
        _3rdColor: '#8325fc',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
