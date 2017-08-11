import React from "react";
import { Route } from "react-router";
import HomepageContainer from "containers/homepage";
import ApplicationContainer from "containers/application";

export default (
  <ApplicationContainer>
    <Route path="/" component={HomepageContainer} />
  </ApplicationContainer>
);
