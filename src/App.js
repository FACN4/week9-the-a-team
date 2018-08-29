
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper.js';



class App extends Component {
  //react class


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
