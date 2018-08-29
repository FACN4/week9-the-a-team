import React, { Component } from "react";

class Square extends Component {
  state = {
    image: "https://www.colorhexa.com/d3d3d3.png"
  };
  render() {
    return (
      <div className="square" id= {this.props.id}>
        X:{this.props.x}, Y: {this.props.y}
        <img src={this.state.image} alt="Placeholder" />
      </div>
    );
  }
}

export default Square;
