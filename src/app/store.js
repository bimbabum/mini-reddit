import {configureStore} from '@reduxjs/toolkit'
import searchTerm from '../features/search/searchBarSlice'
import subReddits from '../features/subReddits/subRedditsSlice'
import posts from '../features/posts/PostsSlice'
import comments from '../features/posts/commentsSlice'
import mode from '../features/modeToggler/modeSlice'

export default configureStore({
    reducer: {
        mode,
        searchTerm,
        subReddits,
        posts,
        comments
    }
})