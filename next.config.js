/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      resourceQuery: /raw/,
      type: "asset/source",
    });
    config.module.rules.push({
      test: /\.html$/,
      resourceQuery: { not: [/raw/] },
      type: "asset/source",
    });
    return config;
  },
};

module.exports = nextConfig;
