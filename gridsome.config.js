// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Aqua Entertainment",
  siteDescription:
    "Aqua Entertainment is a bowling alley located in Los Banos, California. Bowling leagues, events, and refreshments are all available!",
  siteUrl: "https://www.aquaent.net",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        shouldPurge: false
      }
    },
    {
      use: "@gridsome/plugin-sitemap"
    }
  ]
};
