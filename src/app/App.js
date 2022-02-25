import { MainAndAside } from '../theme/styling';
import {lightTheme,darkTheme} from '../theme/theme'
import GlobalStyles from '../theme/globalStyles';
import {ThemeProvider} from 'styled-components'
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import {setActiveSub} from '../features/subReddits/subRedditsSlice'
import {setSearchTerm, clearSearchTerm} from '../features/search/searchBarSlice'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function App() {
    const mode = useSelector(state => state.mode)
    const theme = mode === 'light'? lightTheme: darkTheme
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(()=>{
        const path = location.pathname.slice(1)
        const searchParams = new URL(window.location).searchParams
        const searchTerm = searchParams.get('search')
        if(path) {
            dispatch(setActiveSub(path))
            dispatch(clearSearchTerm())
        } else if (searchTerm) {
            dispatch(setSearchTerm(searchTerm)) 
        }
    })

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

// TODO:
// 1. Dark & light theme
// 1a. Routing
// 2. Search bar to adjust to screen size
// 3. Menu for smaller screen
// 4. Add Popular/Hot/Top/New 

