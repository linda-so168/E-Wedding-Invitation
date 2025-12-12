export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       keyframes: {
    fade: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    slideUp: {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    slideDown: {
      "0%": { opacity: 0, transform: "translateY(-20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
  animation: {
    fade: "fade 1.2s ease forwards",
    slideUp: "slideUp 1s ease forwards",
    slideDown: "slideDown 1s ease forwards",
  },
    },
  },
  plugins: [],
};

