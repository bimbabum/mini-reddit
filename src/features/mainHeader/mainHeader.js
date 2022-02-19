import { useSelector } from "react-redux"
import styled from 'styled-components'

const Container = styled.div`
    background-color: ${({theme})=> theme.backgroundColor};
    color: ${({theme}) => theme.text};
    border: 1px solid ${({theme})=>theme.boxShadow};
    box-shadow: 0.15rem 0.15rem ${({theme})=>theme.boxShadow};
    border-radius: 0.5rem;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    text-align: ${props => props.searchResult? 'left' : 'center'};
`
const Span = styled.span`
    font-weight: 800;
`
const Content = styled.h3`
    font-size: 1.5rem;
`

export default function MainHeader(){
    const activeSubReddit = useSelector(state => state.subReddits.activeSubReddit.name)
    const searchTerm = useSelector(state => state.searchTerm)

    if(searchTerm) {
        return (
            <Container searchResult>
                <span>Search results for: <Span>"{searchTerm}"</Span></span>
            </Container>
        )
    }

    return (
        <Container>
            <Content>r/{activeSubReddit}</Content>
        </Container>
    )
}