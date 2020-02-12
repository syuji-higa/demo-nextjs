import '@storybook/addon-console'
import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import 'sanitize.css'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})
