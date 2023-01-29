import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["carrusel", "marca"],
  singleTypes: ["info-home"],
};

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.ahorro-seguros.com`,
  },
  graphqlTypegen: true,

  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon-page.webp",
      },
    },
    // "gatsby-plugin-top-layout",
  ],
};

export default config;
