"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _ConferenceLists = _interopRequireDefault(require("./ConferenceLists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    role: "tabpanel",
    hidden: value !== index,
    id: "scrollable-auto-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-auto-tab-".concat(index)
  }, other), value === index && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    p: 1
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, children)));
}

TabPanel.propTypes = {
  children: _propTypes["default"].node,
  index: _propTypes["default"].any.isRequired,
  value: _propTypes["default"].any.isRequired
};
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: "100%"
    }
  };
});

var ConferenceTabs = function ConferenceTabs() {
  var classes = useStyles();

  var _React$useState = _react["default"].useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    position: "static",
    color: "default"
  }, /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
    value: value,
    onChange: handleChange,
    variant: "scrollable"
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Start"
  }), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "History"
  }))), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 0
  }, /*#__PURE__*/_react["default"].createElement(_ConferenceLists["default"], null)), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 1
  }, /*#__PURE__*/_react["default"].createElement(_ConferenceLists["default"], null)));
};

var _default = ConferenceTabs;
exports["default"] = _default;