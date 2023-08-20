import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1597e4",
        "primary-grey": "#7a7a7a",
        "secondary-grey": "#DADEDF",
        "primary-red": "#D86161",
        "primary-white": "#fafafa",
        "secondary-white": "#fffff",
        "prmary-dark": "#212121",
        "primary-border": "#E6E6E6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
