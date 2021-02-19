"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ChatListItem = _interopRequireDefault(require("./ChatListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var test = function test(data) {
  alert(data);
};

var ChatList = function ChatList(_ref) {
  var concise = _ref.concise,
      data = _ref.data,
      onClick = _ref.onClick;
  return data.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_ChatListItem["default"], _extends({
      index: index
    }, item, {
      concise: concise,
      onClick: onClick,
      contact: item
    }));
  });
};

var _default = ChatList;
exports["default"] = _default;