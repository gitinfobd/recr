/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.recr.edu.bd' },
    ],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
