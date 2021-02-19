"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _BottomNavigation = _interopRequireDefault(require("@material-ui/core/BottomNavigation"));

var _BottomNavigationAction = _interopRequireDefault(require("@material-ui/core/BottomNavigationAction"));

var _Videocam = _interopRequireDefault(require("@material-ui/icons/Videocam"));

var _AddCircleOutline = _interopRequireDefault(require("@material-ui/icons/AddCircleOutline"));

var _DateRange = _interopRequireDefault(require("@material-ui/icons/DateRange"));

var _ScreenShare = _interopRequireDefault(require("@material-ui/icons/ScreenShare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)({
  root: {
    width: '100%'
  }
});

var ConferenceHead = function ConferenceHead() {
  var styles = useStyles();

  var _React$useState = _react["default"].useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_BottomNavigation["default"], {
    value: value,
    onChange: function onChange(event, newValue) {
      setValue(newValue);
    },
    showLabels: true,
    className: styles.root
  }, /*#__PURE__*/_react["default"].createElement(_BottomNavigationAction["default"], {
    label: "New Meeting",
    icon: /*#__PURE__*/_react["default"].createElement(_Videocam["default"], {
      fontSize: "large"
    })
  }), /*#__PURE__*/_react["default"].createElement(_BottomNavigationAction["default"], {
    label: "Join",
    icon: /*#__PURE__*/_react["default"].createElement(_AddCircleOutline["default"], {
      fontSize: "large"
    })
  }), /*#__PURE__*/_react["default"].createElement(_BottomNavigationAction["default"], {
    label: "Schedule",
    icon: /*#__PURE__*/_react["default"].createElement(_DateRange["default"], {
      fontSize: "large"
    })
  }), /*#__PURE__*/_react["default"].createElement(_BottomNavigationAction["default"], {
    label: " Share Screen",
    icon: /*#__PURE__*/_react["default"].createElement(_ScreenShare["default"], {
      fontSize: "large"
    })
  }));
};

var _default = ConferenceHead;
exports["default"] = _default;