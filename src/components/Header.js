import styled from 'styled-components'
import SearchBar from "../features/search/SearchBar"
import ModeToggler from "../features/modeToggler/ModeToggler"
import { breakpoints, Header as Container } from "../theme/styling"

const LogoContainer = styled.div`
    flex-grow: 1;
    padding: 6px 20px;
    display: flex;
    align-items: center; 
`

const Span = styled.span`
    margin-left: 1rem;
    color: red;
    font-weight: bold;
    font-size: 2rem;
    font-family: 'Dancing script';
    @media ${breakpoints.sm} {
      display: none;
    }
`

export default function Header(){
    return (
        <Container>
          <LogoContainer>
            <img src='./img/reddit_icon_xs.png' alt='reddit icon'/>
            <Span>mini reddit</Span>
          </LogoContainer>
          <SearchBar/>
          <ModeToggler/>
        </Container>
    )
}