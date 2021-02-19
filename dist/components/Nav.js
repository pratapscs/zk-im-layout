"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _useConfig = _interopRequireDefault(require("../hooks/useConfig"));

var _useHeightAdjustment = _interopRequireDefault(require("../hooks/useHeightAdjustment"));

var _useAutoCollapse = _interopRequireDefault(require("../hooks/useAutoCollapse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (_ref) {
  var breakpoints = _ref.breakpoints,
      transitions = _ref.transitions,
      palette = _ref.palette,
      spacing = _ref.spacing,
      zIndex = _ref.zIndex,
      shadows = _ref.shadows;
  return {
    root: {},
    heightAdjustment: {
      flexShrink: 0,
      transition: transitions.create()
    },
    container: {
      overflow: 'hidden',
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      transition: transitions.create(['width'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen
      })
    },
    content: {
      flexGrow: 1,
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    toggleButton: _defineProperty({
      backgroundColor: palette.grey[50],
      textAlign: 'center',
      borderRadius: 0,
      borderTop: '1px solid',
      borderColor: 'rgba(0,0,0,0.12)'
    }, breakpoints.up('sm'), {
      minHeight: 40
    }),
    closeButton: {
      position: 'absolute',
      bottom: spacing(2),
      zIndex: zIndex.modal + 1,
      background: palette.common.white,
      boxShadow: shadows[2],
      '@media (hover: none)': {
        backgroundColor: palette.grey[300]
      },
      '&:hover': {
        backgroundColor: '#e5e5e5'
      }
    }
  };
});

var Nav = function Nav(_ref2) {
  var className = _ref2.className,
      header = _ref2.header,
      children = _ref2.children,
      renderIcon = _ref2.renderIcon,
      toggleProps = _ref2.toggleProps,
      props = _objectWithoutProperties(_ref2, ["className", "header", "children", "renderIcon", "toggleProps"]);

  (0, _useAutoCollapse["default"])();
  var ctx = (0, _useConfig["default"])();
  var opened = ctx.opened,
      setOpened = ctx.setOpened,
      navVariant = ctx.navVariant,
      navAnchor = ctx.navAnchor,
      navWidth = ctx.navWidth,
      collapsedWidth = ctx.collapsedWidth,
      collapsible = ctx.collapsible,
      collapsed = ctx.collapsed,
      setCollapsed = ctx.setCollapsed;
  var height = (0, _useHeightAdjustment["default"])();

  var getWidth = function getWidth() {
    if (collapsible && collapsed) return collapsedWidth;
    return navWidth;
  };

  var shouldRenderButton = collapsible && renderIcon;
  var classes = useStyles(props);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Drawer["default"], _extends({}, props, {
    className: "".concat(className, " ").concat(classes.root),
    open: opened,
    onClose: function onClose() {
      return setOpened(false);
    },
    variant: navVariant,
    anchor: navAnchor
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.container,
    style: {
      width: getWidth()
    }
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    className: classes.heightAdjustment,
    height: "".concat(height, "px")
  }), typeof header === 'function' ? header(ctx) : header, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.content
  }, typeof children === 'function' ? children(ctx) : children), shouldRenderButton && /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({}, toggleProps, {
    className: classes.toggleButton,
    fullWidth: true,
    onClick: function onClick() {
      return setCollapsed(!collapsed);
    }
  }), renderIcon(collapsed, setCollapsed)))), /*#__PURE__*/_react["default"].createElement(_Grow["default"], {
    "in": opened && navVariant === 'temporary' && !!renderIcon
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    className: classes.closeButton,
    style: {
      left: navWidth + 16
    },
    onClick: function onClick() {
      return setOpened(false);
    }
  }, renderIcon(false))));
};

Nav.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,
  header: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),
  renderIcon: _propTypes["default"].func,
  toggleProps: _propTypes["default"].shape({})
};
Nav.defaultProps = {
  className: '',
  header: null,
  renderIcon: null,
  toggleProps: {}
};
var _default = Nav;
exports["default"] = _default;