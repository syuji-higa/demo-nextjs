type FetchErrorDetail = {
  code: string
  message: string
}

export type FetchError = {
  status: number
  statusText: string
  error: FetchErrorDetail
}

export const formatNetworkError = (err): FetchError => {
  return {
    status: null,
    statusText: err.errno,
    error: {
      code: err.code,
      message: err.message
    }
  }
}

export const formatFetchError = (res: Record<string, any>): FetchError => {
  if (res && res?.status) {
    const { status } = res

    // when fetch success
    if (status === 200) {
      return null
    }

    // when fetch failed
    const { statusText, error } = res
    if (error) {
      return { status, statusText, error }
    }
  }

  // unknown error
  return {
    status: null,
    statusText: 'Unknown Error',
    error: {
      code: null,
      message: null
    }
  }
}
