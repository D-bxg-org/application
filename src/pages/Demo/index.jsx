import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./index.min.css";

export default class Demo extends Component {
  render() {
    return (
      <section className="demo">
        <Nav></Nav>
        <div className="demo__section">
          <div className="demo__aside">aside</div>
          <div className="demo__content">content</div>
        </div>
      </section>
    );
  }
}
