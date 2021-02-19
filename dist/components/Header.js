"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _useConfig = _interopRequireDefault(require("../hooks/useConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var createGet = function createGet(_ref, normal, shrink, pushed, unsqueeze) {
  var clipped = _ref.clipped,
      navVariant = _ref.navVariant,
      collapsible = _ref.collapsible,
      collapsed = _ref.collapsed,
      opened = _ref.opened,
      squeezed = _ref.squeezed,
      navAnchor = _ref.navAnchor;
  return function () {
    if (clipped || navAnchor !== 'left') return normal;

    if (navVariant === 'persistent' && opened) {
      // opened is effect only when
      // navVariant === 'persistent' ||
      // navVariant === 'temporary'
      if (squeezed) {
        return pushed;
      }

      return unsqueeze;
    }

    if (navVariant === 'permanent') {
      if (collapsible) {
        if (collapsed) return shrink;
        return pushed;
      }

      return pushed;
    }

    return normal;
  };
};

var useStyles = (0, _styles.makeStyles)(function (_ref2) {
  var zIndex = _ref2.zIndex,
      transitions = _ref2.transitions;
  return {
    root: function root(_ref3) {
      var clipped = _ref3.clipped;
      return {
        zIndex: clipped ? zIndex.drawer + 1 : zIndex.appBar,
        transition: transitions.create(['margin', 'width'], {
          easing: transitions.easing.sharp,
          duration: transitions.duration.leavingScreen
        })
      };
    }
  };
});
var useMenuButtonStyles = (0, _styles.makeStyles)(function (_ref4) {
  var spacing = _ref4.spacing;
  return {
    root: {
      marginLeft: spacing(-1),
      marginRight: spacing(1)
    }
  };
});

var Header = function Header(_ref5) {
  var style = _ref5.style,
      children = _ref5.children,
      toolbarProps = _ref5.toolbarProps,
      renderMenuIcon = _ref5.renderMenuIcon,
      menuButtonProps = _ref5.menuButtonProps,
      props = _objectWithoutProperties(_ref5, ["style", "children", "toolbarProps", "renderMenuIcon", "menuButtonProps"]);

  var ctx = (0, _useConfig["default"])();
  var clipped = ctx.clipped,
      collapsedWidth = ctx.collapsedWidth,
      navWidth = ctx.navWidth,
      navVariant = ctx.navVariant,
      headerPosition = ctx.headerPosition,
      opened = ctx.opened,
      setOpened = ctx.setOpened;
  var getWidth = createGet(ctx, '100%', "calc(100% - ".concat(collapsedWidth, "px)"), "calc(100% - ".concat(navWidth, "px)"), '100%');
  var getMargin = createGet(ctx, 0, collapsedWidth, navWidth, navWidth);
  var shouldRenderMenu = navVariant !== 'permanent' && !!renderMenuIcon;
  var classes = useStyles(_objectSpread(_objectSpread({}, props), {}, {
    clipped: clipped
  }));
  var menuButtonClasses = useMenuButtonStyles(menuButtonProps);
  return /*#__PURE__*/_react["default"].createElement(_AppBar["default"], _extends({
    color: 'default',
    elevation: 0
  }, props, {
    position: headerPosition,
    classes: classes,
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: getWidth(),
      marginLeft: getMargin()
    })
  }), /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], toolbarProps, shouldRenderMenu && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], _extends({
    onClick: function onClick() {
      return setOpened(!opened);
    }
  }, menuButtonProps, {
    classes: menuButtonClasses
  }), renderMenuIcon(opened, setOpened)), typeof children === 'function' ? children(ctx) : children));
};

Header.propTypes = {
  style: _propTypes["default"].shape({}),
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  toolbarProps: _propTypes["default"].shape({}),
  renderMenuIcon: _propTypes["default"].func,
  menuButtonProps: _propTypes["default"].shape({})
};
Header.defaultProps = {
  style: {},
  children: null,
  toolbarProps: {},
  renderMenuIcon: null,
  menuButtonProps: {}
};
var _default = Header;
exports["default"] = _default;