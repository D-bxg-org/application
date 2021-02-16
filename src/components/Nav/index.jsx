import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.min.css";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <section className="nav__section">
          <Link to="/">
            <div className="nav__logo">logo</div>
          </Link>
          <div className="nav__search"></div>
          <div className="nav__items">
            <Link to="/space">
              <div className="nav__demo">space</div>
            </Link>
          </div>
        </section>
      </nav>
    );
  }
}
