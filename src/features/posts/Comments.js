import styled from 'styled-components'
import React from 'react'

const CommentContainer = styled.div`
    padding: 0.5rem;
    text-align: left;
    font-size: 0.75rem;
    color: grey;
`

export default function Comments({comments}){
    if(!comments) {
        return null
    }
    return (
        <>
        {comments.map((comment,index) => <Comment comment={comment.body} key={index} />)}
        </>
    )
}

export function Comment({comment}){
    return (
        <CommentContainer>
            {comment}
        </CommentContainer>
    )
}