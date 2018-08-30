import React, { Component } from "react";
import photos from "../player_photos.json";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Matt" };
    this.handleChange = this.handleChange.bind(this);
  }
  buildSelect = () => {
    let names = Object.keys(photos);
    return names.map(y => <option value={y}>{y}</option>);
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.action(event.target.value);
  }
  render() {
    return (
      <div>
        <h3>
          <label for={this.props.id}>{this.props.id}</label>
        </h3>
        <select
          id={this.props.id}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.buildSelect()};
        </select>
        <br />
      </div>
    );
  }
}

export default Select;
