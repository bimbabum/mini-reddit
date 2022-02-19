// import './searchBar.css'
import styled from 'styled-components'
import { breakpoints } from '../../theme/styling'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from './searchBarSlice'
import { loadSearchResults } from '../posts/PostsSlice'


const Form = styled.form`
    display: flex;
    align-items: center;
    padding-right: 20px;
    width: 400px;
    @media ${breakpoints.md} {
        width: 200px;
    }
`

const IconContainer = styled.img`
    position: absolute;
    padding: 4px 8px;
`

const Input = styled.input`
    border-radius: 5px;
    padding: 9px 25px 9px 40px;
    border: solid 1px ${({theme})=> theme.bodyBackgroundColor};
    background-color: ${({theme})=> theme.bodyBackgroundColor};
    outline: none;
    width: 100%;
    ::placeholder {
        color: ${({theme})=> theme.text}
    }
    :focus {
        border: solid 1px black;
    }
`

export default function SearchBar(){
    const [term, setTerm] = React.useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!term) return
        dispatch(loadSearchResults(term))
        dispatch(setSearchTerm(term))
        setTerm('')
    }
    return (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <Form id='searchBar' role='form' onSubmit={(e)=>handleSubmit(e)}>
            <IconContainer src='./img/search_icon.svg' alt='search icon'/>
            <Input
                placeholder='Search Reddit'
                // id='search'
                type='text'
                value={term}
                onChange={(e)=> setTerm(e.target.value)}
            />
        </Form>
    )
}

