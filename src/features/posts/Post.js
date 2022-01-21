import  './Post.css'
import styled from 'styled-components'
import {useState} from 'react'
import Media from './Media'
import { roundNumber, timeAgo } from '../../utilities/utilities'
import Comments from './Comments'
import { useSelector,useDispatch} from 'react-redux'
import { loadCommentsByPost } from './commentsSlice'

const Button = styled.button`
    border: 1px solid rgb(252, 224, 228);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    background-color: ${props => props.showComments ? 'rgb(252, 224, 228)' : 'rgb(250, 241, 242)'};
`

export default function Post({post}){
    const [showComments, setShowComments] = useState(false)
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments.comments[post.permalink] ? state.comments.comments[post.permalink]: null)

    const handleLoadComments = () => {
        setShowComments(showComments => !showComments)
        if (!comments) dispatch(loadCommentsByPost(post.permalink))
    }

    return (
        <div className='postContainer'>
            <div className='post-header'>
                <span style={{fontWeight: 'bold'}}>{post.subreddit_name_prefixed}</span>
                <span>Posted by u/{post.author}</span>
                <span>{timeAgo(post.created_utc)}</span>
            </div>
            <a href={`https://www.reddit.com/${post.permalink}`} target='_blank' rel="noreferrer"><h2>{post.title}</h2></a>
            <Media post={post}/>
                {/* {post.post_hint? <p style={{color: 'red'}}>Post hint: {post.post_hint}</p> : null}
                {post.media_metadata? <p>Media metadata</p>: null} */}
            <div className='post-footer'>
                <button><img src='./img/up_icon.png' alt='votes'/><span>{roundNumber(post.ups)}</span></button>
                <Button onClick={handleLoadComments} showComments={showComments}><img src='./img/comment_icon.png' alt='comments:' /><span>{roundNumber(post.num_comments-1)}</span></Button>
                {(showComments && !comments)? <img src='./img/spinner.gif' alt='loading...' className='loading'/>: null}
            </div>
            <Comments comments={comments} showComments={showComments}/>
        </div>
    )
}