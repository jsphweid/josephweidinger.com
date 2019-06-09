module.exports = {
  siteMetadata: {
    name: 'Joseph Weidinger',
    tagline: 'Joseph Weidinger - developer, creator'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-79560675-1',
        head: true
      }
    }
  ]
}
