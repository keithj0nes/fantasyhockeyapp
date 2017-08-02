import React, { Component } from 'react';
import nhlShield from './img/nhlshield.png';
import { Link } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/"><img src={nhlShield} className="App-logo" alt="logo" /></Link>
          <h1><Link to="/">HOME</Link></h1>
          <h1><Link to="/roster">ROSTER</Link></h1>
        </div>

        <Home />

      </div>
    );
  }
}
