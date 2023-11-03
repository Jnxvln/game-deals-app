const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "lib", "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.cloudflare.steamstatic.com",
      },
    ],
  },
};

module.exports = nextConfig;
