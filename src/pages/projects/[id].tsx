import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Error from 'next/error'

type Props = {
  id: number
}

const Projects: NextPage<Props> = ({ id }) => {
  if (!id) {
    return <Error statusCode={404} />
  }

  return (
    <div>
      <Head>
        <title>Projects: {id} | Demo Next.js</title>
      </Head>
      <h1>Projects: {id}</h1>
    </div>
  )
}

Projects.getInitialProps = async ({
  query
}: NextPageContext): Promise<Props> => {
  const id = Number(query.id)

  return {
    id: Number.isFinite(id) ? id : null
  }
}

export default Projects
