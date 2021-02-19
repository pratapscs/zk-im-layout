"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
var useStyles = (0, _styles.makeStyles)(function () {
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
var useAdornStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      paddingLeft: 12,
      '& svg': {
        color: 'rgba(0,0,0,0.38)'
      }
    }
  };
});

var MessengerSearch = function MessengerSearch() {
  var styles = useStyles();
  var adornStyles = useAdornStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
    classes: styles,
    startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
      position: 'start',
      classes: adornStyles
    }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)),
    placeholder: 'Search Messenger'
  }));
};

var _default = MessengerSearch;
exports["default"] = _default;