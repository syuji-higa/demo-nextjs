import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

const ItemList = styled.ul`
  display: flex;
`

const Item = styled.li`
  margin-right: 20px;
`

const TheNavigation: NextPage = () => {
  return (
    <nav>
      <ItemList>
        <Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Item>
        <ProjectsLinkList />
      </ItemList>
    </nav>
  )
}

const ProjectsLinkList: NextPage = () => {
  const pids: string[] = ['1', '2', '3']

  return (
    <>
      {pids.map((pid) => (
        <Item key={pid}>
          <Link href="/projects/[id]" as={`/projects/${pid}`}>
            <a>Project: {pid}</a>
          </Link>
        </Item>
      ))}
    </>
  )
}

export default TheNavigation
