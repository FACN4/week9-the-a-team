import React, { Component } from "react";
import "./Board.css";
import Square from "./Square";
import Box from "./Box.js";

const one = 1;
const two = 2;
const three = 3;

class Board extends Component {
  constructor(props) {
    super(props);
    this.board = [
      [9, 9, 9, 9, 9],
      [9, 0, 0, 0, 9],
      [9, 0, 0, 0, 9],
      [9, 0, 0, 0, 9],
      [9, 9, 9, 9, 9]
    ]; /// 999 is the border
    this.state = {
      player: this.props.player1,
      counter: 0,
      winner: 0,
      freezeBoard: false
    };
  }
  squareHandler = (xCords, yCords) => {
    //assign the board
    this.playerMove(xCords, yCords);
  };
  buildGrid = () => {
    return [1, 2, 3].map(y =>
      [1, 2, 3].map(x => {
        let hi = `${x}${y}`;
        return (
          <div onClick={() => this.squareHandler(x, y)}>
            <Square
              x={x}
              y={y}
              state={this.board[x][y]}
              id={hi}
              key={hi}
              player={this.state.player}
            />
          </div>
        );
      })
    );
  };
  // get next player turn
  nextPlayer() {
    return this.state.player === this.props.player1
      ? this.props.player2
      : this.props.player1;
    //  return  this.state.player === 1 ? 2 : 1 ;
  }
  // Place a move on the board and check for a winner.
  move(x, y, player, callback) {
    this.changeValue(x, y, player);
    let newCounter = this.state.counter + 1;
    const winner = this.checkWinner(x, y, newCounter);
    // if we have a winner then board becomes unclickable

    if (winner === this.props.player1 || winner === this.props.player2) {
      this.setState({ winner: winner, freezeBoard: true });
    } else if (winner === 3) {
      // if this is a tie board becomes unclickable with no winner
      this.setState({ winner: "No one", freezeBoard: true });
    } else {
      callback();
    }
  }
  // Handle a player's move, and switch to the next player.
  playerMove(x, y) {
    // const [ x, y ] = event.target.dataset.cell.split('_');
    // const cellEmpty = this.board.getCell(x, y) === 0;
    if (this.board[x][y] === 0) {
      this.move(x, y, this.state.player, () => {
        this.setState({
          player: this.nextPlayer(),
          counter: this.state.counter + 1
        });
      });
    }
  }
  handleNewGame = () => {
    window.location.reload();
  };
  handleResetClick = () => {
    this.board = [
      [9, 9, 9, 9, 9],
      [9, 0, 0, 0, 9],
      [9, 0, 0, 0, 9],
      [9, 0, 0, 0, 9],
      [9, 9, 9, 9, 9]
    ];
    this.setState({
      player: this.props.player1,
      counter: 0,
      winner: 0,
      freezeBoard: false
    });
  };
  changeValue(x, y, who) {
    // who can be 1 or 2
    this.board[x][y] = who;
  }
  checkFull(counter) {
    if (counter > 8) return "full";
    return "notFull";
  }
  ///////// Check functions ///////////////
  checkVertical(x, y) {
    //x is fixed checking only y of that column
    const tile1 = this.board[x][one];
    if (
      tile1 === this.board[x][two] &&
      tile1 === this.board[x][three] &&
      tile1 !== 0
    )
      return tile1;
    else return 0;
  }
  checkHorizontal(x, y) {
    //y is fixed checking only x of this line
    const tile1 = this.board[one][y];
    if (
      tile1 === this.board[two][y] &&
      tile1 === this.board[three][y] &&
      tile1 !== 0
    )
      return tile1;
    else return 0;
  }
  checkDiagnolLeft(x, y) {
    //moving x,y diagno left
    if (x !== y) return 0;
    const tile1 = this.board[one][one];
    if (
      tile1 === this.board[two][two] &&
      tile1 === this.board[three][three] &&
      tile1 !== 0
    )
      return tile1;
    else return 0;
  }
  checkDiagonalRight(x, y) {
    const tile1 = this.board[three][one];
    if (
      tile1 === this.board[two][two] &&
      tile1 === this.board[one][three] &&
      tile1 !== 0
    )
      return tile1;
    else return 0;
  }
  checkWinner(xCords, yCords, counter) {
    // 0 when still can go , 1 is winner, 2 is winner, 3  is tie
    let gameWinner = 0; //no winner as default if this value changes in any of the checks then we have a winner
    gameWinner = this.checkVertical(xCords, yCords);
    if (gameWinner !== 0) {
      return gameWinner;
    }
    gameWinner = this.checkHorizontal(xCords, yCords);
    if (gameWinner !== 0) {
      return gameWinner;
    }
    gameWinner = this.checkDiagnolLeft(xCords, yCords);
    if (gameWinner !== 0) {
      return gameWinner;
    }
    gameWinner = this.checkDiagonalRight(xCords, yCords);
    if (gameWinner !== 0) {
      return gameWinner;
    }
    //if all check are done we need to check if the board is full then we have a tie so we return 3
    if (counter === 9) {
      return 3;
    }
    // if we get here then all checks returned zero and the counter is less than 9 (board not full) then return 0
    return 0;
  }
  render() {
    if (!this.state.freezeBoard) {
      return (
        <div onClick={this.handleClick}>
          <Box>{this.state.player}'s Turn</Box>
          <div className="board">{this.buildGrid()}</div>
        </div>
      );
    } else {
      return (
        <div>
          <Box>{this.state.winner} won!</Box>
          <button className="button endpage" onClick={this.handleResetClick}>
            Play again with same players
          </button>
          <br />
          <br />
          <button className="button endpage" onClick={this.handleNewGame}>
            Play again with new players
          </button>
        </div>
      );
    }
  }
}

export default Board;
