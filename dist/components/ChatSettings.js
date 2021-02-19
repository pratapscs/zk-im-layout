"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _ThumbUp = _interopRequireDefault(require("@material-ui/icons/ThumbUp"));

var _FormatPaint = _interopRequireDefault(require("@material-ui/icons/FormatPaint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    avatar: {
      width: 100,
      height: 100,
      margin: 'auto'
    },
    name: {
      marginTop: 14,
      fontSize: 22,
      fontWeight: 'bold'
    },
    settingHeader: {
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.08)'
      }
    },
    settingHead: {
      textTransform: 'uppercase',
      color: 'rgba(0,0,0,0.34)',
      fontWeight: 'bold',
      fontSize: 13,
      '& + *': {
        color: 'rgba(0,0,0,0.34)',
        fontSize: 28
      }
    },
    settingLabel: {
      fontSize: 13
    },
    settingIcon: {
      padding: 6,
      borderRadius: '50%',
      backgroundColor: 'rgba(0,0,0,0.04)',
      width: 32,
      height: 32
    },
    blue: {
      color: 'rgb(0, 153, 255)',
      background: 'none'
    }
  };
});

var SettingHeader = function SettingHeader(_ref) {
  var children = _ref.children,
      opened = _ref.opened;
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    p: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    className: styles.settingHeader
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: styles.settingHead
  }, children), opened ? /*#__PURE__*/_react["default"].createElement(_KeyboardArrowDown["default"], null) : /*#__PURE__*/_react["default"].createElement(_KeyboardArrowLeft["default"], null));
};

var Setting = function Setting(_ref2) {
  var label = _ref2.label,
      icon = _ref2.icon,
      blue = _ref2.blue;
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    height: '44px',
    pl: '14px',
    pr: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: 'body2'
  }, label), /*#__PURE__*/_react["default"].cloneElement(icon, {
    className: (0, _clsx["default"])(styles.settingIcon, blue && styles.blue)
  }));
};

var ChatSettings = function ChatSettings() {
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    p: '14px 14px 16px 14px',
    textAlign: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    className: styles.avatar,
    src: 'https://i.pravatar.cc/300?img=13'
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: styles.name,
    variant: 'h1',
    align: 'center'
  }, "Imaad Casey")), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(SettingHeader, {
    opened: true
  }, "Options"), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    pb: 2
  }, /*#__PURE__*/_react["default"].createElement(Setting, {
    label: 'Search in Conversation',
    icon: /*#__PURE__*/_react["default"].createElement(_Search["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(Setting, {
    label: 'Edit Nicknames',
    icon: /*#__PURE__*/_react["default"].createElement(_Edit["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(Setting, {
    label: 'Change Theme',
    icon: /*#__PURE__*/_react["default"].createElement(_FormatPaint["default"], null),
    blue: true
  }), /*#__PURE__*/_react["default"].createElement(Setting, {
    label: 'Change Emoji',
    icon: /*#__PURE__*/_react["default"].createElement(_ThumbUp["default"], null),
    blue: true
  })), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(SettingHeader, null, "Privacy & Support"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(SettingHeader, null, "Shared files"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(SettingHeader, null, "Shared Photos"));
};

var _default = ChatSettings;
exports["default"] = _default;