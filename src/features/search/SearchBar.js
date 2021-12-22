import './searchBar.css'

export default function SearchBar(){
    return (
        <form id='searchBar'>
            <img src='./img/search_icon.svg' alt='search icon' id='search-icon'/>
            <input
                placeholder='Search Reddit'
                id='search'
                type='text'
            />
        </form>
    )
}