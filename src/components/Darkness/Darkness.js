import React from "react";
import "./Darkness1.css";

const Darkness = ({ showing, onClick }) => (
  <div
    className={`Darkness1 ${
      showing ? "Darkness1__showing" : "Darkness1__hidden"
    }`}
    onClick={onClick}
  ></div>
);

export default Darkness;
