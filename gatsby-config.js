module.exports = {
  siteMetadata: {
    title: `SIQ 2019`,
    description: `A Semana Internacional de Quadrinhos da UFRJ, que acontecerá entre os dias 2 a 5 de maio, no Campus Praia Vermelha da UFRJ, apresenta uma programação voltada para os apaixonados e estudiosos das histórias em quadrinhos.`,
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
