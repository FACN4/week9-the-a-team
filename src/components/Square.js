import React, { Component } from "react";
import photos from "../player_photos.json";

class Square extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  state = {
    numOfClicks: 0,

    image: "https://www.colorhexa.com/d3d3d3.png"
  };
  onClick() {
  if (this.state.numOfClicks === 0)
      this.setState({ image: photos[this.props.player]["photo"] , numOfClicks:244});
  }
  render() {

    const img = this.props.state === 0 ? "https://www.colorhexa.com/d3d3d3.png" : this.state.image;
    return (
      <div className="square" id={this.props.id} onClick={this.onClick}>
        X:{this.props.x}, Y: {this.props.y}
        <img src={img} alt="Placeholder" />
      </div>
    );
  }
}

export default Square;
