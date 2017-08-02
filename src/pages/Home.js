import React, { Component } from 'react';
// import PlayerAPI from '../PlayerAPI';
import { Link } from 'react-router-dom';
import Roster from './Roster';

export default class Home extends Component {


  render() {
    return (
      <div>

        <h1>Welcome to the 2016 NHL stats page</h1>
        <br />
        <Roster />
      </div>
    );
  }
}
