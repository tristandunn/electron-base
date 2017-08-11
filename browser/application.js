import React from "react";
import routes from "./routes";
import PropTypes from "prop-types";
import { Router } from "react-router";
import { Provider } from "react-redux";

class Application extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

Application.propTypes = {
  history : PropTypes.object.isRequired,
  store   : PropTypes.object.isRequired
};

export default Application;
