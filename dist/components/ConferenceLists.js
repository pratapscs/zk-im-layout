"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _styles = require("@material-ui/core/styles");

var _flex = require("@mui-treasury/components/flex");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usePersonStyles = (0, _styles.makeStyles)(function () {
  return {
    text: {
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },
    name: {
      fontWeight: 600,
      fontSize: '1rem',
      color: '#122740'
    },
    caption: {
      fontSize: '0.875rem',
      color: '#758392',
      marginTop: -4
    },
    time: {
      fontSize: '0.875rem',
      color: '#758392'
    },
    btn: {
      borderRadius: 20,
      padding: '0.125rem 0.75rem',
      borderColor: '#33c176',
      fontSize: '0.75rem',
      color: '#33c176',
      boxShadow: '1px 0.5px'
    }
  };
});

var PersonItem = function PersonItem(_ref) {
  var time = _ref.time,
      name = _ref.name,
      friendCount = _ref.friendCount;
  var styles = usePersonStyles();
  return /*#__PURE__*/_react["default"].createElement(_flex.Row, {
    gap: 2,
    p: 2.5
  }, /*#__PURE__*/_react["default"].createElement(_flex.Item, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(styles.time, styles.text)
  }, time)), /*#__PURE__*/_react["default"].createElement(_flex.Row, {
    wrap: true,
    grow: true,
    gap: 0.5,
    minWidth: 0
  }, /*#__PURE__*/_react["default"].createElement(_flex.Item, {
    grow: true,
    minWidth: 0
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(styles.name, styles.text)
  }, name), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(styles.caption, styles.text)
  }, "Meeting ID : ", friendCount)), /*#__PURE__*/_react["default"].createElement(_flex.Item, {
    position: 'middle'
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: styles.btn,
    variant: 'outlined'
  }, "Start"))));
};

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    card: {
      width: '95%',
      borderRadius: 16,
      position: 'absolute',
      boxShadow: '0 8px 16px 0 #BDC9D7',
      overflow: 'hidden'
    },
    header: {
      fontFamily: 'Barlow, san-serif',
      backgroundColor: '#fff'
    },
    headline: {
      color: '#122740',
      fontSize: '1.25rem',
      fontWeight: 600
    },
    link: {
      color: '#2281bb',
      padding: '0 0.25rem',
      fontSize: '0.875rem'
    },
    actions: {
      color: '#BDC9D7'
    },
    divider: {
      backgroundColor: '#d9e2ee',
      margin: '0 20px'
    }
  };
});

var ConferenceLists = function ConferenceLists() {
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_flex.Column, {
    p: 0,
    gap: 0,
    className: styles.card
  }, /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting1',
    friendCount: 94865878240,
    time: 16
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting2',
    friendCount: 94865878241,
    time: 17
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    variant: 'middle',
    className: styles.divider
  }), /*#__PURE__*/_react["default"].createElement(PersonItem, {
    name: 'Zoom Meeting3',
    friendCount: 94865878242,
    time: 18
  })));
};

var _default = ConferenceLists;
exports["default"] = _default;