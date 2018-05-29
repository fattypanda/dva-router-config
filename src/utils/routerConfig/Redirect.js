import React from 'react';
import {
  Route as ReactRoute,
  Redirect as ReactRedirect,
} from 'react-router';

export default function Redirect (props = {}) {
  return (
    <ReactRoute exact={props.exact} path={props.path} render={({ location = {} } = {}) => (
      <ReactRedirect {...props} to={{...location, pathname: props.redirect }} />
    )}/>
  );
}
