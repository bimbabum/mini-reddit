import styled from 'styled-components'
import React from 'react'

const CommentsContainer = styled.div`
    padding-top: 0.5rem;
    margin-left: 1rem;
`
const CommentContainer = styled.div`
    padding: 0.5rem;
    text-align: left;
    font-size: 0.75rem;
    color: grey;
    border: 1px solid lightgrey;
    border-radius: 5px;
`

export default function Comments({comments, showComments}){

    if(!comments || !showComments) {
        return null
    }
    return (
        <CommentsContainer>
        <span>Comments</span>
        {comments.map((comment,index) => <Comment comment={comment.body} key={index} />)}
        </CommentsContainer>
    )
}

export function Comment({comment}){
    return (
        <CommentContainer>
            {comment}
        </CommentContainer>
    )
}