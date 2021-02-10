import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Test from './Test';

export default class pages extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/" component={Home} />
        </Switch>
      </Fragment>
    );
  }
}
