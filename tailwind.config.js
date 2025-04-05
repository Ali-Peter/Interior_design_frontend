/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'unit': ['"Engravers MT"', 'serif'],
        'monica': ['monica-ext-font_YIBBBFG', 'sans-serif'],
        'PermanentMarker': ['Permanent Marker', 'cursive'],
      },
    },
  plugins: [],
}
}