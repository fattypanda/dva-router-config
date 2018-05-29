import renderRoutes from './renderRoutes';

export default function Layout (props = {}) {
  return renderRoutes(props.route.routes);
}
