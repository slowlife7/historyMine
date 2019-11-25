import React, { Component, Fragment } from "react";
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
        <Header>
          <NavigatorButton onClick={this.handlePoupNav} />
          <UserInfo />
        </Header>
        <Navigator showing={this.state.showPopup}></Navigator>
        <Darkness
          showing={this.state.showPopup}
          onClick={this.handlePoupNav}
        ></Darkness>
        <Section></Section>
      </Fragment>
    );
  }
}

export default App;
