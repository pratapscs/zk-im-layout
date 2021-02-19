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

var _ChatModal = _interopRequireDefault(require("./ChatModal"));

var _MessengerSearch = _interopRequireDefault(require("./MessengerSearch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
var useMessageSearchStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      backgroundColor: 'rgba(0, 0, 0, .04)',
      borderRadius: 40,
      width: '100%'
    },
    input: {
      boxSizing: 'border-box',
      minHeight: 36
    },
    icon: {
      color: 'rgb(0, 153, 255)',
      width: 35,
      height: 35
    }
  };
});

var ConversationHead = function ConversationHead(_ref) {
  var avatar = _ref.avatar,
      primary = _ref.primary,
      secondary = _ref.secondary;
  var styles = useStyles();

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var handleDialogOpen = function handleDialogOpen() {
    setIsOpen(true);
  };

  var handleDialogClose = function handleDialogClose() {
    setIsOpen(false);
  };

  var messageStyle = useMessageSearchStyles();
  return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    ContainerComponent: 'div',
    ContainerProps: {
      className: styles.container
    },
    className: styles.root
  }, /*#__PURE__*/_react["default"].createElement(_ListItemAvatar["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    src: avatar
  })), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: primary,
    secondary: secondary,
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
    className: styles.iconBtn,
    onClick: handleDialogOpen
  }, /*#__PURE__*/_react["default"].createElement(_GroupAdd["default"], null)), /*#__PURE__*/_react["default"].createElement(_ChatModal["default"], {
    id: "addMember",
    dialogTitle: "Add Members",
    isOpen: isOpen,
    handleClose: handleDialogClose
  }, /*#__PURE__*/_react["default"].createElement(_MessengerSearch["default"], {
    useState: messageStyle
  }))));
};

var _default = ConversationHead;
exports["default"] = _default;