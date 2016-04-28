import React from "react";

class Application extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Application.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default Application;
