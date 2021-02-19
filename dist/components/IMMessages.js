"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _AddOutlined = _interopRequireDefault(require("@material-ui/icons/AddOutlined"));

var _styles = require("@material-ui/core/styles");

var _layout = _interopRequireWildcard(require("@mui-treasury/layout"));

var _MessengerSearch = _interopRequireDefault(require("./MessengerSearch"));

var _ChatList = _interopRequireDefault(require("./ChatList"));

var _ConversationHead = _interopRequireDefault(require("./ConversationHead"));

var _ChatBar = _interopRequireDefault(require("./ChatBar"));

var _ChatDialog = _interopRequireDefault(require("./ChatDialog"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Header = (0, _layout.getHeader)(_styledComponents["default"]);
var Content = (0, _layout.getContent)(_styledComponents["default"]);
var Fullscreen = (0, _layout.getFullscreen)(_styledComponents["default"]);
var DrawerSidebar = (0, _layout.getDrawerSidebar)(_styledComponents["default"]);
var InsetFooter = (0, _layout.getInsetFooter)(_styledComponents["default"]);
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    fullscreen: _defineProperty({
      marginLeft: '110px'
    }, theme.breakpoints.down('sm'), {
      marginLeft: '0px'
    }),
    header: {
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .10)',
      backgroundColor: '#fff'
    },
    messageHeader: {
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
      backgroundColor: 'rgba(0,0,0,0.04)',
      marginLeft: '10px' // width: '2em',
      // height: '2em',
      // fontSize: '5em',

    },
    sidebar: _defineProperty({
      marginLeft: '84px'
    }, theme.breakpoints.down('sm'), {
      marginLeft: '0px',
      zIndex: '0'
    })
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

var IMMessages = function IMMessages() {
  var styles = useStyles();
  var scheme = (0, _layout["default"])();
  scheme.configureHeader(function (builder) {
    builder.create('appHeader').registerConfig('xs', {
      position: 'relative',
      initialHeight: 60
    });
  });
  scheme.configureEdgeSidebar(function (builder) {
    builder.create('primarySidebar', {
      anchor: 'left'
    }).registerPermanentConfig('xs', {
      width: '25%',
      collapsible: true,
      collapsedWidth: '100%'
    });
  });
  scheme.enableAutoCollapse('primarySidebar', 'sm');
  scheme.configureInsetSidebar(function (builder) {
    builder.create('secondarySidebar', {
      anchor: 'right'
    }).registerAbsoluteConfig('sm', {
      width: '33%'
    });
  });
  return /*#__PURE__*/_react["default"].createElement(Fullscreen, {
    className: styles.fullscreen
  }, /*#__PURE__*/_react["default"].createElement(_layout.Root, {
    theme: theme,
    scheme: scheme
  }, function (_ref) {
    var sidebar = _ref.state.sidebar;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_CssBaseline["default"], null), /*#__PURE__*/_react["default"].createElement(Header, {
      className: styles.header
    }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
      disableGutters: true
    }, /*#__PURE__*/_react["default"].createElement(_ConversationHead["default"], null))), /*#__PURE__*/_react["default"].createElement(DrawerSidebar, {
      sidebarId: 'primarySidebar',
      PaperProps: {
        className: styles.sidebar
      }
    }, sidebar.primarySidebar.collapsed ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex",
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      src: 'https://i.pravatar.cc/300?img=13'
    }))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 2,
      flexGrow: 1,
      className: styles.messageHeader
    }, "Messages"), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      className: styles.edit
    }, /*#__PURE__*/_react["default"].createElement(_AddOutlined["default"], null)))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      textAlign: 'center',
      my: 1,
      display: "flex",
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_MessengerSearch["default"], null))) : /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex",
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_MessengerSearch["default"], null), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      className: styles.edit
    }, /*#__PURE__*/_react["default"].createElement(_AddOutlined["default"], null))), /*#__PURE__*/_react["default"].createElement(_ChatList["default"], {
      concise: sidebar.primarySidebar.collapsed
    })), /*#__PURE__*/_react["default"].createElement(Content, null, /*#__PURE__*/_react["default"].createElement(_ChatDialog["default"], null)), /*#__PURE__*/_react["default"].createElement(InsetFooter, {
      ContainerProps: {
        disableGutters: true
      }
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: 'flex',
      alignItems: 'center',
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_ChatBar["default"], {
      concise: sidebar.primarySidebar.collapsed
    }))));
  }));
};

var _default = IMMessages;
exports["default"] = _default;