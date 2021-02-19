"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _root, _svg;

  return {
    root: (_root = {
      paddingTop: 10,
      paddingBottom: 10
    }, _defineProperty(_root, theme.breakpoints.down('sm'), {
      justifyContent: 'center'
    }), _defineProperty(_root, '&:hover', {
      background: 'none',
      '& $icon': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
      }
    }), _root),
    icon: {
      minWidth: 0,
      borderRadius: 12,
      padding: 8,
      '& svg': (_svg = {
        color: '#fff',
        fontSize: 32
      }, _defineProperty(_svg, theme.breakpoints.down('sm'), {
        fontSize: 24
      }), _defineProperty(_svg, theme.breakpoints.down('xs'), {
        fontSize: 21
      }), _svg)
    },
    activeIcon: {
      border: '2px solid rgba(255,255,255,0.7)'
    }
  };
});

var WhiteIconItem = function WhiteIconItem(_ref) {
  var active = _ref.active,
      icon = _ref.icon,
      onClick = _ref.onClick;
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    className: styles.root,
    button: true,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
    className: (0, _clsx["default"])(styles.icon, active && styles.activeIcon)
  }, icon));
};

WhiteIconItem.propTypes = {
  icon: _propTypes["default"].node
};
WhiteIconItem.defaultProps = {
  icon: null
};
var _default = WhiteIconItem;
exports["default"] = _default;