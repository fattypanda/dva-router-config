import React from 'react';
import { Router } from 'dva/router';
import { convertRoutes, } from 'src/utils/routerConfig';
import routesConfig from './routes/Person/routes';

function RouterConfig({ app, history }) {
  return (
    <Router history={history}>
      {convertRoutes(routesConfig, { app, history })}
    </Router>
  );
}

export default RouterConfig;
