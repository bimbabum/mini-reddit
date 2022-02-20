import SubReddit from "./SubReddit";
import React from "react";
import { clearSearchTerm } from "../search/searchBarSlice";
import { useSelector, useDispatch} from "react-redux";
import { setActiveSub } from "./subRedditsSlice"
import styled from "styled-components";
import { H2, Container } from "../../theme/styling";

const UL = styled.ul`
    list-style-type: none;
    padding-left: 2rem;
    line-height: 2.5rem;
`

export default function SubReddits(){
    const subs = useSelector(state => state.subReddits.subReddits)
    const dispatch = useDispatch()

    const handleOnClick = (name) => {
        dispatch(setActiveSub(name))
        dispatch(clearSearchTerm())
    }
    return (
        <Container className='subreddits'>
            <H2 center>Sub Reddits</H2>
            <UL>
                {subs.map(sub => (
                    <li key={sub.id}>
                        <SubReddit 
                            id={sub.id} 
                            name={sub.name} 
                            handleOnClick={handleOnClick}/>
                    </li>))}
            </UL>
        </Container>
    )
}