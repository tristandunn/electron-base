import thunk from "redux-thunk";
import { hashHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";

const router   = routerMiddleware(hashHistory),
      enhancer = applyMiddleware(thunk, router);

export default (state) => {
  return createStore(reducer, state, enhancer);
};
