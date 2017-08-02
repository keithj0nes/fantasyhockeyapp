import React, { Component } from 'react';
import nhlShield from './img/nhlshield.png';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Roster from "./pages/Roster";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/"><img src={nhlShield} className="App-logo" alt="logo" /></Link>
          <h1><Link to="/">HOME</Link></h1>
          <h1><Link to="/roster">ROSTER</Link></h1>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roster" component={Roster} />
        </Switch>

      </div>
    );
  }
}
