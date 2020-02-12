import React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import media from 'styled-media-query'

const Button = styled.button`
  padding: 15px 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  font-size: 18px;
  ${media.lessThan('medium')`
    width: 100%;
    font-size: 14px;
  `}
`

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const DefaultButton: NextPage<Props> = ({ children, onClick = null }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  )
}

export default DefaultButton
