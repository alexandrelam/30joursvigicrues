module.exports = {
  pathPrefix: `/30joursvigicrues`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `30joursvigicrues`,
        short_name: `30joursvigicrues`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/wave-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
