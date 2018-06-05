import renderRoutes from './renderRoutes';
import convertRoutesConfig from './convertRoutesConfig';
import config from './config';

export default function convertRoutes (routes = [], { app = {} } = {}) {
  const props = {};
  if (config.resolveUrlParams)
  return renderRoutes(convertRoutesConfig(routes, { app }));
}
