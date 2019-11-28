import React, { Component, Fragment } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Fragment>
        <div className="login--container">
          <div className="login--form">
            <div className="login--header">
              <h2>Sign In</h2>
              <Link to="/signup">
                <span>Create Account</span>
              </Link>
            </div>
            <div className="login--content">
              <form onSubmit={this.props.onSubmit}>
                <div className="form--input">
                  <input
                    type="text"
                    placeholder="아이디"
                    name="username"
                    value={this.props.username}
                    onChange={this.props.onChange}
                  />
                </div>
                <div className="form--input">
                  <input
                    type="password"
                    placeholder="비밀번호"
                    name="password"
                    value={this.props.password}
                    onChange={this.props.onChange}
                  />
                </div>

                <div>
                  {this.props.message !== "" ? (
                    <p>{this.props.message}</p>
                  ) : (
                    <p></p>
                  )}
                </div>

                <div className="form--button">
                  <input type="submit" value="Sign In" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoginForm;
