import React, { Component } from "react";
import "./Board.css";
import Square from "./Square";

class Board extends Component {
  buildGrid = () => {
    return [1, 2, 3].map(y =>
      [1, 2, 3].map(x => {
        return <Square x={x} y={y} state={0} />;
      })
    );
  };
  render() {
    return <div class="board">{this.buildGrid()}</div>;
  }
}

export default Board;
