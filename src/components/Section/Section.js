import React, { Component } from "react";
import "./Section.css";

class Section extends Component {
  componentDidMount() {
    console.log("section finished");
  }

  render() {
    return (
      <section>
        <div className="main"></div>
      </section>
    );
  }
}

export default Section;
