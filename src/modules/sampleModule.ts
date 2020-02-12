import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Timestamp = {
  id: number
  timestamp: number
}

export type SampleState = {
  count: number
  timestampList: Timestamp[]
}

export const sampleInitialState: SampleState = {
  count: 0,
  timestampList: []
}

const sampleModule = createSlice({
  name: 'sample',
  initialState: sampleInitialState,
  reducers: {
    increment: (state): SampleState => {
      return {
        ...state,
        count: state.count + 1
      }
    },
    addTimestamp: (state, action: PayloadAction<number>): SampleState => {
      return {
        ...state,
        timestampList: [
          ...state.timestampList,
          {
            id: state.timestampList.length,
            timestamp: action.payload
          }
        ]
      }
    }
  }
})

export default sampleModule
