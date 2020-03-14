import * as React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'
import Counter from '~/components/pages/home/Counter'

export default {
  title: 'Pages/Home',
  decorators: [withKnobs]
}

export const counter = (): JSX.Element => {
  const initialCount = number('initialCount', 0)

  return <Counter initialCount={initialCount} />
}
