const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  safelist: ["active"],
  theme: {
    fontSize: {
      'sm': '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontWeight: {
      extraThin: "50",
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },

    fontFamily: {
      lato: ["Lato", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
      satoshiRegular: ["Satoshi", "sans-serif"],
      satoshiBlack: ["Satoshi", "sans-serif"],
      asap: ["Asap", "sans-serif"],
      helvetica: ["Helvetica", "sans-serif"],

      
    },

    screens: {
      'mobile': {'max': '475px', 'min': '320px'},
      'tablet': {'max': '1024px', 'min': '475px'},
      'desktop': {'max': '1440px', 'min': '1024px'},
      xs: "375px",

      ...defaultTheme.screens,
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },

    colors: {
      trustPartner: "#a7abb6",
      transparent: "transparent",
      primary: "#5540af",
      secondary: "#252426",
      white: "#ffffff",
      black: "#000000",
      blackTheme: "#070C17",
      card: "#F7ECFE",
      cardStroke: "#E2BBFB",
      Midnight:"#2b2b2b",
      yellow: "#f9e71c",
      lila: "#e6e5ec",
      orange: "#fad27b",
      baseColor: "#FD9C2A",
      paragraph: "#898D94",
      cardTestimonial: "#F4F4F4",
      "grey-10": "#6c6b6d",
      "grey-20": "#7c7c7c",
      "grey-30": "#919091",
      "grey-40": "#929293",
      "grey-50": "#f4f3f8",
      "grey-60": "#edebf6",
      "grey-70": "#d8d8d8",
      "hero-gradient-from": "rgba(85, 64, 174, 0.95)",
      "hero-gradient-to": "rgba(65, 47, 144, 0.93)",
      "blog-gradient-from": "#8f9098",
      "blog-gradient-to": "#222222",
    },

   
    container: {
      center: true,
      padding: {
        tablet: "45px",
        mobile: "20px",
      },
    },

    shadows: {
      default: "0 2px 18px rgba(0, 0, 0, 0.06)",
      md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
    },

    extend: {
      transitionDuration: {
        '750': '750ms',
        '400': '400ms',
      },
      inset: {
        '-full': '-100%',
        'full': '0',
      },
      colors: {
        'bgMenu': 'rgba(38, 38, 38, 0.85)',
        'dodgerblue': '#1E90FF',
      },
      spacing: {
        
        13: "3.25rem",
        15: "3.75rem",
        16: "16px",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        34: "8.5rem",
        42: "10.5rem",
        60: "60px",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
        204: "51rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
      },
      inset: {
        "2/5": "40%",
        '-full': '-100%',
        'full': '0',
      },
      backgroundImage: {
        headerBackground : "url('/src/assets/img/background-image.png')",
        headerBackgroundMobile : "url('/src/assets/img/background-image.png')",
        book : "url('/src/assets/img/book.png')",
        img1 : "url('/src/assets/img/img1.png')",
        img2 : "url('/src/assets/img/img2.png')",
        imgSquare1 : "url('/src/assets/img/img_square_1.png')",
        imgSquare2 : "url('/src/assets/img/img_square_2.png')",
        imgSquare3 : "url('/src/assets/img/img_square_3.png')",
        imgSquare4 : "url('/src/assets/img/img_square_4.png')",
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },

      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        marqueeLeftToRight: 'marqueeLeftToRight 25s linear infinite',
        marqueeLeftToRight2: 'marqueeLeftToRight2 25s linear infinite',
        carouselSlide: 'carouselSlide 3s ease-in-out infinite',
        navbarScroll: 'navbarScroll 0.3s ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },

        marqueeLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },

        marqueeLeftToRight2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },

        navbarScroll: {
        '0%': { backgroundColor: 'transparent' },
        '100%': { backgroundColor: '#FFFFFF' },
      },
      },
    },

    
  },
  plugins: [
    require('flowbite/plugin'),
    require('autoprefixer'),],
}

