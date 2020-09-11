module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var"],
        firacode: ["Fira Code"],
        raleway: ["Raleway"],
      },
      colors: {
        sapphire: '#263A7F',
        speech: '#3a59c2',
        forest: '#394783',
        space: '#3A477F',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
