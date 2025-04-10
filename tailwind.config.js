/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
      dropShadow: {
        'figma': '0 0 24px rgba(0, 0, 0, 0.17)',
      }
    },
  },
  plugins: [],
};
