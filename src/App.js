import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game';

class App extends Component {
  //react class
  constructor() {
    this.board = new Game();
    this.state = { player: 1, counter: 0, winner: false, freezeBoard: false };
  }
  // get next player turn
  nextPlayer() {
    return this.state.player === 1 ? 2 : 1;
  }

  // Place a move on the board and check for a winner.
  move(x, y, player, callback) {
    this.board.changeValue(x, y, player);
    let newCounter = this.state.counter + 1;
    const winner = this.board.checkWinner(x, y, newCounter);
    // if we have a winner then board becomes unclickable
    if (winner === 1 || winner === 2) {
      this.setState({ winner: true, freezeBoard: true });
    } else if (winner === 3) {
      // if this is a tie board becomes unclickable with no winner
      this.setState({ winner: false, freezeBoard: true });
    } else {
      callback();
    }
  }


  // Handle a player's move, and switch to the next player.
 playerMove(event) {
   // const [ x, y ] = event.target.dataset.cell.split('_');
   // const cellEmpty = this.board.getCell(x, y) === 0;

   if (cellEmpty) {
     this.move(x, y, this.state.player, () => {
       if (this.props.singlePlayer) {
         this.setState({player: this.nextPlayer(), freezeBoard: true}, this.aiMove);
       } else {
         this.setState({player: this.nextPlayer()});
       }
     });
   }
 }

  render() {
    // className use App.css classes
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
