module.exports = {
  content: ["./imports/ui/**/*.{js,jsx,ts,tsx}", "./client/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
