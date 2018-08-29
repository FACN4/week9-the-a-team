import React, { Component } from "react";

class Box extends Component {
  render() {
    return <h2>{this.props.children}</h2>;
  }
}

export default Box;
