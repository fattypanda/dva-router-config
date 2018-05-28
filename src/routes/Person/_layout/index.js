import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'src/utils/routerConfig';

export default class Layout extends PureComponent {

  constructor(props) {
    super(props);
    console.warn('constructor layout');
  }

  render () {
    console.warn('render layout');
    const { route = {} } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to={'/person/home'}>home</Link>
          </li>
          <li>
            <Link to={'/person/mine'}>mine</Link>
          </li>
          <li>
            <Link to={'/person/redirect'}>redirect</Link>
          </li>
        </ul>
        {renderRoutes(route.routes)}
      </div>
    );
  }
}
