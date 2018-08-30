import React, { Component } from "react";
import photos from "../player_photos.json";

class Square extends Component {
  constructor() {
    super();
  }
  state = {
    image: "https://www.colorhexa.com/d3d3d3.png"
  };
  onClick=()=> {
    if(this.props.state===0){
    this.props.handleSquaree(this.props.x,this.props.y);
    this.setState({
      image: photos[this.props.player]["photo"]
    });

  }
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
