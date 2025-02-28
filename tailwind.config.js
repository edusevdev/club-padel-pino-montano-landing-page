module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue,astro}",  // Asegúrate de incluir las rutas correctas para tu proyecto
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00008B',  // Color primario (anteriormente --color-primary)
        secondary: '#FFD700',  // Color secundario (anteriormente --color-secondary)
      },
    },
  },
  plugins: [],
}
