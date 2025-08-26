/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: [
    '-translate-y-8',
    'translate-y-0',
    'opacity-0',
    'opacity-100'
  ],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
        bebas: ['Bebas Neue', 'Oswald', 'Arial', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
        inter: ['Inter', 'sans-serif'],
        tiktok: ['TikTok Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        deepBlue: "#02042a",
        lightblue: "#2b84ea",
        lightblue300: "#4b94ed",
        lightblue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      }
    },
  },
  plugins: [],
};
