import {createSlice} from '@reduxjs/toolkit'

const searchBarSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state,action) => {
            return action.payload
        }
    }
})

export default searchBarSlice.reducer
export const { setSearchTerm} = searchBarSlice.actions

