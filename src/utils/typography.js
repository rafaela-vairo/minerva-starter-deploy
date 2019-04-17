import Typography from 'typography'
import gray from "gray-percentage"
import MOBILE_MEDIA_QUERY from "typography-breakpoint-constants"

const typography = new Typography({
  title: 'Minerva',
  baseFontSize: '18px',
  baseLineHeight: 1.75,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Alegreya Sans',
      styles: ['700'],
    },
    {
      name: 'Alegreya Sans',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Alegreya Sans', 'sans-serif'],
  bodyFontFamily: ['Alegreya Sans', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,95)',
  bodyColor: 'hsla(0,0%,0%,0.95)',
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: "#222",
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid ${gray(80)}`,
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
})

export default typography
export const rhythm = typography.rhythm
