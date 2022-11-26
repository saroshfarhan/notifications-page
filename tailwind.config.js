/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primRed: "hsl(1, 90%, 64%)",
        primBlue: "hsl(219, 85%, 26%)",
        vlGrayBlue: "hsl(210, 60%, 98%)",
        lGrayBlue: {
          100: "hsl(211, 68%, 94%)",
          200: "hsl(205, 33%, 90%)",
        },
        grayishBlue: "hsl(219, 14%, 63%)",
        dGrayBlue: "hsl(219, 12%, 42%)",
        vdBlue: "hsl(224, 21%, 14%)",
      },
    },
  },

  plugins: [],
};
