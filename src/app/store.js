import {configureStore} from '@reduxjs/toolkit'
import searchTerm from '../features/search/searchBarSlice'

export default configureStore({
    reducer: {
        searchTerm
    }
})