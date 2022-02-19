import { MainAndAside } from '../theme/styling';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import GlobalStyles from '../theme/globalStyles';
import {ThemeProvider} from 'styled-components'
import {lightTheme,darkTheme} from '../theme/theme'
import {useSelector} from 'react-redux'

function App() {
    const mode = useSelector(state => state.mode)
    const theme = mode === 'light'? lightTheme: darkTheme
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
// 3. Add Popular/Hot/Top/New 
