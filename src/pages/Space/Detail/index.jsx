import React, { Component } from "react";
import "./index.min.css";

export default class Detail extends Component {
  render() {
    return (
      <section className="detail">
        <div className="detail__section">
          <div className="detail__aside">aside</div>
          <div className="detail__content">content</div>
        </div>
      </section>
    );
  }
}
