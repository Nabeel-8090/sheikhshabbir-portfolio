/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0D10',
          panel: '#12171C',
          raised: '#181F26',
          line: '#26303A',
        },
        paper: {
          DEFAULT: '#ECE6D8',
          dim: '#C9C2B2',
        },
        steel: {
          DEFAULT: '#93A0AB',
          dim: '#5C6770',
        },
        blue: {
          DEFAULT: '#6FA0C2',
          dim: '#3E6B8C',
          deep: '#1F3A4D',
        },
        brass: {
          DEFAULT: '#C9974F',
          light: '#E2B873',
          dim: '#8A6936',
        },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(rgba(110,140,160,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(110,140,160,0.06) 1px, transparent 1px)',
        'grid-major':
          'linear-gradient(rgba(110,140,160,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(110,140,160,0.10) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-fine': '24px 24px',
        'grid-major': '120px 120px',
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      boxShadow: {
        panel: '0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -24px rgba(0,0,0,0.6)',
        brass: '0 0 0 1px rgba(201,151,79,0.4), 0 18px 40px -16px rgba(201,151,79,0.25)',
      },
      keyframes: {
        draw: {
          to: { strokeDashoffset: 0 },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        },
      },
      animation: {
        draw: 'draw 2.4s ease forwards',
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        blink: 'blink 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
