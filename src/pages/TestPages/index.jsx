import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TestPages extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }
  testChange = () => {
    const { input } = this.refs;
    this.setState({
      data: input.value,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          我是测试页面
          <Link to="/">
            <button>点我到主页</button>
          </Link>
        </div>
        <input ref="input" onChange={this.testChange} type="text" />
        <div id="div" ref="div">
          {data}
        </div>
      </div>
    );
  }
}
