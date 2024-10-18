import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    currentStep: 0
}

export const playgroundSlice = createSlice ({
    name: "playground",
    initialState,
    reducers: {
        setCurrentStep: (state) => {
            state.currentStep += 1
        },
    }
})

export const { setCurrentStep } = playgroundSlice.actions

export default playgroundSlice.reducer