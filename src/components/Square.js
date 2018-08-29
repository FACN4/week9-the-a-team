import React, { Component } from "react";
import photos from "../player_photos.json";

class Square extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  state = {
    image: "https://www.colorhexa.com/d3d3d3.png"
  };
  onClick() {
    this.setState({
      image: photos[this.props.player]["photo"]
    });
  }
  render() {
    return (
      <div className="square" id={this.props.id} onClick={this.onClick}>
        <img src={this.state.image} alt={this.props.player} />
      </div>
    );
  }
}

export default Square;
