import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '400',
      ]
    },
    {
      name: 'Playfair Display',
      styles: [
        '400i',
        '900',
      ],
    },
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  bodyFontFamily: ["Lato", "sans-serif"],
  headerFontFamily: [
    "Playfair Display",
    "serif",
  ],
  headerWeight: '900',
})

export default typography