import { createSlice } from '@reduxjs/toolkit'

export const stepsReducer = createSlice({
    name: 'steps',
    initialState: {
        step: 1
    },
    reducers: {
        increment: (state) => {
            state.step = state.step + 1
        },
        decrement: (state) => {
            state.step = state.step- 1
        },
        setStep: (state, action) => {
            state.step = action.payload
        }
    }
})

export default stepsReducer.reducer
export const {increment, decrement, setStep} = stepsReducer.actions