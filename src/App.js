import { useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./index.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import AboutMediaHost from "./components/Content/MediaHost/About";
import MyPersonalData from "./components/Content/MyProfile/MyPersonalData";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/clientes/mediacore/contenido">
            <Header menu={menu} setMenu={setMenu} />
            <div className="container-2">
              <aside className={`left-side menu ${menu ? "open-menu" : ""}`}>
                <Sidebar setMenu={setMenu}/>
              </aside>
              <article
                className={`right-side w-100 ${menu ? "hidde-right-side" : ""}`}
              >
                <Route
                  exact
                  path="/clientes/mediacore/contenido/mi-perfil/mis-datos"
                  component={MyPersonalData}
                />
                <Route exact path="/clientes/mediacore/contenido" component={AboutMediaHost} />
                <Footer />
              </article>
            </div>
          </Route>

          <Route exact path="/clientes/mediacore/login">
            <Login />
          </Route>
          <Redirect to="/clientes/mediacore/contenido" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
