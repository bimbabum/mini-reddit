import Media from './Media'
import Comments from './Comments'
import styled from 'styled-components'
import { H2, Container } from '../../theme/styling'
import {useState} from 'react'
import { roundNumber, timeAgo } from '../../utilities/utilities'
import { useSelector,useDispatch} from 'react-redux'
import { loadCommentsByPost } from './commentsSlice'


const Button = styled.button`
    border: 1px solid rgb(252, 224, 228);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    background-color: ${props => props.showComments ? 'rgb(252, 224, 228)' : 'rgb(250, 241, 242)'};
    margin-right: 0.5rem;
`
const HeaderContainer = styled.div`
    padding-left: 0.5rem;
    padding-top: 0.5rem;
`
const Header = styled.span`
    font-size: 0.75rem; 
    color:${({theme})=>theme.text};
    padding-right: 0.5rem;
    font-weight: ${props => props.bold? 'bold' : 'normal'};
`
const PostTitle = styled.a`
    color: ${({theme})=> theme.text};
    text-decoration: none;
    :hover {
        font-weight: bolder;
        color: rgb(78, 66, 68)
    }
`
const Footer = styled.div`
    display:flex;
    align-content: center;
    padding: 0 0.5rem;
    padding-top: 0.5rem;
`
const Image = styled.img`
    width: 1.5rem;
    padding: 0.25rem
`
const Span = styled.span`
    padding-right: 1rem;
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
        <Container>
            <HeaderContainer>
                <Header bold>{post.subreddit_name_prefixed}</Header>
                <Header>Posted by u/{post.author}</Header>
                <Header>{timeAgo(post.created_utc)}</Header>
            </HeaderContainer>
            <PostTitle href={`https://www.reddit.com/${post.permalink}`} target='_blank' rel="noreferrer">
                <H2>{post.title}</H2>
            </PostTitle>
            <Media post={post}/>
            <Footer>
                <Button>
                    <Image src='./img/up_icon.png' alt='votes'/>
                    <Span>{roundNumber(post.ups)}</Span>
                </Button>
                <Button onClick={handleLoadComments} showComments={showComments}>
                    <Image src='./img/comment_icon.png' alt='comments:' />
                    <Span>{roundNumber(post.num_comments-1)}</Span>
                </Button>
                {(showComments && !comments) && <Image src='./img/spinner.gif' alt='loading...' className='loading'/>}
            </Footer>
            <Comments comments={comments} showComments={showComments}/>
        </Container>
    )
}