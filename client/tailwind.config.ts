import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '91': '91%',
      },
      height: {
        '600': '600px',
        '400': '400px',
        '1800': '1800px'
      },
      colors: {
        'title-color': '#7A20D5',
        'light-title': '#9F77F6'
      },
      fontFamily: {
        'press-start': ['PressStart2P', 'cursive'],
        'pretendard': ['PretendardVarible', 'font-awesome'],
        'lexendZetta': ['LexendZetta-Black', 'font-awesome']
      },
      backgroundImage: {
        main: "url('../../public/imgs/IMG_2434.jpeg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
