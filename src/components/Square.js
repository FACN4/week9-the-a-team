import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  // state: {
  //   x: 0,
  //   y: 0,
  //   player: 0
  // };
  render() {
    return (
      <span>
        `{this.props.x} {this.props.y}`
      </span>
    );
  }
}

export default Square;
