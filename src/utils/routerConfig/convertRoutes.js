import renderRoutes from './renderRoutes';
import convertRoutesConfig from './convertRoutesConfig';

export default function convertRoutes (routes = [], { app = {} } = {}) {
  return renderRoutes(convertRoutesConfig(routes, { app }));
}
