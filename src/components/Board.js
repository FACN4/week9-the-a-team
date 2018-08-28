import React, { Component } from "react";
import "./Board.css";
import Square from "./Square";

class Board extends Component {
  render() {
    return [1, 2, 3].map(y =>
      [1, 2, 3].map(x => {
        return (
          <div>
            <Square x={x} y={y} state={0} />
          </div>
        );
      })
    );
  }
}

export default Board;
