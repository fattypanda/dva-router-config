'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertRoutes;

var _renderRoutes = require('./renderRoutes');

var _renderRoutes2 = _interopRequireDefault(_renderRoutes);

var _convertRoutesConfig = require('./convertRoutesConfig');

var _convertRoutesConfig2 = _interopRequireDefault(_convertRoutesConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertRoutes() {
  var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$app = _ref.app,
      app = _ref$app === undefined ? {} : _ref$app;

  return (0, _renderRoutes2.default)((0, _convertRoutesConfig2.default)(routes, { app: app }));
}
//# sourceMappingURL=convertRoutes.js.map