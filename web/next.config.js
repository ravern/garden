const dotenv = require("dotenv");
const path = require("path");
const merge = require("webpack-merge");

dotenv.config();

module.exports = {
  env: {
    COLLAB_API_URL: process.env.COLLAB_API_URL,
  },
  webpack: (config) => {
    return merge(config, {
      resolve: {
        alias: {
          "~": path.resolve(`${__dirname}/src`),
        },
      },
    });
  },
};
