import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import Counter from '~/components/pages/home/Counter'

afterEach(cleanup)

describe('Counter', (): void => {
  it('initialize value is 0', (): void => {
    const { getByTestId } = render(<Counter />)
    const countEl = getByTestId('count')
    expect(countEl.textContent).toBe('0')
  })
  it.todo('increment when clicked "+" button')
  it.todo('decrement when clicked "-" button')
})
