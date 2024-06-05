/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      gilroy: ['Gilroy','sans-serif'],
      mangolian: ['Mongolian Baiti'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'shadow-background': "url('./src/assets/92oIvh8uL8Iyhp89pwF8mxVAFUvabeZBlfAIvykBvMJ60Ub86Z4uX08v6vY68eNsXrlmTS1wqCwg2+MMa1t_0xzmwNOQ1I7avsOFsWnO5MdJ3kPlNV+cpGxidvaz3SIg2GT7+kXtzDiwyJ7pmp5FLb.svg')",
      }
    },
  },
  plugins: [],
}