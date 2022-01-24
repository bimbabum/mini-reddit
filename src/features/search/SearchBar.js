import './searchBar.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from './searchBarSlice'
import { loadSearchResults } from '../posts/PostsSlice'

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
        <form id='searchBar' role='form' onSubmit={(e)=>handleSubmit(e)}>
            <img src='./img/search_icon.svg' alt='search icon' id='search-icon'/>
            <input
                placeholder='Search Reddit'
                id='search'
                type='text'
                value={term}
                onChange={(e)=> setTerm(e.target.value)}
            />
        </form>
    )
}