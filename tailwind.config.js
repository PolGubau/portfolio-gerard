import { poluiPlugin } from "pol-ui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/pol-ui/lib/**/*.js",
  ],
  plugins: [
    poluiPlugin({
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#f0f4ff",
          200: "#d9e3ff",
          300: "#a6c1ff",
          400: "#598bff",
          500: "#3366ff",
          600: "#274bdb",
          700: "#1a34b8",
          800: "#102694",
          900: "#091c7a",
        },
      },
    }),
  ],
};
