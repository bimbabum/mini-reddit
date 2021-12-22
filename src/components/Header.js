import SearchBar from "../features/search/SearchBar"
import './header.css'

export default function Header(){
    return (
        <>
          <div id='reddit-logo'>
            <img src='./img/reddit_icon_xs.png' alt='reddit icon'/>
            <span className='mini-reddit'>mini reddit</span>
          </div>
          <SearchBar/>
        </>
    )
}