import React, { Component } from 'react';
import PlayerAPI from '../../PlayerAPI';
import { Link } from 'react-router-dom';

export default class Player extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     players: []
  //   }
  // }
  //
  // componentDidMount(){
  //   console.log("firing");
  //   const players = PlayerAPI.players.map((player, index) => {
  //     // console.log(player);
  //     return player;
  //   })
  //   this.setState({players: players})
  //   // console.log(PlayerAPI.players.);
  // }

  getPlayerByIndex(){
    let player = {};
// console.log(PlayerAPI.players.length);
      for(var i = 0; i < PlayerAPI.players.length; i++){
        let currentPlayer = PlayerAPI.players[i];
        if(PlayerAPI.players[i].player.ID === this.props.match.params.playerid){
          player = currentPlayer
        }
      }
      let p = player.player;
      let t = player.team;
      let s = player.stats;

      let text = '#text';
      let abbr = '@abbreviation';

      if(!p){
        return <div>Sorry no player found</div>;
      } else {
        console.log(player, "selected player");
      }

      if(p.Position === "G"){
        return (
          <div>
            <div>
              <h1>{p.FirstName} {p.LastName}</h1>
              <h2>DOB: {p.BirthDate}, Age: {p.Age}</h2>
              <h2>Birth Place: {p.BirthCity}, {p.BirthCountry}</h2>
              <h2>Height: {p.Height}, Weight: {p.Weight}</h2>
            </div>
            <br />
            <div>
              <h1>Current Team: {t.City} {t.Name}</h1>
            </div>
            <br />
            <div>
              <h1>2016 Stats</h1>
              <h2>{s.GamesPlayed[text]} {s.GamesPlayed[abbr]}</h2>
              <br />
              <h2>Wins: {s.stats.Wins[text]}</h2>
              <h2>Saves: {s.stats.Saves[text]}</h2>
              <h2>Save %: {s.stats.SavePercentage[text]}</h2>
              <h2>Shutouts: {s.stats.Shutouts[text]}</h2>
            </div>
          </div>
        )
      }


      return (
        <div>
          <div>
            <h1>{p.FirstName} {p.LastName}</h1>
            <h2>DOB: {p.BirthDate}, Age: {p.Age}</h2>
            <h2>Birth Place: {p.BirthCity}, {p.BirthCountry}</h2>
            <h2>Height: {p.Height}, Weight: {p.Weight}</h2>
          </div>
          <br />
          <div>
            <h1>Current Team:<Link to={`/teams/${t.ID}`}> {t.City} {t.Name}</Link></h1>
          </div>
          <br />
          <div>
            <h1>2016 Stats</h1>
            <h2>{s.GamesPlayed[text]} {s.GamesPlayed[abbr]}</h2>
            <br />
            <h2>Goals: {s.stats.Goals[text]}</h2>
            <h2>Assists: {s.stats.Assists[text]}</h2>
            <h2>Points: {s.stats.Points[text]}</h2>
            <h2>{s.stats.PlusMinus[abbr]}: {s.stats.PlusMinus[text]}</h2>
            <h2>Shots: {s.stats.Shots[text]}</h2>

          </div>
        </div>
      )
    // const player = PlayerAPI.players.map((player) => {
    //   // console.log(player[this.props.match.params.index]);
    //   console.log(player);
    // })
  }

  render() {
    return (
      <div>

        {this.getPlayerByIndex()}
        <br />
        <br />
        <br />

        <Link to="/roster">Back</Link>
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
