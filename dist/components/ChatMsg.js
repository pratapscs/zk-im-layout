"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TagFaces = _interopRequireDefault(require("@material-ui/icons/TagFaces"));

var _Reply = _interopRequireDefault(require("@material-ui/icons/Reply"));

var _ChatDropdownMenu = _interopRequireDefault(require("./ChatDropdownMenu"));

var _ReplyTextField = _interopRequireDefault(require("./ReplyTextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  var radius = spacing(2.5);
  var size = 30;
  var rightBgColor = palette.primary.main; // if you want the same as facebook messenger, use this color '#09f'

  return {
    avatar: {
      width: size,
      height: size
    },
    rightRow: {
      marginLeft: 'auto'
    },
    msgBox: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 4,
      '&:hover $iconBtn': {
        opacity: 1
      },
      '&:hover $menuList': {
        opacity: 1
      }
    },
    leftMsgBox: {
      textAlign: 'left'
    },
    rightMsgBox: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    },
    msg: {
      maxWidth: '70%',
      padding: spacing(1, 2),
      borderRadius: 4,
      display: 'inline-block',
      wordBreak: 'break-word',
      fontFamily: // eslint-disable-next-line max-len
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: '14px'
    },
    menuList: {
      opacity: 0,
      '& button': {
        padding: 6,
        color: 'rgba(0,0,0,0.34)',
        margin: '0 4px'
      },
      '& button:hover': {
        color: 'rgba(0,0,0,0.87)',
        opacity: 1
      },
      '& svg': {
        fontSize: 20
      }
    },
    left: {
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      backgroundColor: palette.grey[100]
    },
    right: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      backgroundColor: rightBgColor,
      color: palette.common.white
    },
    leftFirst: {
      borderTopLeftRadius: radius
    },
    leftLast: {
      borderBottomLeftRadius: radius
    },
    rightFirst: {
      borderTopRightRadius: radius
    },
    rightLast: {
      borderBottomRightRadius: radius
    },
    iconBtn: {
      opacity: 0,
      padding: 6,
      color: 'rgba(0,0,0,0.34)',
      '&:hover': {
        color: 'rgba(0,0,0,0.87)'
      },
      margin: '0 4px',
      '& svg': {
        fontSize: 20
      }
    },
    image: {
      maxWidth: 120,
      maxHeight: 120
    }
  };
});
var data = [{
  label: "Unfollow Message",
  value: "0"
}, {
  label: "Star",
  value: "1"
}, {
  label: "Share Message",
  value: "2"
}, {
  label: "Mark as Unread",
  value: "3"
}, {
  label: "Edit",
  value: "4"
}, {
  label: "Delete",
  value: "5"
}, {
  label: "Copy",
  value: "6"
}];

var ChatMsg = function ChatMsg(_ref2) {
  var avatar = _ref2.avatar,
      messages = _ref2.messages,
      side = _ref2.side;
  var styles = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      replyOpen = _useState2[0],
      setReplyOpen = _useState2[1];

  var attachClass = function attachClass(index) {
    if (index === 0) {
      return styles["".concat(side, "First")];
    }

    if (index === messages.length - 1) {
      return styles["".concat(side, "Last")];
    }

    return '';
  };

  var handleReplyClicked = function handleReplyClicked(i) {
    setReplyOpen(!replyOpen);
  };

  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    justify: side === 'right' ? 'flex-end' : 'flex-start'
  }, side === 'left' && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    src: avatar,
    className: (0, _clsx["default"])(styles.avatar)
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: true
  }, messages.map(function (msg, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react["default"].createElement("div", {
        key: msg.id || i,
        className: (0, _clsx["default"])(styles.row, styles["".concat(side, "Row")])
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _clsx["default"])(styles.msgBox, styles["".concat(side, "MsgBox")])
      }, typeof msg === 'string' && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        align: 'left',
        className: (0, _clsx["default"])(styles.msg, styles[side], attachClass(i))
      }, msg), _typeof(msg) === 'object' && msg.type === 'image' && /*#__PURE__*/_react["default"].createElement("img", _extends({
        className: styles.image,
        alt: msg.alt
      }, msg)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: styles.iconBtn
      }, /*#__PURE__*/_react["default"].createElement(_TagFaces["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: styles.iconBtn
      }, /*#__PURE__*/_react["default"].createElement(_Reply["default"], {
        onClick: function onClick() {
          return handleReplyClicked(i);
        }
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: styles.menuList
      }, /*#__PURE__*/_react["default"].createElement(_ChatDropdownMenu["default"], {
        id: "menuId",
        options: data,
        actionBtnIcon: "MoreHoriz",
        onClick: function onClick() {
          return alert(true);
        }
      }))))
    );
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    justify: side === 'right' ? 'flex-end' : 'flex-start'
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: true
  }, replyOpen ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ReplyTextField["default"], null), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "primary",
    className: styles.actionButton
  }, "Save"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "secondary",
    className: styles.actionButton,
    onClick: function onClick() {
      return setReplyOpen(false);
    }
  }, "cancel")) : null)));
};

ChatMsg.propTypes = {
  avatar: _propTypes["default"].string,
  messages: _propTypes["default"].arrayOf(_propTypes["default"].string),
  side: _propTypes["default"].oneOf(['left', 'right'])
};
ChatMsg.defaultProps = {
  avatar: '',
  messages: [],
  side: 'left'
};
var _default = ChatMsg;
exports["default"] = _default;