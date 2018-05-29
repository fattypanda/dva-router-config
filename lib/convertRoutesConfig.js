'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertRoutesConfig;

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Redirect = require('./Redirect');

var _Redirect2 = _interopRequireDefault(_Redirect);

var _dynamic = require('dva/dynamic');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isBoolean2 = require('lodash/isBoolean');

var _isBoolean3 = _interopRequireDefault(_isBoolean2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertRoutesConfig() {
  var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$app = _ref.app,
      app = _ref$app === undefined ? {} : _ref$app;

  return routes.map(function (route) {
    var path = route.path,
        component = route.component,
        models = route.models,
        routes = route.routes,
        exact = route.exact,
        redirect = route.redirect;

    var state = {};
    var dynamicParams = { app: app };

    (0, _isString3.default)(path) && (0, _set3.default)(state, 'path', path);
    (0, _isBoolean3.default)(exact) && (0, _set3.default)(state, 'exact', exact);
    //  记录 model
    if ((0, _isFunction3.default)(models)) {
      (0, _set3.default)(dynamicParams, 'models', models);
    }
    if ((0, _isString3.default)(redirect)) {
      //  记录 redirect 组件
      (0, _set3.default)(dynamicParams, 'component', function () {
        return function () {
          return (0, _Redirect2.default)({ exact: exact, path: path, redirect: redirect });
        };
      });
    } else if ((0, _isFunction3.default)(component)) {
      //  记录 配置中的组件
      (0, _set3.default)(dynamicParams, 'component', component);
    } else {
      //  记录 预设Layout 组件
      (0, _set3.default)(dynamicParams, 'component', function () {
        return _Layout2.default;
      });
    }
    //  异步挂载组件（第一次挂载组件时会注册对应的 models ）
    (0, _set3.default)(state, 'component', (0, _dynamic2.default)(dynamicParams));
    //  子路由配置
    if ((0, _isArray3.default)(routes) && routes.length > 0) {
      (0, _set3.default)(state, 'routes', convertRoutesConfig(routes, { app: app }));
    }
    return state;
  });
};
//# sourceMappingURL=convertRoutesConfig.js.map