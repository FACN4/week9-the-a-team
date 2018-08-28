import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./game";
import Header from "./components/Header";
import PageWrapper from "./components/PageWrapper.js";
import Board from "./components/Board";

class App extends Component {
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
