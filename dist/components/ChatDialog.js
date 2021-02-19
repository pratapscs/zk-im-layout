"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ChatMsg = _interopRequireDefault(require("./ChatMsg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AVATAR = 'https://i.pravatar.cc/300?img=13';
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    date: {
      fontWeight: 500,
      color: 'rgba(0,0,0,0.4)',
      margin: '12px 0',
      fontSize: 12,
      textAlign: 'center'
    }
  };
});

var ChatDialog = function ChatDialog(_ref) {
  var messageList = _ref.messageList,
      to = _ref.to;
  var styles = useStyles();
  var messages = messageList ? messageList.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_ChatMsg["default"], {
      avatar: AVATAR,
      messages: [item.message],
      side: to.email === item.senderEmail ? 'right' : 'left'
    });
  }) : {};
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    p: '16px 30px 12px 10px',
    width: "100%",
    overflow: "scroll"
  }, messages);
};

var _default = ChatDialog;
exports["default"] = _default;