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
