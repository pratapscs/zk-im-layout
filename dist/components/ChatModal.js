"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PaperComponent(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], {
    handle: "#draggable-dialog-title",
    cancel: '[class*="MuiDialogContent-root"]'
  }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], props));
}

var ChatModal = function ChatModal(_ref) {
  var id = _ref.id,
      children = _ref.children,
      dialogContentText = _ref.dialogContentText,
      isOpen = _ref.isOpen,
      handleClose = _ref.handleClose,
      onClick = _ref.onClick,
      dialogTitle = _ref.dialogTitle,
      fullScreen = _ref.fullScreen,
      fullWidth = _ref.fullWidth,
      maxWidth = _ref.maxWidth,
      disableBackdropClick = _ref.disableBackdropClick,
      disableEscapeKeyDown = _ref.disableEscapeKeyDown,
      dividers = _ref.dividers,
      props = _objectWithoutProperties(_ref, ["id", "children", "dialogContentText", "isOpen", "handleClose", "onClick", "dialogTitle", "fullScreen", "fullWidth", "maxWidth", "disableBackdropClick", "disableEscapeKeyDown", "dividers"]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Dialog["default"], _extends({
    id: id,
    open: isOpen,
    onClose: handleClose,
    fullScreen: fullScreen,
    fullWidth: fullWidth,
    maxWidth: maxWidth,
    disableBackdropClick: disableBackdropClick,
    disableEscapeKeyDown: disableEscapeKeyDown,
    PaperComponent: PaperComponent,
    keepMounted: true,
    "aria-labelledby": "draggable-dialog-title",
    "aria-describedby": "alert-dialog-slide-description"
  }, props), /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    style: {
      cursor: 'move'
    },
    id: "draggable-dialog-title"
  }, dialogTitle), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], {
    dividers: dividers
  }, dialogContentText ? /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, dialogContentText) : null, children), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    autoFocus: true,
    onClick: handleClose,
    color: "primary"
  }, "Cancel"))));
};

ChatModal.propTypes = {
  id: _propTypes["default"].string,
  children: _propTypes["default"].element,
  isOpen: _propTypes["default"].bool,
  handleClose: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  dialogTitle: _propTypes["default"].string,
  dialogContentText: _propTypes["default"].string,
  fullScreen: _propTypes["default"].bool,
  fullWidth: _propTypes["default"].bool,
  maxWidth: _propTypes["default"].oneOf(['xl', 'lg', 'md', 'sm', 'xs', false]),
  disableBackdropClick: _propTypes["default"].bool,
  disableEscapeKeyDown: _propTypes["default"].bool,
  dividers: _propTypes["default"].bool
};
ChatModal.defaultProps = {
  maxWidth: 'sm',
  fullWidth: true
};
var _default = ChatModal;
exports["default"] = _default;