import React, { useEffect } from 'react'
import Post from './Post'
import { useSelector,useDispatch } from 'react-redux'
import { loadPosts } from './PostsSlice'

export default function Posts(){
    const {posts, isLoading, isError} = useSelector(state => state.posts)
    const sub = useSelector(state => state.subReddits.activeSubReddit.name)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadPosts(sub))
    },[dispatch, sub])

    if (isLoading) {
        return (
            <div style={{textAlign: 'center'}}>
                <img src='./img/loading.gif' alt='loading...' />
            </div>
        )
    }

    if (isError) {
        return <div role="alert">An unexpected error occurred. Please try again later.</div>
    }

    return (
        <>
            {posts.map((post,index) => <Post post={post} key={index}/>)}
        </>
    )
}