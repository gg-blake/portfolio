/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "50": 'hsl(var(--color-primary-50))',
          "100": "hsl(var(--color-primary-100))",
          "200": "hsl(var(--color-primary-200))",
          "300": "hsl(var(--color-primary-300))",
          "400": "hsl(var(--color-primary-400))",
          "500": "hsl(var(--color-primary-500))",
          "600": "hsl(var(--color-primary-600))",
          "700": "hsl(var(--color-primary-700))",
          "800": "hsl(var(--color-primary-800))",
          "900": "hsl(var(--color-primary-900))"
        },
      },
    },
  },
  plugins: [],
}