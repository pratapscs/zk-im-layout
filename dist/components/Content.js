"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _useConfig = _interopRequireDefault(require("../hooks/useConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getMargin = function getMargin(_ref) {
  var navAnchor = _ref.navAnchor,
      navVariant = _ref.navVariant,
      navWidth = _ref.navWidth,
      collapsible = _ref.collapsible,
      collapsed = _ref.collapsed,
      collapsedWidth = _ref.collapsedWidth,
      opened = _ref.opened;
  if (navAnchor !== 'left') return 0;

  if (navVariant === 'persistent' && opened) {
    // open is effect only when
    // navVariant === 'persistent' ||
    // navVariant === 'temporary'
    return navWidth;
  }

  if (navVariant === 'permanent') {
    if (collapsible) {
      if (collapsed) return collapsedWidth;
      return navWidth;
    }

    return navWidth;
  }

  return 0;
};

var getWidth = function getWidth(_ref2) {
  var opened = _ref2.opened,
      navVariant = _ref2.navVariant,
      squeezed = _ref2.squeezed;

  if (navVariant === 'persistent' && opened) {
    // open is effect only when
    // navVariant === 'persistent' ||
    // navVariant === 'temporary'
    if (squeezed) {
      return 'auto';
    }

    return '100%';
  }

  return 'auto';
};

var getHeight = function getHeight(_ref3) {
  var headerPosition = _ref3.headerPosition,
      initialAdjustmentHeight = _ref3.initialAdjustmentHeight;
  if (headerPosition === 'fixed' || headerPosition === 'absolute') return initialAdjustmentHeight;
  return 0;
};

var useStyles = (0, _styles.makeStyles)(function (_ref4) {
  var transitions = _ref4.transitions;
  return {
    root: {
      flexGrow: 1,
      transition: transitions.create(['margin'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen
      })
    }
  };
});

var Content = function Content(_ref5) {
  var Component = _ref5.component,
      className = _ref5.className,
      children = _ref5.children,
      style = _ref5.style,
      props = _objectWithoutProperties(_ref5, ["component", "className", "children", "style"]);

  var ctx = (0, _useConfig["default"])();
  var classes = useStyles(props);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    height: getHeight(ctx)
  }), /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
    className: "".concat(classes.root, " ").concat(className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      marginLeft: getMargin(ctx),
      width: getWidth(ctx)
    })
  }), typeof children === 'function' ? children(ctx) : children));
};

Content.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,
  component: _propTypes["default"].elementType,
  style: _propTypes["default"].shape({})
};
Content.defaultProps = {
  className: '',
  component: 'main',
  style: {}
};
var _default = Content;
exports["default"] = _default;