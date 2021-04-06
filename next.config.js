require('dotenv').config();
const withImages = require('next-images')
const withPlugins = require("next-compose-plugins");
const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass')

module.exports = withPlugins([withImages, withFonts], {
  async redirects() {
    return [
      {
        source: '//',
        destination: '/',
        permanent: true,
      },
    ];
  },
  env: {
    CF_SPACE_ID: process.env.CF_SPACE_ID,
    CF_DELIVERY_ACCESS_TOKEN: process.env.CF_DELIVERY_ACCESS_TOKEN,
    CF_PREVIEW_ACCESS_TOKEN: process.env.CF_PREVIEW_ACCESS_TOKEN,
  },
})