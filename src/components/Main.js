import Posts from '../features/posts/Posts'
import MainHeader from '../features/mainHeader/mainHeader'
import { Main as Container } from '../theme/styling'
import React from 'react'

export default function Main(){
    return (
        <Container>
            <MainHeader/>
            <Posts/>
        </Container>
    )
}