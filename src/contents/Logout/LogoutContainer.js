import React from "react";
import { Redirect } from "react-router-dom";
import Store from "../../authoContext";

const LogoutContainer = props => (
  <Store.Consumer>
    {store => <Logout onLogout={store.onLogout}></Logout>}
  </Store.Consumer>
);

function Logout(props) {
  console.log(props);
  props.onLogout();
  return <Redirect to="/"></Redirect>;
}

export default LogoutContainer;
