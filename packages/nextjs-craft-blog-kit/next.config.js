const withTM = require('next-transpile-modules')(['react-craft-x'])

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  basePath: "/craft-blog"
})

module.exports = nextConfig
