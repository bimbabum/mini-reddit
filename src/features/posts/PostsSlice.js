import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async(name) =>{
        const response = await fetch(`https://www.reddit.com/r/${name}.json`)
        const json = await response.json()
        const posts = json.data.children.map(postdata => postdata.data)
        return posts
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        isError: false
    },
    extraReducers: {
        [loadPosts.pending]: (state,action) =>{
            state.isLoading = true
            state.isError = false
        },
        [loadPosts.fulfilled]: (state,action) =>{
            state.isLoading = false
            state.isError = false
            state.posts = action.payload
        },
        [loadPosts.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = true
        }
    }
})

export default postsSlice.reducer
