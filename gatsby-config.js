module.exports = {
  siteMetadata: { 
    title: `geopwa`,
    description: `Project 1`,
    author: `@ranjeet`,
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
        name: `geopwa`,
        short_name: `geopwa`,
        start_url: `/`,
        background_color: `#02b3e4`,
        theme_color: `#02b3e4`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.`
        legacy: true, // this will add apple-touch-icon links to <head>
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-react-leaflet'
  ],
}
