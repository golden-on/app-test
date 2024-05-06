import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'BigTitles': "'MonumentExtended', sans-serif",
        'SubTitles': "'SatoshiBold', sans-serif",
        'pragraphs': "'SatoshiRegular', sans-serif",
      },
      width: {
        '47p' : "47%",
        '67%': "67%",
        '69%': "69%",
        '947px': "947px",
        '9.4%': '9.4%'
      },
      fontSize: {
        'fs-15': "15px",
        'fs-17': "17px",
        'fs-18': "18px",
        'fs-52': "52px",
        'fs-38': "29px",
        'fs-30': "30px",
        'fs-68': "68px",
        'fs-21': "21px",
      },
      lineHeight: {
        'lh-110': "110%",
        'lh-50px': "50px",
        'lh-34px': "34px",
        'lh-35px': "35px"
      },
      colors: {
        "cards": "#13171D",
        "horizonCard": "rgb(19 23 29 / 49%)"
      },
      spacing: {
        "vl": '400px',
        '485px': "485px",
        '210px': "210px",
        "124px": "124px",
        "150px": "150px",
        "170px": "170px",
        "15%": "15%",
        "89%": "89%",
        "72px": "72px",
        "74%": "74%",
        "84%": "84%",
        "60%": "60%",
        "60px": "60px",
        "66%": "66%",
        "35px": "35px",
        "45px": "45px",
        "42px": "42px",
        "50px": "50px",
        "53%": "53%",
        "58px": "58px"
      }
    },
  },
  plugins: [],
};
export default config;
