import React, { Component } from 'react';
import PlayerAPI from '../PlayerAPI';

export default class Home extends Component {
  render() {
    console.log(PlayerAPI[0].player);
    return (
      <h1>HOME</h1>
    );
  }
}
