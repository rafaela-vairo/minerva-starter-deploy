module.exports = {
  siteMetadata: {
    title: `Semana Internacional de Quadrinhos da UFRJ`,
    description: `Nascida como um evento internacional de Quadrinhos em 2016, a SIQ é hoje um verdadeiro encontro interdisciplinar de cultura pop aproximando mercado e academia ao promover no ambiente universitário palestras, oficinas, mesas redondas, exposições sobre quadrinhos, animação, cinema e literatura.`,
    author: `Equipe Web CoordCom/UFRJ`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
