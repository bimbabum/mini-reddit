import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

function datatrimming(raw) {
    const trimmeddata = raw.map(post => ({
        subreddit_name_prefixed: post.subreddit_name_prefixed,
            author: post.author,
            created_utc: post.created_utc,
            title: post.title,
            ups: post.ups,
            num_comments: post.num_comments,
            post_hint: post.post_hint,
            selftext: post.selftext,
            self: post.self,
            url_overridden_by_dest: post.url_overridden_by_dest,
            media: {
                reddit_video: {
                    fallback_url: post.fallback_url
                }
            },
            url: post.url,
            thumbnail: post.thumbnail,
            permalink: post.permalink

    }))
    return trimmeddata
}

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async(name) =>{
        const response = await fetch(`https://www.reddit.com/r/${name}.json`)
        const json = await response.json()
        const data = json.data.children.map(postdata => postdata.data)
        return datatrimming(data)
    }
)

export const loadSearchResults = createAsyncThunk(
    'posts/loadSearchResults',
    async(searchTerm) => {
        const searchParams = searchTerm.split(' ').join('%20')
        const response = await fetch(`https://www.reddit.com/search.json?q=${searchParams}`)
        const json = await response.json()
        const data = json.data.children.map(postdata => postdata.data)
        return datatrimming(data)
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
        },

        [loadSearchResults.pending]: (state, action) => {
            state.isLoading = true
            state.isError = false
        },
        [loadSearchResults.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isError = false
            state.posts = action.payload
        },
        [loadSearchResults.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
        },
    }
})

export default postsSlice.reducer
