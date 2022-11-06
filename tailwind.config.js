/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: ["col-span-1", "col-span-2", "col-span-3", "col-span-4", "col-span-5", "col-span-6"],
};
