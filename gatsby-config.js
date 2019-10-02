module.exports = {
  siteMetadata: {
    title: `Bastien Chevallier`,
    description: `Bastien Chevallier - Full Stack Developer - Portfolio`,
    author: `Bastien Chevallier`,
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
        name: `Bastien Chevallier`,
        short_name: `Bastien`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-ts-loader",
      options: {
        tslint: true,
      },
    },
    {
      resolve: "gatsby-plugin-intl",
      options: {
        path: `${__dirname}/src/locales`,
        languages: ["en", "fr"],
        defaultLanguage: "en",
        redirect: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\/images\/.+\.svg$/,
        },
      },
    },
  ],
};
