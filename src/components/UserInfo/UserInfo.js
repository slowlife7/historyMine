import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./UserInfo.css";

const UserInfo = () => (
  <div className="UserInfo">
    <a href="/">
      <SignIn />
      <span>로그인</span>
    </a>
    <a href="/">
      <SignUp />
      <span>회원가입</span>
    </a>
  </div>
);

export default UserInfo;
