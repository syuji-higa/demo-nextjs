/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require('next/constants')

const env = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used of STAGING environmental variable
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

  console.log(`isDev:${isDev}  isProd:${isProd}  isStaging:${isStaging}`)

  const env = {
    RESTURL: (() => {
      // if (isDev) return 'http://localhost:4000/'
      if (isDev) return 'https://httpbin.org/'
      if (isProd) return 'https://httpbin.org/'
      if (isStaging) return 'http://localhost:11639'
      return 'RESTURL: not (isDev, isProd && !isStaging, isProd && isStaging)'
    })()
  }

  return { env }
}

module.exports = env
