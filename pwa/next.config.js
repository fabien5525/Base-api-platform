/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
