import React from "react";
import "./Navigator.css";

const Navigator = ({ showing }) => (
  <nav
    className={`Navigator ${
      showing ? "Navigator__showing" : "Navigator__hidden"
    }`}
  >
    <ul>
      <li>
        <a href="/">TEST1</a>
      </li>
      <li>
        <a href="/">TEST2</a>
      </li>
      <li>
        <a href="/">TEST3</a>
      </li>
      <li>
        <a href="/">TEST4</a>
      </li>
    </ul>
  </nav>
);

export default Navigator;
