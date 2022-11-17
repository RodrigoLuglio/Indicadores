/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green_lightest: "#EFF4F4",
        green_light: "#0994A7",
        green_mid: "#195457",
        green_mid2: "#388286",
        green_aqua: "#01D7DF",
        green_dark: "#0B3C3F",
        orange: "#EE7416",
      },
      backgroundImage: () => ({
        login: "url('/imgs/login-bg.jpg')",
        boxlogin: "url('/imgs/boxlogin-bg.jpg')",
      }),
      fontFamily: {
        gotham: "Gotham",
        gotham_medium: "Gotham Medium",
        gotham_bold: "Gotham Bold",
      }
    },
  },
  plugins: [],
};
