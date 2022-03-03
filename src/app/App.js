import { MainAndAside } from '../theme/styling';
import {lightTheme,darkTheme} from '../theme/theme'
import GlobalStyles from '../theme/globalStyles';
import {ThemeProvider} from 'styled-components'
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import {setActiveSubThunk} from '../features/subReddits/subRedditsSlice'
import {setSearchTerm} from '../features/search/searchBarSlice'
import { loadSearchResults } from '../features/posts/PostsSlice';
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function App() {
    const mode = useSelector(state => state.mode)
    const theme = mode === 'light'? lightTheme: darkTheme

    //Routing
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(()=>{
        const path = location.pathname.slice(1)
        const searchParams = location.search
        const searchTerm = new URLSearchParams(searchParams).get('search')
        if(path) {
            dispatch(setActiveSubThunk(path))
            // dispatch(clearSearchTerm())
        } else if (searchTerm) {
            dispatch(setSearchTerm(searchTerm))
            dispatch(loadSearchResults(searchTerm)) 
        } else {
            // dispatch(clearSearchTerm())
            dispatch(setActiveSubThunk('Popular'))  
        }
    },[dispatch, location.pathname, location.search])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Header/>
            <MainAndAside>
                <Main/>
                <Sidebar/>        
            </MainAndAside>
        </ThemeProvider>
    );
}

export default App;
