/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        title: ['3px 3px 10px rgba(255,255,255,0.1)', '-2px 1px 10px #800080'],
      },
    },
  },
  plugins: [require('daisyui')],
}
