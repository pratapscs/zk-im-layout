"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _styles = require("@material-ui/core/styles");

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var MessengerSearch = function MessengerSearch(_ref) {
  var getContactSuggestions = _ref.getContactSuggestions,
      queryAction = _ref.queryAction;
  var styles = useStyles();
  var adornStyles = useAdornStyles();

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = _react["default"].useRef(null);

  var _React$useState3 = _react["default"].useState(["one", "two", "three"]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      list = _React$useState4[0],
      setList = _React$useState4[1];

  var handleToggle = function handleToggle(search) {
    setOpen(function (prevOpen) {
      return true;
    });
    var queryData = getContactSuggestions(search);
    setList(queryData);
  };

  var handleClose = function handleClose(event, data) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    if (data) queryAction(data);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  } // return focus to the button when we transitioned from !open -> open


  var prevOpen = _react["default"].useRef(open);

  _react["default"].useEffect(function () {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  var menuList = list.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      onClick: function onClick(event) {
        return handleClose(event, item);
      }
    }, item ? item.title : '');
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
    autoFocus: true,
    classes: styles,
    startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
      position: 'start',
      classes: adornStyles
    }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)),
    placeholder: 'Search Messenger',
    onChange: function onChange(e) {
      handleToggle(e.target.value);
    },
    ref: anchorRef
  }), /*#__PURE__*/_react["default"].createElement(_Popper["default"], {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    style: {
      zIndex: '999',
      width: "80%",
      margin: "10px"
    }
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return /*#__PURE__*/_react["default"].createElement(_Grow["default"], _extends({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      }
    }), /*#__PURE__*/_react["default"].createElement(_Paper["default"], null, /*#__PURE__*/_react["default"].createElement(_ClickAwayListener["default"], {
      onClickAway: handleClose
    }, /*#__PURE__*/_react["default"].createElement(_MenuList["default"], {
      id: "menu-list-grow",
      onKeyDown: handleListKeyDown
    }, menuList))));
  }));
};

var _default = MessengerSearch;
exports["default"] = _default;