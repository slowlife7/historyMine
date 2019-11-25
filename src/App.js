import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
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

class App extends Component {
  state = {
    showPopup: false
  };

  handlePoupNav = () => {
    console.log("onclick");
    this.setState({
      showPopup: !this.state.showPopup
    });
    //console.log("state:", this.state.showPopup);
  };

  render() {
    return (
      <Fragment>
        <Router>
          <Header>
            <NavigatorButton onClick={this.handlePoupNav} />
            <UserInfo />
          </Header>
        
          <Darkness
            showing={this.state.showPopup}
            onClick={this.handlePoupNav}
          ></Darkness>
         
          <Navigator showing={this.state.showPopup}></Navigator>
            <Switch>
              <Route exact path="/">
                <Section></Section>
              </Route>

              <Route exact path="/test1">
                <Section>
                  <Test1 />
                </Section>
              </Route>
              <Route exact path="/test2">
                <Section>
                  <Test2 />
                </Section>
              </Route>
              <Route exact path="/test3">
                <Section>
                  <Test3 />
                </Section>
              </Route>
              <Route exact path="/test4">
                <Section>
                  <Test4 />
                </Section>
              </Route>
              <Route exact path="/login">
                <Section>
                  <Login />
                </Section>
              </Route>

              <Route exact path="/signup">
                <Section>
                  <Signup />
                </Section>
              </Route>
            </Switch>
          </Router>
      </Fragment>
    );
  }
}

function Login() {
  return <div>Login</div>
}

function Signup() {
  return <div>
    <h1>하하하하하</h1>
  </div>
}

function Test1() {
  return <div>test1</div>
}

function Test2() {
  return <div>test2</div>
}

function Test3() {
  return <div>test3</div>
}

function Test4() {
  return <div>test4</div>
}

export default App;
