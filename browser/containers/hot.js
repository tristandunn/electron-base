/* global process,require */

import React from "react";

let HotContainer;

if (process.env.NODE_ENV === "development") {
  HotContainer = require("react-hot-loader").AppContainer;
} else {
  HotContainer = (props) => {
    return React.Children.only(props.children);
  };
}

export default HotContainer;
