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
        <p>Choose Your name</p>
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
