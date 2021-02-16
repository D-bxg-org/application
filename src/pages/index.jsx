import React, { Component, Fragment, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

// loding页面
import Loding from "../containers/Loding";
// 懒加载页面
const Home = lazy(()=>import("./Home"));
const Test = lazy(()=>import("./Test"));
const Demo = lazy(()=>import("./Demo"));

export default class pages extends Component {
  render() {
    return (
      <Fragment>
        {/* 部署懒加载中的loding页面 */}
        <Suspense fallback={<Loding />}>
          <Switch>
            <Route path="/test" component={Test} />
            <Route path="/demo" component={Demo} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </Fragment>
    );
  }
}
