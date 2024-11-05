/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Scans all files in `src` for Tailwind classes
    "./public/**/*.html", // Scans any HTML files in `public`
    "./pages/**/*.{html,js,jsx,ts,tsx}", // For Next.js projects or projects with a `pages` directory
    "./components/**/*.{html,js,jsx,ts,tsx}", // For component files in a `components` folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
