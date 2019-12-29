module.exports = {
  siteMetadata: {
    title: "Yony Dev",
    description: "Personal Blog by Yonatan Rojas",
    author: "@yonydev",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          urls: [
            "https://fonts.googleapis.com/css?family=Karla:400,700|Rubik:300,400,500,700,900&display=swap"
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            }
          },
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
}
