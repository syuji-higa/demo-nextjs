import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import DefaultButton from '~/components/modules/DefaultButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Modules/Buttons',
  decorators: [withKnobs]
}

export const defaultButton = (): JSX.Element => {
  const children = text('children', 'Sample')

  return <DefaultButton onClick={action('clicked')}>{children}</DefaultButton>
}
