import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "./createAppSlice"

export type Location =  'blank' | 'cover' | 'resume'

export interface AppSliceState {
  location: Location,
}

const initialState: AppSliceState = {
  location: 'cover',
}

export const appSlice = createAppSlice({
  name: "app",
  initialState,
  reducers: create => ({
    setLocation: create.reducer(
      (state, action: PayloadAction<Location>) => {
        state.location = action.payload
      },
    ),
  }),
  selectors: {
    selectLocation: app => app.location,
  },
})

export const { setLocation } = appSlice.actions
export const { selectLocation } = appSlice.selectors
