import React, { Component } from 'react';
import { Button } from 'antd-mobile';

export default class Mine extends Component {

  constructor(props) {
    super(props);
    console.warn('constructor mine');
  }

  render () {
    console.warn('render mine');
    return (
      <div>
        mine
        <Button onClick={e => this.props.history.push({ pathname: '/person/home', state: { a: true } })}>12313213</Button>
      </div>
    );
  }
}
