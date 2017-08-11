/* global module,require */

import React from "react";
import ReactDOM from "react-dom";
import HotContainer from "containers/hot";
import configureStore from "./store";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "react-router-redux";

const store   = configureStore(),
      history = syncHistoryWithStore(createBrowserHistory(), store);

const render = () => {
  const Application = require("./application").default;

  ReactDOM.render(
    <HotContainer>
      <Application history={history} store={store} />
    </HotContainer>,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept("./application", render);
}

render();
