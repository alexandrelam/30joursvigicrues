module.exports = {
  pathPrefix: "/30joursvigicrues",
  siteMetadata: {
    title: `30 jours Vigicrues`,
    description: `Récupérez les données de Vigicrues facilement !`,
    author: `@alexandrelam`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
