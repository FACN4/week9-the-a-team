import React, { Component } from "react";
import Board from "./Board";
import Select from "./Select";
import Box from "./Box.js";
import "./PageWrapper.css";

class PageWrapper extends Component {
  constructor(props) {
    super(props);
    this.player1handler = this.player1handler.bind(this);
    this.player2handler = this.player2handler.bind(this);
    this.nextView = this.nextView.bind(this);
    this.state = {
      view: 1,
      player1: "Matt",
      player2: "Matt",
      instruction:
        "Welcome to Tic Fac Toe. FAC's #1 Noughts and Crosses app. Tell us who is playing to begin."
    };
  }
  player1handler(value) {
    this.setState({
      player1: value
    });
  }
  player2handler(value) {
    this.setState({
      player2: value
    });
  }
  handleSubmit() {}
  nextView() {
    if (this.state.player1 === this.state.player2) {
      this.setState({ instruction: "Please choose 2 different players" });
    } else {
      this.setState({ view: 2 });
    }
  }
  render() {
    if (this.state.view === 1) {
      return (
        <div>
          <Box>{this.state.instruction}</Box>
          <section id="player_select">
            <Select action={this.player1handler} id="Player 1" />
            <div className="vs">Vs.</div>
            <Select action={this.player2handler} id="Player 2" />
          </section>
          <button className="button" onClick={this.nextView}>
            Submit
          </button>
        </div>
      );
    } else if (this.state.view === 2) {
      return (
        <Board player1={this.state.player1} player2={this.state.player2} />
      );
    }
  }
}

export default PageWrapper;
