import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Navigator.css";

const Navigator = ({ showing }) => (
    <nav
      className={`Navigator ${
        showing ? "Navigator__showing" : "Navigator__hidden"
      }`}
    >
      <ul>
        <li>
          <Link to="/test1">TEST1</Link>
        </li>
        <li>
          <Link to="/test2">TEST2</Link>
        </li>
        <li>
          <Link to="/test3">TEST3</Link>
        </li>
        <li>
          <Link to="/test4">TEST4</Link>
        </li>
      </ul>
    </nav>
);

export default Navigator;
