const globImporter = require("node-sass-glob-importer")
module.exports = {
  siteMetadata: {
    title: `Sadiyah Ali`,
    description: `My personal website and blog.`,
    author: `@5adiyah`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        importer: globImporter(),
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`100`, `300`, `400`, `700`, `900`],
          },
          {
            family: `Playfair Display`,
            variants: [`400`, `500`, `600`, `700`, `800`, `900`],
          },
          {
            family: `Heebo`,
            variants: [`100`, `300`, `400`, `500`, `600`, `700`, `800`, `900`],
          },
          {
            family: `Advent Pro`,
            variants: [`400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [ `jobs`],
        queryLimit: 1000,
      },
    },
  ],
}
