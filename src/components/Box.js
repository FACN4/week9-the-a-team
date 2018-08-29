import React, { Component } from "react";

class Box extends Component {
  state = {
    content: "Choose your name"
  };
  render() {
    return <h2>{this.state.content}</h2>;
  }
}

export default Box;
