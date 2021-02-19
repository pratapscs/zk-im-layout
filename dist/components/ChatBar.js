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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var concise = _ref.concise,
      onClick = _ref.onClick;
  var styles = useStyles();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var sendMessage = function sendMessage() {
    onClick(message);
    setMessage('');
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !concise && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
    className: styles.input,
    placeholder: 'Type a message...',
    onChange: function onChange(e) {
      setMessage(e.target.value);
    },
    value: message // endAdornment={
    //   <InputAdornment position={'end'}>
    //     <Gif className={styles.icon} />
    //     <Note className={styles.icon} />
    //     <Image className={styles.icon} />
    //     <AddCircle className={styles.icon} />
    //     <TagFaces className={styles.icon} />
    //   </InputAdornment>
    // }

  }), /*#__PURE__*/_react["default"].createElement(_Send["default"], {
    className: styles.icon,
    onClick: function onClick() {
      return sendMessage();
    }
  }));
};

var _default = ChatBar;
exports["default"] = _default;