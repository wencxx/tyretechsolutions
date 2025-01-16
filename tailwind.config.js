/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "blueberry": '#0041C2'
      },
      fontFamily: {
        "Inter": "Inter, sans-serif"
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}

