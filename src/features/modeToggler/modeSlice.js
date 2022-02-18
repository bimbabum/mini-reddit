import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: 'mode',
    initialState: ()=> {
        const theme = window.localStorage.getItem('theme')
        if (theme) {
            return theme
        }
        return 'light'
    },
    reducers: {
        toggleMode: (state,action) => {
            const setMode = (mode) => {
                window.localStorage.setItem('theme', mode)
                state = mode
            }
            state === 'light'? setMode('dark') : setMode('light')
            return state
        }
    }
})

export const {toggleMode} = modeSlice.actions
export default modeSlice.reducer
