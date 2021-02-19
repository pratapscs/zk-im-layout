"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _AddCircle = _interopRequireDefault(require("@material-ui/icons/AddCircle"));

var _Gif = _interopRequireDefault(require("@material-ui/icons/Gif"));

var _Image = _interopRequireDefault(require("@material-ui/icons/Image"));

var _Note = _interopRequireDefault(require("@material-ui/icons/Note"));

var _Send = _interopRequireDefault(require("@material-ui/icons/Send"));

var _TagFaces = _interopRequireDefault(require("@material-ui/icons/TagFaces"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    icon: {
      color: 'rgb(0, 153, 255)',
      width: 44,
      height: 44,
      padding: 6,
      '&:not(:first-child)': {
        marginLeft: 4
      }
    },
    input: {
      flex: 'auto',
      borderRadius: 15,
      paddingLeft: 16,
      backgroundColor: 'rgba(0,0,0,0.04)',
      margin: '0 8px',
      height: 36,
      fontSize: 13
    }
  };
});

var ChatBar = function ChatBar(_ref) {
  var concise = _ref.concise;
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !concise && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
    className: styles.input,
    placeholder: 'Type a message...',
    endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
      position: 'end'
    }, /*#__PURE__*/_react["default"].createElement(_Gif["default"], {
      className: styles.icon
    }), /*#__PURE__*/_react["default"].createElement(_Note["default"], {
      className: styles.icon
    }), /*#__PURE__*/_react["default"].createElement(_Image["default"], {
      className: styles.icon
    }), /*#__PURE__*/_react["default"].createElement(_AddCircle["default"], {
      className: styles.icon
    }), /*#__PURE__*/_react["default"].createElement(_TagFaces["default"], {
      className: styles.icon
    }))
  }), /*#__PURE__*/_react["default"].createElement(_Send["default"], {
    className: styles.icon
  }));
};

var _default = ChatBar;
exports["default"] = _default;