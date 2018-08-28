import React, { Component } from "react";
import photos from "../player_photos.json";

class Select extends Component {
  buildSelect = () => {
    return photos.map(y => <option value={y.name}>{y.name}</option>);
  };
  state = {
    value: "Matt"
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <h3>{this.props.id}</h3>
        <select value={this.state.value} onChange={this.handleChange}>
          {this.buildSelect()};
        </select>
        <br />
      </div>
    );
  }
}

export default Select;
