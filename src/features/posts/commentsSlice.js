import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const loadCommentsByPost = createAsyncThunk(
    'comments/loadCommentsByPost',
    async(link) => {
        const response = await fetch(`https://www.reddit.com${link}.json`)
        const json = await response.json()
        const data = json[1].data.children.map(comments => comments.data)
        const topComments = data.slice(1, 5)
        const commentsByPost = {
            link,
            topComments
        }
        return commentsByPost
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {}
    },
    extraReducers: {
        // [loadCommentsByPost.loading]: (state,action) =>{
        //     state.comments[action.payload.link].isLoading = true
        //     state.comments[action.payload.link].isError = false
        // },
        [loadCommentsByPost.fulfilled] : (state,action) =>{
            state.comments[action.payload.link] = action.payload.topComments
            // state.comments[action.payload.link].isLoading = false
            // state.comments[action.payload.link].isError = false
        },
        // [loadCommentsByPost.rejected]: (state,action) =>{
        //     state.comments[action.payload.link].isLoading = false
        //     state.comments[action.payload.link].isError = true
        // }
    }
})

export default commentsSlice.reducer