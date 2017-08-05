import React, { Component } from 'react';
import PlayerAPI from '../../PlayerAPI';
import { Link } from 'react-router-dom';

export default class AllTeams extends Component {

  constructor(){
    super();
    this.state = {
      teamPlayer: []
    }
  }

  componentDidMount(){

    const getPlayers = PlayerAPI.players.map((player, index) =>{
      // console.log(player);
      return player;
    })

    let teamName = "";
    let teamPlayer = [];

    getPlayers.forEach((team, ind) => {
      if(team.team.ID === this.props.match.params.id){
        teamName = team.team.City + " " + team.team.Name;
        teamPlayer.push(team.player)
      }
    })

    this.setState({teamName: teamName, teamPlayer: teamPlayer})

    console.log(teamPlayer);

  }


  render() {
    // console.log(this.props.match.params); // id:20
    return (
      <div>
        <h1>{this.state.teamName}</h1>
        <br />
        <br />
        <ul>
          {this.state.teamPlayer.map((player, index)=>{
            return <li key={player.ID}><Link to={`/roster/${player.ID}`}>{player.FirstName} {player.LastName}</Link> </li>
          })}
        </ul>
        <br />
        <br />
        <br />
        <Link to="/teams">Back</Link>
      </div>
    );
  }
}


// {this.teamPlayer.map((player, index)=>{
//   return <li key={index}><Link to={`/roster/${index}`}>{player.player.FirstName} {player.player.LastName}</Link> </li>
// })}
