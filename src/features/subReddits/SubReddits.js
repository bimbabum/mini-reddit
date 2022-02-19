import SubReddit from "./SubReddit";
import React from "react";
import { clearSearchTerm } from "../search/searchBarSlice";
import { useSelector, useDispatch} from "react-redux";
import { setActiveSub } from "./subRedditsSlice"
import styled from "styled-components";

const H2 = styled.h2`
    text-align: center;
    line-height: 2rem;
    padding-top: 1rem;
    color: ${({theme})=> theme.text};
    font-size: 1.5rem;
`
const Container = styled.div`
    border: 1px solid ${({theme})=>theme.boxShadow};
    border-radius: 0.5rem;
    padding-bottom: 1rem;
    background-color: ${({theme})=> theme.backgroundColor}
`
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
            <H2>Sub Reddits</H2>
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