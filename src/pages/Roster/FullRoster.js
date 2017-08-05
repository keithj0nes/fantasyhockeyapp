import React, { Component } from 'react';
import PlayerAPI from '../../PlayerAPI';
import { Link } from 'react-router-dom';

export default class FullRoster extends Component {

  constructor(){
    super();
    this.state = {
      players: [],
      search: ''
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

  updateSearch(e){
    // console.log(e.target.value);
    this.setState({search: e.target.value})
    setTimeout(()=>{
      // console.log(this.state.search);
    },10)
  }

  render() {
    let filteredSearch = this.state.players.filter((player)=>{
      return player.player.FirstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || player.player.LastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <input type="text" placeholder="Search players" onChange={this.updateSearch.bind(this)}/>
        <br />
        <br />

        <h1>FULL ROSTER</h1>

        <br />
        <ul>
          {filteredSearch.map((player, index) =>{
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
