import styled from 'styled-components'
import React, {useState} from 'react'
import { timeAgo } from '../../utilities/utilities'

const CommentsContainer = styled.div`
    padding-top: 0.5rem;
    margin-left: 1rem;
`
const CommentContainer = styled.div`
    padding: 0.5rem;
    text-align: left;
    font-size: 0.85rem;
    color: black;
    border: 1px solid lightgrey;
    border-radius: 5px;
    display: flex;
`
const CommentShowReplies = styled.div`
    padding: 0.5rem;
`
const CommentContent = styled.div`
    flex-grow: 1;
    color: ${({theme})=>theme.text}
`
const CommentTitle = styled.span`
    font-size: 0.65rem;
    color: ${({theme})=>theme.text};
    padding-right: 0.5rem;
    font-weight: normal;
`

export default function Comments({comments, showComments}){
    if(!comments || !showComments) {
        return null
    }
    return (
        <CommentsContainer>
        <span>Top Comments</span><br/>
        {comments.map((comment,index) => <Comment comment={comment} showComment={true} key={index} />)}
        </CommentsContainer>
    )
}

export function Comment({comment,showComment}){
    const [showReply, setShowReply] = useState(false)
    if(!showComment) return null
    if(!comment.body) return null
    const replies = comment.replies? comment.replies.data.children.map(reply => reply.data) : null
    return (
        <>
        <CommentContainer>
            <CommentShowReplies>
                <button onClick={()=> setShowReply(showReply => !showReply)}>{showReply? '-' : '+'}</button>
            </CommentShowReplies>
            <CommentContent>
                <CommentTitle>@{comment.author}</CommentTitle>
                <CommentTitle>{timeAgo(comment.created)}</CommentTitle> <br/>
                {comment.body}
                {replies && replies.map((reply,index) => <Comment comment={reply} showComment={showReply} key={index}/>)}
            </CommentContent>
        </CommentContainer>
        </>
    )
}

// function Reply({reply, showReply}) {
//     const [showReply2, setShowReply2] = useState(false)
//     if(!showReply) return null
//     if(!reply.body) return null
//     const replies2 = reply.replies ? reply.replies.data.children.map(reply => reply.data) : null

//     return (
//         <CommentContainer>
//             <CommentShowReplies>
//                 <button onClick={() => setShowReply2(showReply2 => !showReply2)}>{showReply2 || !replies2 ? '-' : '+'}</button>
//             </CommentShowReplies>
//             <CommentContent>
//                 <CommentTitle>@{reply.author}</CommentTitle>
//                 <CommentTitle>{timeAgo(reply.created)}</CommentTitle> <br/>
//                 {reply.body}
//                 {replies2 && replies2.map(reply => <Reply reply={reply} showReply={showReply2}/>)}
//             </CommentContent>    
//         </CommentContainer>
//     )
// }