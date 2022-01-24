import './App.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';


function App() {
  return (
    <>
        <header>
            <Header/>
        </header>
        <div className='main-and-aside'>
            <main>
              <Main/>
            </main>
            <aside>
              <Sidebar/>
            </aside>
      </div>
    </>
  );
}

export default App;

// TODO:
// 1. Dark & light theme
// 1a. Routing
// 2. Search bar to adjust to screen size
// 3. Add Popular/Hot/Top/New 
