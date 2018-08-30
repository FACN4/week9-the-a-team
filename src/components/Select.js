import React, { Component } from "react";
import photos from "../player_photos.json";

class Select extends Component {
  constructor() {
    super();
    this.state = { value: "Matt" };
  }
  buildSelect = () => {
    let names = Object.keys(photos);
    return names.map(y => <option value={y}>{y}</option>);
  };
  handleChange=(event)=> {
    this.setState({ value: event.target.value });
    this.props.action(event.target.value);
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
