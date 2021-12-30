import { useSelector } from "react-redux"
import './mainHeader.css'

export default function MainHeader(){
    const activeSubReddit = useSelector(state => state.subReddits.activeSubReddit.name)
    const searchTerm = useSelector(state => state.searchTerm)

    if(searchTerm) {
        return (
            <div className='mainHeader searchResult'>
                <span>Search results for: <span className='searchTerm'>"{searchTerm}"</span></span>
            </div>
        )
    }

    return (
        <div className='mainHeader subreddit'>
            <h3>r/{activeSubReddit}</h3>
        </div>
    )
}