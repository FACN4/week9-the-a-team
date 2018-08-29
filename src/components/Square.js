import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  state = {
    image: 'https://www.colorhexa.com/d3d3d3.png'
  };
  onClick() {


    //this.setState(image:{this.props.photo})
  }
  render() {
    return (
      <div className="square" id={this.props.id} onClick={this.onClick}>
        X:{this.props.x}, Y: {this.props.y}
        <img src={this.state.image} alt="Placeholder" />
      </div>
    );
  }
}

export default Square;
