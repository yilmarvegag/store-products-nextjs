/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['cdn.pixabay.com', 'pixabay.com', 'api.slingacademy.com']
  }
}

module.exports = nextConfig
