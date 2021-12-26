import  './Post.css'

export default function Post({post}){
    return (
        <div className='post' >
            <h2>{post.title}</h2>
            <img src={post.url_overridden_by_dest} alt={post.title}/>
            <p>By @{post.author}</p>
            <span>{post.ups} votes </span> <span>{post.num_comments} comments</span>
        </div>
    )
}