import React, { Component } from "react";
import Board from "./Board";
import Select from "./Select";
import Box from "./Box.js";
import "./PageWrapper.css";

class PageWrapper extends Component {
  render() {
    return (
      <div>
        <Box />
        <section id="player_select">
          <Select id="Player 1" />
          Vs.
          <Select id="Player 2" />
        </section>
        <Board />
      </div>
    );
  }
}

export default PageWrapper;
