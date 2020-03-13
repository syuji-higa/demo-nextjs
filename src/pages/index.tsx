import { useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '~/components/pages/home/Counter'
import { fetch } from '~/utils/fetchHandle'
import sampleModule from '~/modules/sampleModule'

type Props = {
  fetchUrl: string
}

type FetchParams = {
  timestamp: number
  arr: string[]
}

const Home: NextPage<Props> = ({ fetchUrl }) => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.sample.count)
  const timestampList = useSelector((state) => state.sample.timestampList)

  const increment = (): Function => {
    return dispatch(sampleModule.actions.increment())
  }
  const addTimestamp = (timestamp): Function => {
    return dispatch(sampleModule.actions.addTimestamp(timestamp))
  }

  useEffect(() => {
    increment()
    addTimestamp(Date.now())
  }, [])

  return (
    <div>
      <Head>
        <title>Demo Next.js</title>
      </Head>
      <h1>Home</h1>
      <p>Fetch URL: {fetchUrl}</p>
      <p>Access Count: {count}</p>
      <p>Access Timestamp List:</p>
      <ul>
        {timestampList.map(({ id, timestamp }) => (
          <li key={id}>{timestamp}</li>
        ))}
      </ul>
      <Counter />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const params: FetchParams = {
    timestamp: Date.now(),
    arr: ['a', 'b', 'c']
  }
  const { data, err } = await fetch<FetchParams>(`${process.env.RESTURL}/get`, {
    params
  })

  if (err) {
    console.error(err.error.message)
  }

  const props: Props = {
    fetchUrl: data?.url || null
  }

  return { props }
}

export default Home
