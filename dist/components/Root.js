"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _context = _interopRequireDefault(require("../context"));

var _presets = require("../utils/presets");

var _useMergedConfig = _interopRequireDefault(require("../hooks/useMergedConfig"));

var _useWidth = _interopRequireDefault(require("../hooks/useWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialConfig = (0, _presets.createDefaultLayout)(); // eslint-disable-next-line react/prop-types

var Root = function Root(_ref) {
  var children = _ref.children,
      config = _ref.config;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      opened = _useState4[0],
      setOpened = _useState4[1];

  var mergedConfig = (0, _useMergedConfig["default"])(config, initialConfig);
  var screen = (0, _useWidth["default"])(); // screen could be null at first render

  return /*#__PURE__*/_react["default"].createElement(_context["default"].Provider, {
    value: _objectSpread(_objectSpread({}, mergedConfig), {}, {
      screen: screen,
      collapsed: collapsed,
      setCollapsed: setCollapsed,
      opened: opened,
      setOpened: setOpened
    })
  }, /*#__PURE__*/_react["default"].createElement(_CssBaseline["default"], null), children);
};

var createScreenPropTypes = function createScreenPropTypes(valPropTypes) {
  return _propTypes["default"].shape({
    xs: valPropTypes,
    sm: valPropTypes,
    md: valPropTypes,
    lg: valPropTypes,
    xl: valPropTypes
  });
};

Root.propTypes = {
  // from HOC
  // general
  config: _propTypes["default"].shape({
    clipped: _propTypes["default"].oneOfType([_propTypes["default"].bool, createScreenPropTypes(_propTypes["default"].bool)]),
    collapsible: _propTypes["default"].oneOfType([_propTypes["default"].bool, createScreenPropTypes(_propTypes["default"].bool)]),
    collapsedWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, createScreenPropTypes(_propTypes["default"].number)]),
    collapsed: _propTypes["default"].bool,
    navVariant: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['permanent', 'persistent', 'temporary']), createScreenPropTypes(_propTypes["default"].oneOf(['permanent', 'persistent', 'temporary']))]),
    navWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, createScreenPropTypes(_propTypes["default"].number)]),
    navAnchor: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['left', 'bottom']), createScreenPropTypes(_propTypes["default"].oneOf(['left', 'bottom']))]),
    headerPosition: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['static', 'relative', 'sticky', 'fixed', 'absolute']), createScreenPropTypes(_propTypes["default"].oneOf(['static', 'relative', 'sticky', 'fixed', 'absolute']))]),
    squeezed: _propTypes["default"].oneOfType([_propTypes["default"].bool, createScreenPropTypes(_propTypes["default"].bool)]),
    footerShrink: _propTypes["default"].oneOfType([_propTypes["default"].bool, createScreenPropTypes(_propTypes["default"].bool)])
  }),
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired
};
Root.defaultProps = {
  config: initialConfig
};
var _default = Root;
exports["default"] = _default;