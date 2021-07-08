import { useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./assets/styles/App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
// Media Host
import AboutMediaHost from "./components/Content/MediaHost/About";
import SupportMediaHost from "./components/Content/MediaHost/Support";
import NewTicketMediaHost from "./components/Content/MediaHost/NewTicket";
// Media Academy
import AboutMediaAcademy from "./components/Content/MediaAcademy/About";
import NewsMediaAcademy from "./components/Content/MediaAcademy/News/News";
import SeeNewMediaAcademy from "./components/Content/MediaAcademy/News/SeeNew";
// Account
import MyPersonalData from "./components/Content/Account/MyProfile/MyPersonalData";
import AccountState from "./components/Content/Account/Billing/AccountState";
import BillingData from "./components/Content/Account/Billing/BillingData";
// Media Bolg
import FiltersMediaBlog from "./components/Content/MediaBlog/Filters/Filters";
import NewFilterMediaBlog from "./components/Content/MediaBlog/Filters/NewFilter";
import NewsMediaBlog from "./components/Content/MediaBlog/News/News";
import CreateNewMediaBlog from "./components/Content/MediaBlog/News/CreateNew";
// Media Broker
import AboutMediaBroker from "./components/Content/MediaBroker/About";
import EventsMediaBroker from "./components/Content/MediaBroker/Events/Events";
import CreateEventMediaBroker from "./components/Content/MediaBroker/Events/CreateEvent";
import RoomsMediaBroker from "./components/Content/MediaBroker/Rooms/Rooms";
import UsersMediaBroker from "./components/Content/MediaBroker/Users/Users";


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
                <Route exact path="/clientes/mediacore/contenido/media-host/acerca" component={AboutMediaHost} />
                <Route exact path="/clientes/mediacore/contenido/media-host/soporte" component={SupportMediaHost} />
                <Route exact path="/clientes/mediacore/contenido/media-host/soporte/crear-ticket" component={NewTicketMediaHost} />
                <Route exact path="/clientes/mediacore/contenido/media-academy/acerca" component={AboutMediaAcademy} />
                <Route exact path="/clientes/mediacore/contenido/media-academy/novedades" component={NewsMediaAcademy} />
                <Route exact path="/clientes/mediacore/contenido/media-academy/novedades/titulo-novedad" component={SeeNewMediaAcademy} />
                
                <Route exact path="/clientes/mediacore/contenido/facturacion/estado-de-cuenta" component={AccountState} />
                <Route exact path="/clientes/mediacore/contenido/facturacion/datos-de-facturacion" component={BillingData} />

                <Route exact path="/clientes/mediacore/contenido/media-blog/novedades" component={NewsMediaBlog} />
                <Route exact path="/clientes/mediacore/contenido/media-blog/novedades/crear-novedad" component={CreateNewMediaBlog} />
                <Route exact path="/clientes/mediacore/contenido/media-blog/filtros" component={FiltersMediaBlog} />
                <Route exact path="/clientes/mediacore/contenido/media-blog/filtros/crear-filtro" component={NewFilterMediaBlog} />
                
                <Route exact path="/clientes/mediacore/contenido/media-broker/acerca" component={AboutMediaBroker} />
                <Route exact path="/clientes/mediacore/contenido/media-broker/eventos" component={EventsMediaBroker} />
                <Route exact path="/clientes/mediacore/contenido/media-broker/eventos/crear-evento" component={CreateEventMediaBroker} />
                <Route exact path="/clientes/mediacore/contenido/media-broker/salas" component={RoomsMediaBroker} />
                <Route exact path="/clientes/mediacore/contenido/media-broker/usuarios" component={UsersMediaBroker} />
                <Footer />
              </article>
            </div>
          </Route>

          <Route exact path="/clientes/mediacore/login">
            <Login />
          </Route>
          <Redirect to="/clientes/mediacore/contenido/media-host/acerca" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
