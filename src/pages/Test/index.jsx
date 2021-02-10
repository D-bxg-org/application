import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Test extends Component {
  render() {
    return (
      <div>
        我是测试页面
        <Link to="/">
          <button>点我到主页</button>
        </Link>
      </div>
    );
  }
}
