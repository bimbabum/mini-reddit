import  './Post.css'
import MarkDown from 'markdown-to-jsx'
import { roundNumber } from '../../utilities/utilities'

export default function Post({post}){
    let media
    const postHint = post.post_hint

    const handleOnClick = (e) => {
        e.target.style.maxHeight = 'none'
    }

    if (postHint) {
        if (postHint === 'image') {
            media = <img src={post.url_overridden_by_dest} alt='' /> 
        } else if (postHint === 'self') {
            media = <MarkDown className='postSelfText'>{post.selftext}</MarkDown>
        } else if (postHint === 'hosted:video') {
            media = <video controls autoPlay muted className='postVideo'><source src={post.media.reddit_video.fallback_url} type='video/mp4'/></video>
        } else if (postHint === 'rich:video') {
            media = <embed type='video/webm' src={post.url} style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
        } else if (postHint === 'link') {
            media = <a href={post.url} target='_blank' rel="noreferrer"><img src={post.thumbnail} alt=''/></a>
        }
    } else if (post.selftext) {
        media = <MarkDown className='postSelfText' onClick={(e)=>handleOnClick(e)}>{post.selftext}</MarkDown>
    }

    return (
        <div className='postContainer'>
            <div className='post-header'>
                <span style={{fontWeight: 'bold'}}>{post.subreddit_name_prefixed}</span>
                <span>Posted by u/{post.author}</span>
            </div>
            <h2>{post.title}</h2>
            <div className='post'>
                <div className='media'>{media}</div>
                {/* {post.post_hint? <p style={{color: 'red'}}>Post hint: {post.post_hint}</p> : null} */}
                {/* {post.media_metadata? <p>Media metadata</p>: null} */}
            </div>
            <div className='post-footer'>
                <img src='./img/up_icon.png' alt='votes'/><span>{roundNumber(post.ups)}</span> 
                <img src='./img/comment_icon.png' alt='comments'/><span>{roundNumber(post.num_comments)}</span>
            </div>
        </div>
    )
}