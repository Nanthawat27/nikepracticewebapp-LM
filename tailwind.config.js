/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // ขนาดหน้าจอสำหรับ xs
        'sm': '640px', // ขนาดหน้าจอสำหรับ sm
        'md': '960px', // ขนาดหน้าจอสำหรับ md
        'lg': '1024px', // ขนาดหน้าจอสำหรับ lg
        'xl': '1200px', // ขนาดหน้าจอสำหรับ xl
        '2xl': '1536px', // ขนาดหน้าจอสำหรับ 2xl
        '3xl': '1920px' // ขนาดหน้าจอสำหรับ 3xl
      },
    },
  },
  plugins: [],
}

