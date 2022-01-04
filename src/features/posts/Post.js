import  './Post.css'
import Media from './Media'
import { roundNumber, timeAgo } from '../../utilities/utilities'

export default function Post({post}){
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
                <img src='./img/up_icon.png' alt='votes'/><span>{roundNumber(post.ups)}</span> 
                <img src='./img/comment_icon.png' alt='comments'/><span>{roundNumber(post.num_comments)}</span>
            </div>
        </div>
    )
}