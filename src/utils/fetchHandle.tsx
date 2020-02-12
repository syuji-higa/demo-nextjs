import { Request } from 'node-fetch'
import unfetch from 'isomorphic-unfetch'
import { stringify } from 'query-string'
import {
  FetchError,
  formatNetworkError,
  formatFetchError
} from '~/utils/fetchErrorFormatter'

type FetchOptions<T extends Request> = {
  params: T
}

type QueryParams = Record<string, any>

type FetchRequest = {
  queryParams: Record<string, any>
  requestOptions: Request
}

type FetchResponse = {
  data: Record<string, any>
  err: FetchError
}

const createFetchRequestData = (options: Record<string, any>): FetchRequest => {
  const { params, body } = options

  if (params) {
    delete options.params
  }

  const queryParams: QueryParams = params || null

  const requestOptions: Request = body
    ? { ...options, body: JSON.stringify(body) }
    : options

  return { queryParams, requestOptions }
}

const createFetchUrl = (
  endPoint: string,
  params: Record<string, any>
): string => {
  const query = stringify(params)
  return `${endPoint}?${query}`
}

// NOTE: for "get" method, set "options.params" to "query"
export const fetch: <T>(
  endPoint: string,
  options?: FetchOptions<T>
) => Promise<FetchResponse> = async (endPoint, options) => {
  const { queryParams, requestOptions } = createFetchRequestData(options)
  const url = queryParams ? createFetchUrl(endPoint, queryParams) : endPoint

  const { res, err } = await unfetch(url, requestOptions)
    .then((res) => {
      return { res, err: formatFetchError(res) }
    })
    .catch((err) => {
      return { res: null, err: formatNetworkError(err) }
    })

  if (err) {
    return { data: null, err }
  }

  const data = await res.json()

  return { data, err: null }
}
