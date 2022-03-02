import styled from 'styled-components'
import SearchBar from "../features/search/SearchBar"
import ModeToggler from "../features/modeToggler/ModeToggler"
import { breakpoints, Header as Container } from "../theme/styling"
import {useNavigate} from 'react-router-dom'

const LogoContainer = styled.div`
    flex-grow: 1;
    padding: 6px 20px;
    display: flex;
    align-items: center; 
    cursor: pointer;
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
    const navigate = useNavigate()
    return (
        <Container>
          <LogoContainer onClick={()=> navigate('/')}>
            <img src='./img/reddit_icon_xs.png' alt='reddit icon'/>
            <Span>mini reddit</Span>
          </LogoContainer>
          <SearchBar/>
          <ModeToggler/>
        </Container>
    )
}