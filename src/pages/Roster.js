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


// <div>
//   <h1></h1>
//   <ul>
//     {this.state.players.map((player, index) =>{
//       return <li key={index}> {player.player.FirstName} {player.player.LastName} </li>
//     })}
//   </ul>
//
//
// </div>

//shorter way instead of setting state
// <ul>
//   {PlayerAPI.players.map((player, index) =>{
//     return <li key={index}> {player.player.FirstName} {player.player.LastName} </li>
//   })}
// </ul>
