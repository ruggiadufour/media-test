import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
import CreateRoomMediaBroker from "./components/Content/MediaBroker/Rooms/CreateRoom";
import UsersMediaBroker from "./components/Content/MediaBroker/Users/Users";
import CreateUserMediaBroker from "./components/Content/MediaBroker/Users/CreateUser";
// Media Investor
import AboutMediaInvestor from "./components/Content/MediaInvestor/About";
import NewsMediaInvestor from "./components/Content/MediaInvestor/News/News";
import CreateNewMediaInvestor from "./components/Content/MediaInvestor/News/CreateNew";
import InvestorsMediaInvestor from "./components/Content/MediaInvestor/Investors/Investors";
import CreateInvestorMediaInvestor from "./components/Content/MediaInvestor/Investors/CreateInvestor";
import EntrepreneurshipMediaInvestor from "./components/Content/MediaInvestor/Entrepreneurship/Entrepreneurship";
import CreateEntrepreneurMediaInvestor from "./components/Content/MediaInvestor/Entrepreneurship/CreateEntrepreneurship";

// Routes
import { routes } from "./static_data/routes";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path={routes.content}>
            <Header menu={menu} setMenu={setMenu} />
            <div className="container-2">
              <aside className={`left-side menu ${menu ? "open-menu" : ""}`}>
                <Sidebar setMenu={setMenu} />
              </aside>
              <article
                className={`right-side w-100 ${menu ? "hidde-right-side" : ""}`}
              >
                <Route
                  exact
                  path={routes.myProfile.myData}
                  component={MyPersonalData}
                />
                <Route
                  exact
                  path={routes.mediaHost.about}
                  component={AboutMediaHost}
                />
                <Route
                  exact
                  path={routes.mediaHost.support}
                  component={SupportMediaHost}
                />
                <Route
                  exact
                  path={routes.mediaHost.createTicket}
                  component={NewTicketMediaHost}
                />
                <Route
                  exact
                  path={routes.mediaAcademy.about}
                  component={AboutMediaAcademy}
                />
                <Route
                  exact
                  path={routes.mediaAcademy.news}
                  component={NewsMediaAcademy}
                />
                <Route
                  exact
                  path={routes.mediaAcademy.new}
                  component={SeeNewMediaAcademy}
                />

                <Route
                  exact
                  path={routes.billing.accountState}
                  component={AccountState}
                />
                <Route
                  exact
                  path={routes.billing.billingData}
                  component={BillingData}
                />

                <Route
                  exact
                  path={routes.mediaBlog.news}
                  component={NewsMediaBlog}
                />
                <Route
                  exact
                  path={routes.mediaBlog.createNew}
                  component={CreateNewMediaBlog}
                />
                <Route
                  exact
                  path={routes.mediaBlog.filters}
                  component={FiltersMediaBlog}
                />
                <Route
                  exact
                  path={routes.mediaBlog.createFilter}
                  component={NewFilterMediaBlog}
                />

                <Route
                  exact
                  path={routes.mediaBroker.about}
                  component={AboutMediaBroker}
                />
                <Route
                  exact
                  path={routes.mediaBroker.events}
                  component={EventsMediaBroker}
                />
                <Route
                  exact
                  path={routes.mediaBroker.createEvent}
                  component={CreateEventMediaBroker}
                />
                <Route
                  exact
                  path={routes.mediaBroker.rooms}
                  component={RoomsMediaBroker}
                />
                <Route
                  exact
                  path={routes.mediaBroker.createRoom}
                  component={CreateRoomMediaBroker}
                />
                <Route
                  exact
                  path={routes.mediaBroker.users}
                  component={UsersMediaBroker}
                />
                <Route
                  exact
                  path={routes.mediaBroker.createUser}
                  component={CreateUserMediaBroker}
                />

                <Route
                  exact
                  path={routes.mediaInvestor.about}
                  component={AboutMediaInvestor}
                />
                <Route
                  exact
                  path={routes.mediaInvestor.news}
                  component={NewsMediaInvestor}
                />
                <Route
                  exact
                  path={routes.mediaInvestor.createNew}
                  component={CreateNewMediaInvestor}
                />
                <Route
                  exact
                  path={routes.mediaInvestor.investors}
                  component={InvestorsMediaInvestor}
                />
                <Route
                  exact
                  path={routes.mediaInvestor.createInvestor}
                  component={CreateInvestorMediaInvestor}
                />
                <Route
                  exact
                  path={routes.mediaInvestor.entrepreneurships}
                  component={EntrepreneurshipMediaInvestor}
                />
                <Route
                  exact
                  path={routes.mediaInvestor.createEntrepreneurship}
                  component={CreateEntrepreneurMediaInvestor}
                />
                <Footer />
              </article>
            </div>
          </Route>

          <Route exact path={routes.session.login}>
            <Login />
          </Route>
          <Redirect to={routes.mediaHost.about} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
