import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import PlayerAPI from '../../PlayerAPI';
// import { Link } from 'react-router-dom';

export default class AllTeams extends Component {



  render() {
    console.log(this.props.match.params); // id:20
    return (
      <div>
        <h1>SPECIFIC TEAM</h1>


      </div>
    );
  }
}
