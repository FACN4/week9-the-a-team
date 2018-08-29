
import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper.js';



class App extends Component {
  //react class

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
  playerMove(event, x, y) {
    // const [ x, y ] = event.tar}get.dataset.cell.split('_');
    // const cellEmpty = this.board.getCell(x, y) === 0;
    this.move(x, y, this.state.player, () => {
      this.setState({ player: this.nextPlayer() });
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <PageWrapper />
      </div>
    );
  }
}

export default App;
