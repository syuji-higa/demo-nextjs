/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const { resolve } = require('path')
const env = require('./env')
const withOffline = require('next-offline')

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src')
    return config
  }
}

module.exports = (phase) => withOffline({ ...env(phase), ...nextConfig })
