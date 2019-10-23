const withDefaults = require(`./utils/default-options`);

module.exports = themeOptions => {
  const options = withDefaults(themeOptions);
  const { mdx = true } = themeOptions;

  return {
    siteMetadata: {
      siteTitle: `C's archive`,
      siteTitleAlt: `C's archive`,
      siteHeadline: `C's archive`,
      siteUrl: `https://csarchive.netlify.com`,
      siteDescription: `This is Chihiro Ohba's portfolio site.`,
      siteLanguage: `ja`,
      siteImage: `/banner.jpg`,
      author: ``,
      basePath: options.basePath,
      projectsPath: options.projectsPath
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.projectsPath,
          path: options.projectsPath
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: options.assetsPath,
          path: options.assetsPath
        }
      },
      mdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {}
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-typescript`
    ].filter(Boolean)
  };
};
