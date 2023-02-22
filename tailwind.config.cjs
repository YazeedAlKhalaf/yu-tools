/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        orange: "#F68939",
        "light-gray": "#EFEFEF",
        "dark-gray": "#1E1E1E",
      },
    },
  },
  plugins: [],
};
