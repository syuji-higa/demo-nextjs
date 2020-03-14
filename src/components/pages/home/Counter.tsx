import * as React, { useState } from 'react'
import { NextPage } from 'next'
import DefaultButton from '~/components/modules/DefaultButton'
import styled from 'styled-components'

const ButtonList = styled.div`
  display: flex;
`

const Button = styled.div`
  margin-right: 10px;
`

type Props = {
  initialCount?: number
}

const Counter: NextPage<Props> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)

  const increment = (): void => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = (): void => {
    setCount((prevCount) => prevCount - 1)
  }

  const reset = (): void => {
    setCount(initialCount)
  }

  return (
    <section>
      <h2>Counter</h2>
      <p>
        Count: <span data-testid="count">{count}</span>
      </p>
      <ButtonList>
        <Button>
          <DefaultButton onClick={decrement}>-</DefaultButton>
        </Button>
        <Button>
          <DefaultButton onClick={increment}>+</DefaultButton>
        </Button>
        <Button>
          <DefaultButton onClick={reset}>reset</DefaultButton>
        </Button>
      </ButtonList>
    </section>
  )
}

export default Counter
