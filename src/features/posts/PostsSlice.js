import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async(name) =>{
        const json = await fetch(`https://www.reddit.com/r/${name}.json`)
        return json.children
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
