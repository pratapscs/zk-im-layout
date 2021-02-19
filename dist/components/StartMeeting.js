"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _styles = require("@material-ui/core/styles");

var _layout = _interopRequireWildcard(require("@mui-treasury/layout"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Header = (0, _layout.getHeader)(_styledComponents["default"]);
var Fullscreen = (0, _layout.getFullscreen)(_styledComponents["default"]);
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    header: {
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .10)',
      backgroundColor: '#ffffff'
    },
    meetingHeader: {
      fontSize: '18px',
      fontWeight: '700',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    insetBody: {
      borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
      overflowY: 'auto',
      backgroundColor: '#fff'
    },
    edit: {
      backgroundColor: 'rgba(0,0,0,0.04)'
    },
    FullscreenDiv: _defineProperty({
      marginLeft: '84px'
    }, theme.breakpoints.down('sm'), {
      marginLeft: '0px'
    }),
    startButton: {
      backgroundColor: '#35c573'
    }
  };
});
var theme = (0, _styles.responsiveFontSizes)((0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: 'rgb(0, 153, 255)'
    },
    background: {
      "default": '#fff'
    }
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body1: {
      fontSize: "".concat(15 / 16, "rem")
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'strong, b': {
          fontWeight: 'bold'
        }
      }
    }
  }
}));

var StartMeeting = function StartMeeting() {
  var styles = useStyles();
  var scheme = (0, _layout["default"])();
  scheme.configureHeader(function (builder) {
    builder.create('appHeader').registerConfig('xs', {
      position: 'relative',
      initialHeight: 60
    });
  });
  return /*#__PURE__*/_react["default"].createElement(Fullscreen, null, /*#__PURE__*/_react["default"].createElement(_layout.Root, null, function () {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_CssBaseline["default"], null), /*#__PURE__*/_react["default"].createElement(Header, {
      className: styles.header
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex"
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], null, "Cancle")), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex",
      p: 1,
      justifyContent: "center"
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 1,
      className: styles.meetingHeader
    }, "Start Meeting"))))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex",
      p: 1,
      bgcolor: "background.paper"
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 1,
      flexGrow: 1,
      bgcolor: "white.300"
    }, /*#__PURE__*/_react["default"].createElement("b", null, "VideoOn")), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 1,
      bgcolor: "white.300"
    }, "Start")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex",
      p: 1,
      bgcolor: "background.paper"
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 1,
      flexGrow: 1,
      bgcolor: "white.300"
    }, /*#__PURE__*/_react["default"].createElement("b", null, "User Personal Meeting ID(PMI)")), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 1,
      bgcolor: "white.300"
    }, "Start")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex",
      p: 1,
      justifyContent: "center"
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      className: styles.startButton
    }, /*#__PURE__*/_react["default"].createElement("b", null, "Start Meeting"))))));
  }));
};

var _default = StartMeeting;
exports["default"] = _default;