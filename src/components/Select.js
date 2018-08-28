import React, { Component } from "react";

class Select extends Component {
  state = {
    value: "Ben"
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <h3>{this.props.id}</h3>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="matt">Matt</option>
          <option value="t">T</option>
          <option value="ryan">Ryan</option>
        </select>
        <br />
      </div>
    );
  }
}

export default Select;
