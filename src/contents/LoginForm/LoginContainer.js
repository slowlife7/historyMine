import React, { Component, Fragment } from "react";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import Store from "../../authoContext";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    fetch("http://localhost:7001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    }).then(response => {
      if (response.status === 200) {
        response.json().then(json => {
          //componentWillUnmount
          this.setState({
            username: "",
            password: "",
            message: ""
          });
          this.props.onAuth(this.state);
        });
      } else {
        this.setState({
          username: "",
          password: "",
          message: "Invalid username or password"
        });
      }
    });
  };

  render() {
    const auth = this.props.isAuth;
    console.log("auth:", auth);
    return (
      <Fragment>
        {auth === true ? (
          <Redirect to="/"></Redirect>
        ) : (
          <LoginForm
            message={this.state.message}
            username={this.state.username}
            password={this.state.password}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          ></LoginForm>
        )}
      </Fragment>
    );
  }
}

const LoginContainerConsumer = props => (
  <Store.Consumer>
    {store => (
      <LoginContainer
        onAuth={store.onSubmit}
        isAuth={store.isAuth}
        {...props}
      />
    )}
  </Store.Consumer>
);

export default LoginContainerConsumer;
