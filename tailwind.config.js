/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // your Next.js app folder
    "./src/components/**/*.{js,ts,jsx,tsx}", // any components
    "./pages/**/*.{js,ts,jsx,tsx}" // optional if using pages folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};