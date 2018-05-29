'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Redirect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Redirect() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return _react2.default.createElement(_reactRouter.Route, { exact: props.exact, path: props.path, render: function render() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$location = _ref.location,
          location = _ref$location === undefined ? {} : _ref$location;

      return _react2.default.createElement(_reactRouter.Redirect, _extends({}, props, { to: _extends({}, location, { pathname: props.redirect }) }));
    } });
}
//# sourceMappingURL=Redirect.js.map