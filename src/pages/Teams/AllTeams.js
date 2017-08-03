import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import FullRoster from './Roster/FullRoster';
// import Player from './Roster/Player';
import PlayerAPI from '../../PlayerAPI';
import { Link } from 'react-router-dom';

export default class AllTeams extends Component {

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

    console.log(getTeam);

    for(var i = 0; i < getTeam.length; i++){
      var currentTeam = getTeam[i];
      // console.log(currentTeam);
      for(var j = 0; j < getTeam.length; j++){
        var newCurrentTeam = getTeam[j];
        console.log(newCurrentTeam);


        // if(currentTeam === newCurrentTeam ){
        //   console.log("these are matching");
        //
        // }
        //
        // if(i !== j){
        //   console.log("indexs are not the same");
        // }

        console.log(currentTeam === newCurrentTeam && i !== j);
      }
      console.log("end---------------", i);
    }
    this.setState({teams: getTeam})
    // this.looper();
  }



//   St. Louis Blues
//   Carolina Hurricanes
//   Washington Capitals
//
//
//
//
// Toronto Maple Leafs
// Ottawa Senators
// Columbus Blue Jackets
// Calgary Flames
// Los Angeles Kings
// Colorado Avalanche
// Chicago Blackhawks
// Pittsburgh Penguins
// Winnipeg Jets
// Nashville Predators
// Detroit Red Wings
// Columbus Blue Jackets
// Buffalo Sabres
// New Jersey Devils
// Vancouver Canucks
// Boston Bruins


  render() {
    return (
      <div>
        <h1>TEAMS</h1>
        <ul>
          {this.state.teams.map((team, index) =>{
            return <li key={index}><Link to={`/teams/${team.ID}`}>{team.City} {team.Name}</Link> </li>
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
