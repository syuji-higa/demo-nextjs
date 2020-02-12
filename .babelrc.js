// Eliminate "styled component" error
// https://github.com/zeit/next.js/issues/7423#issuecomment-536779745

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }]
  ]
}
