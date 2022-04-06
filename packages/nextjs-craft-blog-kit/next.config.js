const withTM = require('next-transpile-modules')(['react-craft-x'])

const basePath = process.env.BASE_PATH

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  basePath: basePath,
})

module.exports = nextConfig
