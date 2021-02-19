"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("@material-ui/core/styles");

var _layout = _interopRequireWildcard(require("@mui-treasury/layout"));

var _RoundedIconSideBar = _interopRequireDefault(require("./RoundedIconSideBar"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DrawerSidebar = (0, _layout.getDrawerSidebar)(_styledComponents["default"]);
var SidebarContent = (0, _layout.getSidebarContent)(_styledComponents["default"]);
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    header: {
      backgroundColor: '#fff'
    },
    sidebar: _defineProperty({
      backgroundColor: 'rgb(48, 70, 105)',
      transition: 'none'
    }, theme.breakpoints.down('sm'), {
      display: 'flex',
      height: '0'
    })
  };
});
var scheme = (0, _layout["default"])();
scheme.configureHeader(function (builder) {
  builder.registerConfig('xs', {
    position: 'sticky',
    clipped: false
  });
});
scheme.configureEdgeSidebar(function (builder) {
  builder.create('primarySidebar', {
    anchor: 'left'
  }).registerPersistentConfig('md', {
    width: 84,
    collapsible: false,
    persistentBehavior: {
      header: 'fit',
      _other: 'none'
    }
  });
});
scheme.configureEdgeSidebar(function (builder) {
  builder.create('primarySidebar', {
    anchor: 'bottom'
  }).registerPersistentConfig('xs', {
    width: '100%',
    height: '0',
    collapsible: true,
    persistentBehavior: {
      header: 'fit',
      _other: 'none'
    }
  });
});

var ControlSidebar = function ControlSidebar() {
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_layout.Root, {
    scheme: scheme,
    initialState: {
      sidebar: {
        primarySidebar: {
          open: true
        }
      }
    }
  }, function (_ref) {
    var setOpen = _ref.setOpen;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(DrawerSidebar, {
      sidebarId: 'primarySidebar',
      PaperProps: {
        className: styles.sidebar
      }
    }, /*#__PURE__*/_react["default"].createElement(SidebarContent, null, /*#__PURE__*/_react["default"].createElement(_RoundedIconSideBar["default"], {
      onClickItem: function onClickItem() {
        return setOpen('primarySidebar', true);
      }
    }))));
  });
};

var _default = ControlSidebar;
exports["default"] = _default;