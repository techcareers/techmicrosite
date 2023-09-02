/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  output: "standalone",
  images: {
    domains: ["techmicrositestorage.blob.core.windows.net"],
  },
};
