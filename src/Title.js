import React, { Component } from "react";
import PropTypes from "prop-types";

// export something as default 
// the class title
// Title exteds component so that means it inherits 
// methods from component

export default class Title extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return <h1>{this.props.content}</h1>
  }
}
