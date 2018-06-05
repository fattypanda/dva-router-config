import renderRoutes from './renderRoutes';

export default function Layout (props = {}) {
  console.log(props);
  return renderRoutes(props.route.routes);
}
