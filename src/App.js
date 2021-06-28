import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.scss'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Login from "./components/Login/Login";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/clientes/mediacore">
            <Header menu={menu} setMenu={setMenu} />
            <div className="container-2">
              <aside className={`left-side menu ${menu ? "open-menu" : ""}`}>
                <Sidebar />
              </aside>
              <article className={`right-side w-100 ${menu?"hidde-right-side":""}`}>
                <Content />
                <Footer />
              </article>
            </div>
          </Route>
          <Route  path="/clientes/mediacore/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
