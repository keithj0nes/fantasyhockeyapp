import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './Roster/FullRoster';
import Player from './Roster/Player';

export default class Roster extends Component {

  render() {
    console.log("here");
    return (
      <Switch>
        <Route exact path="/roster" component={FullRoster} />
        <Route path="/roster/:index" component={Player} />
      </Switch>
    );
  }
}
