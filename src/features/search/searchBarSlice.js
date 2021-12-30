import {createSlice} from '@reduxjs/toolkit'

const searchBarSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state,action) => {
            return action.payload
        },
        clearSearchTerm: (state,action) =>{
            return ''
        }
    }
})

export default searchBarSlice.reducer
export const { setSearchTerm, clearSearchTerm} = searchBarSlice.actions

