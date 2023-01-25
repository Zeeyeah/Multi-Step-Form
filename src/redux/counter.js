import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice ({
  name: 'counter',
  initialState: {
    count: {
      selected: true
    }
  },
  reducers: {
    increment: (state) => {
        state.count.selected = false
    }
  }

})

export const {increment} = stateSlice.actions
export default stateSlice.reducer;