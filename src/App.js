
import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper.js';



// class App extends Component {
  //react class
export const App = () => {

//  render() {
    return (
      <div className="App">
        <Header />
        <PageWrapper />
      </div>
    );
//  }
}

export default App;
