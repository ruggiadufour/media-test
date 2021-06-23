import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="app">
      <Header menu={menu} setMenu={setMenu} />
      <div className=" d-flex h-100">
        <aside className={`left-side menu ${menu?"open-menu":""}`}>
          <Sidebar/>
        </aside>
        <div hidden={menu} className="right-side h-100 w-100 ">
          <Content/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
