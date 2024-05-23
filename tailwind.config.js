import tailwindScrollbarHide from 'tailwind-scrollbar-hide';


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "50px"
        }
      },
      fontFamily: {
        'ESRebondGrotesqueTRIAL-ExtraBold': ['"ESRebondGrotesqueTRIAL-ExtraBold"', 'sans-serif'],
        'ESRebondGrotesqueTRIAL-Medium': ['"ESRebondGrotesqueTRIAL-Medium"', 'sans-serif'],
        'ESRebondGrotesqueTRIAL-Ligth': ['"ESRebondGrotesqueTRIAL-Ligth"', 'Ligth'],
      },
      colors:{
        
      },
      class: {
        'section-before': 'content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle, transparent 30%, rgba(0, 0, 0, 0.8) 70%); z-index: -1;'
      }
    }
  },
  plugins: [tailwindScrollbarHide],
};