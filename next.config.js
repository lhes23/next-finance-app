/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ["images.unsplash.com", "lh3.googleusercontent.com"]
  },
  env: {
    GITHUB_APP_CLIENT_ID: process.env.GITHUB_APP_CLIENT_ID,
    GITHUB_APP_CLIENT_SECRET: process.env.GITHUB_APP_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  }
}

module.exports = nextConfig
