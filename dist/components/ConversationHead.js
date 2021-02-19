"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _PhoneInTalk = _interopRequireDefault(require("@material-ui/icons/PhoneInTalk"));

var _Videocam = _interopRequireDefault(require("@material-ui/icons/Videocam"));

var _GroupAdd = _interopRequireDefault(require("@material-ui/icons/GroupAdd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {
      width: '100%'
    },
    root: {
      padding: '8px 8px 8px 16px'
    },
    primary: {
      fontWeight: 'bold'
    },
    secondary: {
      fontSize: 12
    },
    iconBtn: {
      '& svg': {
        color: 'rgb(0, 153, 255)'
      }
    },
    HeaderIcon: _defineProperty({}, theme.breakpoints.down('sm'), {
      display: 'none'
    })
  };
});

var ConversationHead = function ConversationHead() {
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    ContainerComponent: 'div',
    ContainerProps: {
      className: styles.container
    },
    className: styles.root
  }, /*#__PURE__*/_react["default"].createElement(_ListItemAvatar["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    src: 'https://i.pravatar.cc/300?img=13'
  })), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: 'Imaad Casey',
    secondary: 'active 17m ago',
    classes: {
      primary: styles.primary,
      secondary: styles.secondary
    }
  }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
    className: styles.HeaderIcon
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    className: styles.iconBtn
  }, /*#__PURE__*/_react["default"].createElement(_PhoneInTalk["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    className: styles.iconBtn
  }, /*#__PURE__*/_react["default"].createElement(_Videocam["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    className: styles.iconBtn
  }, /*#__PURE__*/_react["default"].createElement(_GroupAdd["default"], null))));
};

var _default = ConversationHead;
exports["default"] = _default;