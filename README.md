# dva-router-config

#### 项目介绍
使用 react-router-config + dva/dynamic 来进行配置化异步加载组件（可嵌套路由）

#### 安装教程

```
yarn add dva-router-config
```
或者
```
npm i -S dva-router-config
```

#### 使用说明

1.基础示例
```jsx harmony
// routes.js
export default [
  {
    path: '/',
    exact: true,
    component: () => import('../IndexPage'),
  },
  {
    path: '/person',
    component: () => import('./_layout'),
    models: () => [
      import('src/models/person'),
    ],
    routes: [
      {
        path: '/person/redirect',
        exact: true,
        redirect: '/person/home',
      },
      {
        path: '/person/home',
        exact: true,
        component: () => import('./Home'),
        models: () => [
          import('src/models/person/home'),
          import('src/models/person/dict'),
        ],
      },
      {
        path: '/person/mine',
        exact: true,
        component: () => import('./Mine'),
        models: () => [
          import('src/models/person/mine'),
          import('src/models/person/dict'),
        ],
      },
    ]
  }
];
```
```jsx harmony
//  router.js
import React from 'react';
import { Router } from 'dva/router';
import { convertRoutes, } from 'dva-router-config';
import routesConfig from './routes/Person/routes';

function RouterConfig({ app, history }) {
  return (
    <Router history={history}>
      {convertRoutes(routesConfig, { app })}
    </Router>
  );
}

export default RouterConfig;
```

```jsx harmony
// _layout.js

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'dva-router-config';

export default class Layout extends PureComponent {

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
```
