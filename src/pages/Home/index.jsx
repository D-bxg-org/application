import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from '../../components/Nav'

export default class Home extends Component {
  render() {
    return (
      <div className="">
        <Nav></Nav>
        我是主页
        <Link to="/test-pages">
          <button>点我到test页面</button>
        </Link>
      </div>
    );
  }
}
