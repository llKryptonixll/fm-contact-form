/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        green_200: "hsl(148, 38%, 91%)",
        green_600: "hsl(169, 82%, 27%)",
        very_dark_green: "hsl(169, 82%, 13%)",
        red: "hsl(0, 66%, 54%)",
        white: "hsl(0, 0%, 100%)",
        grey_500: "hsl(186, 15%, 59%)",
        grey_900: "hsl(187, 24%, 22%)",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"]
      },
      padding: {
        main_padding: "1.5rem",
        form_padding: "2.25rem",
      },
      margin: {
        modal_margin: "1.5rem"
      }
    },
  },
  plugins: [],
}