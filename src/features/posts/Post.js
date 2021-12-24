

export default function Post(props){
    const {title, author, ups, numComments, img, link} = props
    return (
        <div className='post'>
            <h2>{props.title}</h2>
            <img src={img} alt={title}/>
            <p>By @{author}</p>
            <span>{ups} votes </span> <span>{numComments} comments</span>
        </div>
    )
}