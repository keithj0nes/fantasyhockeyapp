import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import AllTeams from './Teams/AllTeams';
import Team from './Teams/Team';

export default class Teams extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/teams" component={AllTeams} />
        <Route path="/teams/:id" component={Team} />
      </Switch>
    );
  }
}
