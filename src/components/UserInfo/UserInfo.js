import React, { Fragment } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import "./UserInfo.css";

const UserInfo = props => (
  <div className="UserInfo">
    {props.auth === false ? (
      <Fragment>
        <Link to="/login">
          <SignIn />
          <span>로그인</span>
        </Link>
        <Link to="/signup">
          <SignUp />
          <span>회원가입</span>
        </Link>
      </Fragment>
    ) : (
      <Link to="/logout">
        <span>로그아웃</span>
      </Link>
    )}
  </div>
);

export default UserInfo;
