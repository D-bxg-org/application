import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        我是主页
        <Link to="/test">
          <button>点我到test页面</button>
        </Link>
      </div>
    );
  }
}
