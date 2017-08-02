import React, { Component } from 'react';
import nhlShield from './img/nhlshield.png'
import './App.css';

import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={nhlShield} className="App-logo" alt="logo" />
        </div>

        <Home />

      </div>
    );
  }
}
