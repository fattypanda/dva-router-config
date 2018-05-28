import React, { Component } from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);
    console.warn('constructor home');
  }

  render () {
    console.warn('render home');
    return (
      <div>
        home
      </div>
    );
  }
}
