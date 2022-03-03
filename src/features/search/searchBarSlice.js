import {createSlice} from '@reduxjs/toolkit'
import { loadSearchResults } from '../posts/PostsSlice'

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

export const setSearchTermThunk = (term) => {
    return (dispatch) => {
        dispatch(setSearchTerm(term))
        dispatch(loadSearchResults(term))
    }
}

