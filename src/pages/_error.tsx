import { NextPage, NextPageContext } from 'next'

type Props = {
  statusCode: number
}

const Error: NextPage<Props> = ({ statusCode }): JSX.Element => (
  <h1>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </h1>
)

Error.getInitialProps = ({ res, err }: NextPageContext): Props => {
  const statusCode: number = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
