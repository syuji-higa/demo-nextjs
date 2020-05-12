import * as React from 'react'
import App, { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { setupStore } from '~/store'
import { ThemeProvider } from 'styled-components'
import 'sanitize.css'
import TheNavigation from '~/components/common/TheNavigation'

export const reportWebVitals = (metric: any): void => {
  // These metrics can be sent to any analytics service
  console.log(metric)
}

const store = setupStore()
const theme = {}

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <TheNavigation />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default MyApp
