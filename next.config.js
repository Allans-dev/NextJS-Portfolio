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
        // hostname: "instagram.fsaw2-1.fna.fbcdn.net",
      },
    ],
    domains: ["instagram.fsaw2-1.fna.fbcdn.net"],
  },
};

module.exports = nextConfig;
