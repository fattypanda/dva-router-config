import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

export default class Home extends Component {
  render () {
    return (
      <div>
        <Carousel
          className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={false}
          autoplay
          infinite
          speed={200}
          autoplayInterval={300}
          resetAutoplay={false}
        >
          {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
            <div className="v-item" key={type}>{type}</div>
          ))}
        </Carousel>
      </div>
    );
  }
}
