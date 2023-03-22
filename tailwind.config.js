/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/screens/**/*.{js,ts,jsx,tsx}'
    // './node_modules/@my-company/tailwind-components/**/*.{js,ts,jsx,tsx}', @tip: in case of using design system
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
