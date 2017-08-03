import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import FullRoster from './Roster/FullRoster';
// import Player from './Roster/Player';
import PlayerAPI from '../PlayerAPI';
// import { Link } from 'react-router-dom';

export default class Teams extends Component {

  constructor(){
    super();
    this.state = {
      teams: []
    }
  }

  componentDidMount(){

    const getTeam = PlayerAPI.players.map((player, index) => {
      return player.team;
    })

    for(let i = 0; i < getTeam.length; i++){
      let currentTeam = getTeam[i];
      for(let j = 0; j < getTeam.length; j++){
        if(currentTeam.ID === getTeam[j].ID && i !== j){
          getTeam.splice(currentTeam, 1)
          // console.log(this.state.teams);
        }
      }
    }
    this.setState({teams: getTeam})
    // this.looper();
  }




  render() {
    return (
      <div>
        <h1>TEAMS</h1>
        <ul>
          {this.state.teams.map((team, index) =>{
            return <li key={index}> {team.City} {team.Name} </li>
          })}
        </ul>

      </div>
    );
  }
}


//shorter way instead of setting state
// <ul>
//   {PlayerAPI.players.map((player, index) =>{
//     return <li key={index}> {player.player.FirstName} {player.player.LastName} </li>
//   })}
// </ul>
