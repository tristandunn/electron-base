import React from "react";
import { Route, IndexRoute } from "react-router";
import Counter from "./containers/counter.jsx";
import Homepage from "./containers/homepage.jsx";
import Application from "./containers/application.jsx";

export default (
  <Route path="/" component={Application}>
    <IndexRoute component={Homepage} />

    <Route path="/counter" component={Counter} />
  </Route>
);
