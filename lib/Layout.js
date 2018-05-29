'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;

var _renderRoutes = require('./renderRoutes');

var _renderRoutes2 = _interopRequireDefault(_renderRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _renderRoutes2.default)(props.route.routes);
}
//# sourceMappingURL=Layout.js.map