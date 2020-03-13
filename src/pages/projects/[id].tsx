import { NextPage, GetServerSideProps } from 'next'
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = Number(query.id)

  const props: Props = {
    id: Number.isFinite(id) ? id : null
  }

  return { props }
}

export default Projects
