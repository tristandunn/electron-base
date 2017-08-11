import React from "react";
import PropTypes from "prop-types";

class ApplicationContainer extends React.Component {
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

ApplicationContainer.propTypes = {
  children : PropTypes.element.isRequired
};

export default ApplicationContainer;
