import  './Post.css'
import MarkDown from 'markdown-to-jsx'

export default function Post({post}){
    let media
    const postHint = post.post_hint
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
        media = <MarkDown className='postSelfText'>{post.selftext}</MarkDown>
    }

    return (
        <div className='post' >
            <h2>{post.title}</h2>
            <div className='media'>{media}</div>
            {post.post_hint? <p style={{color: 'red'}}>Post hint: {post.post_hint}</p> : null}
            {post.media_metadata? <p>Media metadata</p>: null}
            <p>By @{post.author}</p>
            <span>{post.ups} votes </span> <span>{post.num_comments} comments</span>
        </div>
    )
}