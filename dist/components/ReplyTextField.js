"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Reply = _interopRequireDefault(require("@material-ui/icons/Reply"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _MessengerSearch = _interopRequireDefault(require("./MessengerSearch"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
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
    }
  };
});

var ReplyTextField = function ReplyTextField() {
  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 1),
      setAnchorEl = _React$useState2[0];

  var styles = useStyles();

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
    console.log('hello');
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    className: styles.iconBtn,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_Reply["default"], null)), /*#__PURE__*/_react["default"].createElement(_MessengerSearch["default"], {
    className: styles.editMessage,
    placeholder: 'Type Message'
  }));
};

var _default = ReplyTextField;
exports["default"] = _default;