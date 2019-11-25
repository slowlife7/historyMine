import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./UserInfo.css";


const UserInfo = () => (
  <div className="UserInfo">
    
    <Link to="/login">
      <SignIn />
      <span>로그인</span>
    </Link>
    <Link to="/signup">
      <SignUp />
      <span>회원가입</span>
    </Link>

  </div>
);

export default UserInfo;
