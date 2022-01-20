import commentReducer, {loadCommentsByPost} from '../commentsSlice'

test('returns initial state when undefined', ()=>{
    const newState = commentReducer(undefined,{type:'', payload: '1'})
    const expectedState = {comments: {}, isLoading: false, isError: false}

    expect(newState).toEqual(expectedState)
})

test('add new comments to undefined state', ()=>{
    const payload = {
        link: 'link1',
        topComments: [{1: 'comment'},{2: 'comment'},{3: 'comment'}]
    }
    const newState = commentReducer(undefined, { type: loadCommentsByPost.fulfilled.type, payload})
    const expectedState = {
        comments:{link1: [{ 1: 'comment'}, { 2: 'comment' }, { 3: 'comment' }]},
        isLoading: false,
        isError: false
    }

    expect(newState).toEqual(expectedState)
})

test('add new comments to current state', ()=>{
    const currentState = {
        comments: { link1: [{ 1: 'comment' }, { 2: 'comment' }, { 3: 'comment' }] }
    }
    const payload = {
        link: 'link2',
        topComments: [{ 4: 'comment' }, { 5: 'comment' }, { 6: 'comment' }]
    }
    const newState = commentReducer(currentState, { type: loadCommentsByPost.fulfilled.type, payload })
    const expectedState = {
        comments: {
            link1: [{ 1: 'comment' }, { 2: 'comment' }, { 3: 'comment' }],
            link2: [{ 4: 'comment' }, { 5: 'comment' }, { 6: 'comment' }]
        },
        isLoading: false,
        isError: false
    }
    expect(newState).toEqual(expectedState)
})

