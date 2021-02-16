import React, { Component, Suspense, lazy } from "react";
import { Route, Switch ,Redirect} from "react-router-dom";

// loding页面
import Loding from "../../containers/Loding";
// nav
import Nav from "../../components/Nav";

import "./index.min.css";

// 懒加载页面
const List = lazy(() => import("./List"));
const Detail = lazy(() => import("./Detail"));


export default class Space extends Component {
  render() {
    return (
      <section className="demo">
        <Nav></Nav>
        <Suspense fallback={<Loding />}>
          <Switch>
            <Route path="/space/detail" component={Detail} />
            <Route path="/space/list" component={List} />
            <Redirect to="/space/list"></Redirect>
          </Switch>
        </Suspense>
        
      </section>
    );
  }
}
