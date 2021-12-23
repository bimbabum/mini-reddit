import {configureStore} from '@reduxjs/toolkit'
import searchTerm from '../features/search/searchBarSlice'
import subReddits from '../features/subReddits/subRedditsSlice'

export default configureStore({
    reducer: {
        searchTerm,
        subReddits,
    }
})