/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'https://api.themoviedb.org',
      },
      {
        hostname: 'themoviedb.org',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

module.exports = nextConfig;
