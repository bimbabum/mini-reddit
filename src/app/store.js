import {configureStore} from '@reduxjs/toolkit'
import searchTerm from '../features/search/searchBarSlice'
import subReddits from '../features/subReddits/subRedditsSlice'
import posts from '../features/posts/PostsSlice'
import comments from '../features/posts/commentsSlice'

export default configureStore({
    reducer: {
        searchTerm,
        subReddits,
        posts,
        comments
    }
})