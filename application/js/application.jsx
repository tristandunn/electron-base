import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import "./application.css";
import routes from "./routes.jsx";
import configuration from "./store/configuration";

const store   = configuration(),
      history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("container")
);

if (window.process.env.ELECTRON_ENV === "local") {
  let node = document.createElement("script");

  node.setAttribute("src",   "http://localhost:3000/browser-sync/browser-sync-client.2.12.5.js");
  node.setAttribute("async", true);

  document.body.appendChild(node);
}
