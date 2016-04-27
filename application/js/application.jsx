import React from "react";
import ReactDOM from "react-dom";
import ApplicationComponent from "./components/application.jsx";

(() => {
  let container = document.getElementById("container");

  ReactDOM.render(<ApplicationComponent />, container);
})();
