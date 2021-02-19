"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _CropFree = _interopRequireDefault(require("@material-ui/icons/CropFree"));

var _Business = _interopRequireDefault(require("@material-ui/icons/Business"));

var _Drafts = _interopRequireDefault(require("@material-ui/icons/Drafts"));

var _StarBorder = _interopRequireDefault(require("@material-ui/icons/StarBorder"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: "100%",
      // maxWidth: 320,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    avatar: {
      width: 60,
      height: 60,
      margin: "1px",
      border: "2px solid #ffffff",
      marginRight: "10px"
    },
    profile: {// background: 'green',
    },
    profileText: {
      color: "#304669",
      "& span": {
        fontSize: "1.5rem"
      },
      "& p": {
        fontSize: "1rem"
      }
    },
    item: {
      color: theme.palette.secondary.main,
      "& span": {
        fontSize: "1.5rem"
      },
      "& p": {
        fontSize: "1rem"
      }
    }
  };
});

function Profile() {
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_List["default"], {
    component: "nav",
    className: styles.root
  }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    className: styles.profile
  }, /*#__PURE__*/_react["default"].createElement(_ListItemAvatar["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    className: styles.avatar,
    src: "https://i.pravatar.cc/300?img=12"
  })), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: "John Deo",
    secondary: "ZKTeco Biometrics India",
    className: styles.profileText
  }), /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    className: "styles.item"
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_CropFree["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: "Scan"
  }), /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    className: "styles.item"
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Business["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: "Enterprise Information"
  }), /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    className: "styles.item"
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Drafts["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: "Invite Colleagues"
  }), /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    className: "styles.item"
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_StarBorder["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: "Collection"
  }), /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    className: "styles.item"
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Settings["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: "Settings"
  }), /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null)));
}

var _default = Profile;
exports["default"] = _default;