"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MessageOutlined = _interopRequireDefault(require("@material-ui/icons/MessageOutlined"));

var _VideocamOutlined = _interopRequireDefault(require("@material-ui/icons/VideocamOutlined"));

var _ToysOutlined = _interopRequireDefault(require("@material-ui/icons/ToysOutlined"));

var _DescriptionOutlined = _interopRequireDefault(require("@material-ui/icons/DescriptionOutlined"));

var _ContactPhoneOutlined = _interopRequireDefault(require("@material-ui/icons/ContactPhoneOutlined"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _WhiteIconItem = _interopRequireDefault(require("./WhiteIconItem"));

var _TextLogo = _interopRequireDefault(require("./TextLogo"));

var _styles = require("@material-ui/core/styles");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var list = [{
  primaryText: 'Message',
  icon: /*#__PURE__*/_react["default"].createElement(_MessageOutlined["default"], null),
  active: true,
  path: "/chat"
}, {
  primaryText: 'video',
  icon: /*#__PURE__*/_react["default"].createElement(_VideocamOutlined["default"], null),
  active: true,
  path: "/video"
}, {
  primaryText: 'Work Bench',
  icon: /*#__PURE__*/_react["default"].createElement(_ToysOutlined["default"], null),
  active: true
}, {
  primaryText: 'Docs',
  icon: /*#__PURE__*/_react["default"].createElement(_DescriptionOutlined["default"], null),
  active: true
}, {
  primaryText: 'Contacts',
  icon: /*#__PURE__*/_react["default"].createElement(_ContactPhoneOutlined["default"], null),
  active: true
}];
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    itemDisplay: _defineProperty({
      backgroundColor: 'rgb(48, 70, 105)'
    }, theme.breakpoints.down('sm'), {
      display: 'flex',
      position: 'fixed',
      width: '100%',
      justifyContent: 'space-evenly',
      bottom: '0',
      top: 'auto'
    })
  };
});

var RoundIconSidebar = function RoundIconSidebar(_ref) {
  var onClickItem = _ref.onClickItem;
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_List["default"], {
    className: styles.itemDisplay
  }, /*#__PURE__*/_react["default"].createElement(_TextLogo["default"], {
    mt: 2,
    mb: 4,
    display: {
      xs: 'none',
      md: 'block'
    }
  }, "IMS"), list.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: item.path,
      key: item.path
    }, /*#__PURE__*/_react["default"].createElement(_WhiteIconItem["default"], _extends({
      onClick: onClickItem
    }, item)));
  }));
};

var _default = RoundIconSidebar;
exports["default"] = _default;