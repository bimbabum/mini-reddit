import SubReddit from "../subReddits/SubReddit"
import styled from "styled-components"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { setActiveSub } from '../subReddits/subRedditsSlice'
import { clearSearchTerm } from "../search/searchBarSlice";

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
    @media (min-width: 675px) {
        display: none
    }
    
`
const Button = styled.button`
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.backgroundColor};
    border: 1px solid ${({theme}) => theme.boxShadow};
    cursor: pointer;
    border-radius: 50%;
    padding: 0.5rem;
    :hover {
        box-shadow: 0.15rem 0.15rem ${({theme})=>theme.boxShadow};
    }
`

const MenuContainer = styled.div`
    display: ${props => props.disable? 'none':'block'};
    position: absolute;
    z-index: 1;
    top: 4rem;
    right: 1rem;
    background-color: ${({theme}) => theme.backgroundColor};
    width: 200px;
`
const UL = styled.ul`
    list-style-type: none;
    padding-left: 2rem;
    line-height: 2.5rem;
`

export default function Menu(){
    const [disable, setDisable] = useState('true')
    const dispatch = useDispatch()
    const handleOnClick = () => {
        setDisable(disable => !disable)
    }

    const handleSelect = (name) => {
        dispatch(setActiveSub(name))
        dispatch(clearSearchTerm())
        setDisable('true')
    }

    return (
        <Container>
            <Button onClick={handleOnClick}>
                SUB
            </Button>
            <MenuContainer disable={disable}>
                <MenuContent handleSelect={handleSelect}/>
            </MenuContainer>
        </Container>
    ) 
}

function MenuContent({handleSelect}){
    const subs = useSelector(state=>state.subReddits.subReddits)

    return(
        <UL>
            {subs.map(sub => (
                <li key={sub.id}>
                    <SubReddit 
                        id={sub.id} 
                        name={sub.name} 
                        handleOnClick={handleSelect}/>
                </li>))}
        </UL>
    )
}
