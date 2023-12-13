/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'https://api.themoviedb.org',
      },
    ],
  },
};

module.exports = nextConfig;
