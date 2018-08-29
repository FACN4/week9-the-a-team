import React, { Component } from "react";
import "./Board.css";
import Square from "./Square";
import Button from "./Button";

class Board extends Component {
  state = {
    winner: "Matt"
  };
  buildGrid = () => {
    return [1, 2, 3].map(y =>
      [1, 2, 3].map(x => {
        return <Square x={x} y={y} state={0} />;
      })
    );
  };
  render() {
    return (
      <div>
        <div className="board">{this.buildGrid()}</div>
        <div>
          <h2>{this.state.winner} won!</h2>
          <Button>Play Again</Button>
        </div>
      </div>
    );
  }
}

export default Board;
