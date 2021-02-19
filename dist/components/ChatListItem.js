"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _MoreHoriz = _interopRequireDefault(require("@material-ui/icons/MoreHoriz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (_ref) {
  var palette = _ref.palette;
  return {
    root: function root(_ref2) {
      var active = _ref2.active;
      return _objectSpread({
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 10
      }, active && {
        backgroundColor: 'rgba(0, 0, 0, .05)'
      });
    },
    rootHover: {
      '&:hover': {
        '& $dot': {
          display: 'none'
        },
        '& $responded': {
          display: 'none'
        },
        '& $more': {
          visibility: 'visible'
        }
      }
    },
    avatar: {
      width: 50,
      height: 50,
      marginRight: 12
    },
    primary: function primary(_ref3) {
      var bold = _ref3.bold;
      return _objectSpread({}, bold && {
        fontWeight: 'bold'
      });
    },
    secondary: function secondary(_ref4) {
      var bold = _ref4.bold;
      return _objectSpread({
        fontSize: 13,
        color: '#999'
      }, bold && {
        fontWeight: 'bold',
        color: palette.text.primary
      });
    },
    "float": {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    dot: {
      width: 12,
      height: 12,
      backgroundColor: '#09f',
      borderRadius: '50%'
    },
    more: {
      visibility: 'hidden',
      fontSize: 20
    },
    responded: {
      width: 16,
      height: 16
    }
  };
});

var ChatListItem = function ChatListItem(_ref5) {
  var bold = _ref5.bold,
      active = _ref5.active,
      avatar = _ref5.avatar,
      name = _ref5.name,
      info = _ref5.info,
      responded = _ref5.responded,
      concise = _ref5.concise;
  var styles = useStyles({
    bold: bold,
    active: active
  });
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    px: 1
  }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    className: (0, _clsx["default"])(styles.root, styles.rootHover)
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    src: avatar,
    className: styles.avatar
  }), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: name,
    secondary: info,
    primaryTypographyProps: {
      noWrap: true
    },
    secondaryTypographyProps: {
      noWrap: true
    },
    classes: {
      primary: styles.primary,
      secondary: styles.secondary
    }
  }), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    position: 'relative'
  }, /*#__PURE__*/_react["default"].createElement(_MoreHoriz["default"], {
    className: styles.more
  }), bold && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(styles["float"], styles.dot)
  }), responded && /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    src: avatar,
    className: (0, _clsx["default"])(styles["float"], styles.responded)
  })))));
};

var _default = ChatListItem;
exports["default"] = _default;