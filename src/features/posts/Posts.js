import Post from './Post'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadPosts } from './PostsSlice'

export default function Posts(){
    const posts = useSelector(state => state.posts.posts)
    const sub = useSelector(state => state.subReddits.activeSubReddit.name)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadPosts(sub))
    },[dispatch, sub])

    return (
        <>
            {posts.map(post => <Post post={post} key={post.ups}/>)}
        </>
    )
}