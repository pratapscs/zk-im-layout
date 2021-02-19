"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _useConfig = _interopRequireDefault(require("../hooks/useConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (_ref) {
  var _root;

  var breakpoints = _ref.breakpoints,
      palette = _ref.palette,
      spacing = _ref.spacing,
      transitions = _ref.transitions;
  return {
    root: (_root = {
      borderTop: '1px solid',
      borderColor: palette.grey[200],
      padding: spacing(2)
    }, _defineProperty(_root, breakpoints.up('sm'), {
      padding: spacing(3)
    }), _defineProperty(_root, "transition", transitions.create(['margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    })), _root)
  };
});

var Footer = function Footer(_ref2) {
  var className = _ref2.className,
      Component = _ref2.component,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "component", "style"]);

  var ctx = (0, _useConfig["default"])();
  var navVariant = ctx.navVariant,
      navWidth = ctx.navWidth,
      collapsible = ctx.collapsible,
      collapsed = ctx.collapsed,
      collapsedWidth = ctx.collapsedWidth,
      footerShrink = ctx.footerShrink,
      open = ctx.open,
      navAnchor = ctx.navAnchor;

  var getMargin = function getMargin() {
    if (navAnchor !== 'left' || !footerShrink) return 0;

    if (navVariant === 'persistent' && open) {
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

  var classes = useStyles(props);
  return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
    className: "".concat(classes.root, " ").concat(className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      marginLeft: getMargin()
    })
  }));
};

Footer.propTypes = {
  className: _propTypes["default"].string,
  component: _propTypes["default"].elementType,
  style: _propTypes["default"].shape({})
};
Footer.defaultProps = {
  className: '',
  component: 'footer',
  style: {}
};
var _default = Footer;
exports["default"] = _default;