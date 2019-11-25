import React from "react";
import Bars from "./Bars";
import "./NavigatorButton.css";

const NavigatorButton = ({ onClick }) => (
  <div className="NavigatorButton" onClick={onClick}>
    <Bars />
  </div>
);

export default NavigatorButton;
