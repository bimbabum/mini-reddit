import PostsReducer from '../PostsSlice'

test('returns initial state',()=>{
    const newState = PostsReducer(undefined,{})
    const expectedState = {
        posts: [],
        isLoading: false,
        isError: false
    }

    expect(newState).toEqual(expectedState)
})
