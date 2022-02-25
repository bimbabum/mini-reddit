import { useSelector } from "react-redux"
import styled from 'styled-components'
import { H2,Container } from "../../theme/styling"

const Span = styled.span`
    font-weight: 800;
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
            <H2 center>r/{activeSubReddit}</H2>
        </Container>
    )
}