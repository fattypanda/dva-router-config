import React from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import {
  Route as ReactRoute,
  Redirect as ReactRedirect,
} from 'react-router';
import dynamic from 'dva/dynamic';
import _set from 'lodash/set';
import _isString from 'lodash/isString';
import _isArray from 'lodash/isArray';
import _isFunction from 'lodash/isFunction';
import _isBoolean from 'lodash/isBoolean';

const Layout = (props = {}) => renderRoutes(props.route.routes);

const Redirect = (props = {}) => (
  <ReactRoute exact={props.exact} path={props.path} render={({ location = {} } = {}) => (
    <ReactRedirect {...props} to={{...location, pathname: props.redirect }} />
  )}/>
);

const convertRoutesConfig = (routes = [], { app = {} } = {}) => {
  return routes.map((route) => {
    const { path, component, models, routes, exact, redirect } = route;
    const state = {};
    const dynamicParams = { app };

    _isString(path) && _set(state, 'path', path);
    _isBoolean(exact) && _set(state, 'exact', exact);
    //  记录 model
    if (_isFunction(models)){
      _set(dynamicParams, 'models', models);
    }
    if (_isString(redirect)) {
      //  记录 redirect 组件
      _set(dynamicParams, 'component', () => () => Redirect({ exact, path, redirect }));
    } else if (_isFunction(component)) {
      //  记录 配置中的组件
      _set(dynamicParams, 'component', component);
    } else {
      //  记录 预设Layout 组件
      _set(dynamicParams, 'component', () => Layout);
    }
    //  异步挂载组件（第一次挂载组件时会注册对应的 models ）
    _set(state, 'component', dynamic(dynamicParams));
    //  子路由配置
    if (_isArray(routes) && routes.length > 0) {
      _set(state, 'routes', convertRoutesConfig(routes, { app }));
    }
    return state;
  });
};

const convertRoutes = (routes = [], { app = {} } = {}) => {
  return renderRoutes(convertRoutesConfig(routes, { app }));
}

export {
  convertRoutesConfig,
  convertRoutes,
  renderRoutes,
  matchRoutes,
}
