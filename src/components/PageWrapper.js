import React, { Component } from "react";
import Board from "./Board";
import Select from "./Select";
import Box from "./Box.js";
import Button from "./Button";
import "./PageWrapper.css";

class PageWrapper extends Component {
  constructor(props) {
    super(props);
    this.player1handler = this.player1handler.bind(this);
    this.player2handler = this.player2handler.bind(this);
    this.state = {
      player1: "Matt",
      player2: "Ryan"
    };
  }
  player1handler(value) {
    this.setState = {
      player1: value
    };
  }
  player2handler(value) {
    this.setState(
      {
        player2: value
      }
      // () => console.log("Player 2:", this.state.player2)
    );
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Box />
        <section id="player_select">
          <Select action={this.player1handler} id="Player 1" value="Matt" />
          Vs.
          <Select action={this.player2handler} id="Player 2" value="Ryan" />
        </section>
        <Button>Submit</Button>
        <Board />
      </div>
    );
  }
}

export default PageWrapper;
