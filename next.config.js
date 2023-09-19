const config = require('./config');

const nextConfig = {
  ...config,
  output: 'standalone',
}

module.exports = nextConfig;