import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <div class="square">
        X:{this.props.x}, Y: {this.props.y}
        <img src="https://www.colorhexa.com/d3d3d3.png" alt="Placeholder" />
      </div>
    );
  }
}

export default Square;
