import {type Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#b5f18d",
          "secondary": "#12917c",
          "accent": "#44b7e8",
          "neutral": "#244309",
          "base-100": "#080f02",
        },
      },
    ],
  },
} satisfies Config;