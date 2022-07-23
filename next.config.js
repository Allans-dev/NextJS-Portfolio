/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
    // domains: [
    //   "media.wired.com",
    //   "cdn.vox-cdn.com",
    //   "blogger.googleusercontent.com",
    //   "cdn.arstechnica.net",
    //   "www.reuters.com",
    //   "cdn.mos.cms.futurecdn.net",
    //   "i.guim.co.uk",
    //   "i0.wp.com",
    //   "images.macrumors.com",
    //   "assets.entrepreneur.com",
    //   "a.fsdn.com",
    //   "i.insider.com",
    // ],
  },
};

module.exports = nextConfig;
