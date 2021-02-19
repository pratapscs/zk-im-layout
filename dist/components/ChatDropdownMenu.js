"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MoreHoriz = _interopRequireDefault(require("@material-ui/icons/MoreHoriz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  // if you want the same as facebook messenger, use this color '#09f'
  return {};
});

var ChatDropdownMenu = function ChatDropdownMenu(_ref2) {
  var id = _ref2.id,
      isOpen = _ref2.isOpen,
      handleClose = _ref2.handleClose,
      onClick = _ref2.onClick,
      options = _ref2.options,
      actionBtnIcon = _ref2.actionBtnIcon,
      icon = _ref2.icon,
      iconBtn = _ref2.iconBtn,
      others = _objectWithoutProperties(_ref2, ["id", "isOpen", "handleClose", "onClick", "options", "actionBtnIcon", "icon", "iconBtn"]);

  var styles = useStyles();

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClickMenuOpen = function handleClickMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClickMenuClose = function handleClickMenuClose() {
    setAnchorEl(null);
  };

  var handleMenuItemSelection = function handleMenuItemSelection(value) {
    setAnchorEl(null);
    onClick(value);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    "aria-label": "more",
    "aria-controls": "long-menu",
    "aria-haspopup": "true",
    className: styles.iconBtn,
    onClick: handleClickMenuOpen
  }, /*#__PURE__*/_react["default"].createElement(_MoreHoriz["default"], null)), /*#__PURE__*/_react["default"].createElement(_Menu["default"], _extends({
    id: id,
    anchorEl: anchorEl,
    open: Boolean(anchorEl),
    onClose: handleClickMenuClose,
    keepMounted: true
  }, others), options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: option,
      selected: option === "Label-1",
      onClick: function onClick() {
        return handleMenuItemSelection(option.value);
      }
    }, option.label);
  })));
};

ChatDropdownMenu.propTypes = {
  id: _propTypes["default"].string,
  handleClose: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  options: _propTypes["default"].array,
  actionBtnIcon: _propTypes["default"].string,
  icon: _propTypes["default"].bool
};
ChatDropdownMenu.defaultProps = {
  options: [{
    label: 'Label-1',
    value: '0'
  }, {
    label: 'Label-2',
    value: '1'
  }, {
    label: 'Labe-3',
    value: '2'
  }]
};
var _default = ChatDropdownMenu;
exports["default"] = _default;