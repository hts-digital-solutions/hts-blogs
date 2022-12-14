/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: false,
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
});

module.exports = nextConfig;
