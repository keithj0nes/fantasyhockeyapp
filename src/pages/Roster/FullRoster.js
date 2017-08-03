import React, { Component } from 'react';
import PlayerAPI from '../../PlayerAPI';
import { Link } from 'react-router-dom';

export default class FullRoster extends Component {

  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    const players = PlayerAPI.players.map((player, index) => {
      // console.log(player);
      return player;
    })
    this.setState({players: players})
    // console.log(PlayerAPI.players.);
  }

  render() {
    return (
      <div>
        <h1>FULL ROSTER</h1>
        <ul>
          {this.state.players.map((player, index) =>{
            return <li key={index}><Link to={`/roster/${player.player.ID}`}>{player.player.FirstName} {player.player.LastName}</Link> </li>
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
