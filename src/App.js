import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import "./App.css";
import {
  Header,
  Navigator,
  NavigatorButton,
  UserInfo,
  Darkness,
  Section
} from "./components";

import { LoginContainer, LogoutContainer } from "./contents";

import Store from "./authoContext";

const routes = [
  {
    path: "/test2",
    component: () => (
      <Section>
        <Test2 />
      </Section>
    )
  },
  {
    path: "/test3",
    component: () => (
      <Section>
        <Test3 />
      </Section>
    )
  },
  {
    path: "/test4",
    component: () => (
      <Section>
        <Test4 />
      </Section>
    )
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      isAuth: false,
      onSubmit: this.onSubmit,
      onLogout: this.onLogout
    };
  }

  componentDidMount() {
    let authenticated = false;
    const auth = sessionStorage.getItem("isAuth");
    if (auth) {
      authenticated = auth === "true" ? true : false;
    }
    this.setState({
      isAuth: authenticated
    });
  }

  handlePoupNav = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
    //console.log("state:", this.state.showPopup);
  };

  handleAuthenticate = () => {
    this.setState({
      isAuth: true
    });
  };

  onSubmit = ({ username }) => {
    this.setState({
      isAuth: true
    });

    sessionStorage.setItem("isAuth", true);
  };

  onLogout = () => {
    fetch("http://localhost:7001/auth/logout").then(response =>
      response.json()
    );

    this.setState({
      isAuth: false
    });

    sessionStorage.setItem("isAuth", false);
  };

  render() {
    return (
      <Store.Provider value={this.state}>
        <Fragment>
          <Router>
            <Header>
              <NavigatorButton onClick={this.handlePoupNav} />
              <UserInfo auth={this.state.isAuth} />
            </Header>

            <Darkness
              showing={this.state.showPopup}
              onClick={this.handlePoupNav}
            ></Darkness>

            <Navigator showing={this.state.showPopup}></Navigator>
            <Switch>
              <Route path="/login" component={LoginContainer}></Route>
              <Route path="/logout" component={LogoutContainer}></Route>
              <Route path="/signup"></Route>
              <Route exact path="/">
                <Section></Section>
              </Route>

              {routes.map((route, i) => (
                <Route path={route.path} key={i}>
                  {route.component}
                </Route>
              ))}

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Router>
        </Fragment>
      </Store.Provider>
    );
  }
}

function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Test2() {
  return <div>test2</div>;
}

function Test3() {
  return <div>test3</div>;
}

function Test4() {
  return <div>test4</div>;
}

export default App;
