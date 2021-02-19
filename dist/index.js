"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ChatBar: true,
  ChatDialog: true,
  ChatList: true,
  ChatListItem: true,
  ChatMsg: true,
  ChatSettings: true,
  Content: true,
  ConversationHead: true,
  Footer: true,
  Header: true,
  IMMessages: true,
  MessengerSearch: true,
  Nav: true,
  Root: true,
  LayoutContext: true,
  presets: true,
  useConfig: true,
  useWidth: true,
  useHeightAdjustment: true,
  useAutoCollapse: true
};
Object.defineProperty(exports, "ChatBar", {
  enumerable: true,
  get: function get() {
    return _ChatBar["default"];
  }
});
Object.defineProperty(exports, "ChatDialog", {
  enumerable: true,
  get: function get() {
    return _ChatDialog["default"];
  }
});
Object.defineProperty(exports, "ChatList", {
  enumerable: true,
  get: function get() {
    return _ChatList["default"];
  }
});
Object.defineProperty(exports, "ChatListItem", {
  enumerable: true,
  get: function get() {
    return _ChatListItem["default"];
  }
});
Object.defineProperty(exports, "ChatMsg", {
  enumerable: true,
  get: function get() {
    return _ChatMsg["default"];
  }
});
Object.defineProperty(exports, "ChatSettings", {
  enumerable: true,
  get: function get() {
    return _ChatSettings["default"];
  }
});
Object.defineProperty(exports, "Content", {
  enumerable: true,
  get: function get() {
    return _Content["default"];
  }
});
Object.defineProperty(exports, "ConversationHead", {
  enumerable: true,
  get: function get() {
    return _ConversationHead["default"];
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "IMMessages", {
  enumerable: true,
  get: function get() {
    return _IMMessages["default"];
  }
});
Object.defineProperty(exports, "MessengerSearch", {
  enumerable: true,
  get: function get() {
    return _MessengerSearch["default"];
  }
});
Object.defineProperty(exports, "Nav", {
  enumerable: true,
  get: function get() {
    return _Nav["default"];
  }
});
Object.defineProperty(exports, "Root", {
  enumerable: true,
  get: function get() {
    return _Root["default"];
  }
});
Object.defineProperty(exports, "LayoutContext", {
  enumerable: true,
  get: function get() {
    return _context["default"];
  }
});
Object.defineProperty(exports, "presets", {
  enumerable: true,
  get: function get() {
    return _presets["default"];
  }
});
Object.defineProperty(exports, "useConfig", {
  enumerable: true,
  get: function get() {
    return _useConfig["default"];
  }
});
Object.defineProperty(exports, "useWidth", {
  enumerable: true,
  get: function get() {
    return _useWidth["default"];
  }
});
Object.defineProperty(exports, "useHeightAdjustment", {
  enumerable: true,
  get: function get() {
    return _useHeightAdjustment["default"];
  }
});
Object.defineProperty(exports, "useAutoCollapse", {
  enumerable: true,
  get: function get() {
    return _useAutoCollapse["default"];
  }
});

var _ChatBar = _interopRequireDefault(require("./components/ChatBar"));

var _ChatDialog = _interopRequireDefault(require("./components/ChatDialog"));

var _ChatList = _interopRequireDefault(require("./components/ChatList"));

var _ChatListItem = _interopRequireDefault(require("./components/ChatListItem"));

var _ChatMsg = _interopRequireDefault(require("./components/ChatMsg"));

var _ChatSettings = _interopRequireDefault(require("./components/ChatSettings"));

var _Content = _interopRequireDefault(require("./components/Content"));

var _ConversationHead = _interopRequireDefault(require("./components/ConversationHead"));

var _Footer = _interopRequireDefault(require("./components/Footer"));

var _Header = _interopRequireDefault(require("./components/Header"));

var _IMMessages = _interopRequireDefault(require("./components/IMMessages"));

var _MessengerSearch = _interopRequireDefault(require("./components/MessengerSearch"));

var _Nav = _interopRequireDefault(require("./components/Nav"));

var _Root = _interopRequireDefault(require("./components/Root"));

var _context = _interopRequireDefault(require("./context"));

var _presets = _interopRequireWildcard(require("./utils/presets"));

Object.keys(_presets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _presets[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _presets[key];
    }
  });
});

var _useConfig = _interopRequireDefault(require("./hooks/useConfig"));

var _useWidth = _interopRequireDefault(require("./hooks/useWidth"));

var _useHeightAdjustment = _interopRequireDefault(require("./hooks/useHeightAdjustment"));

var _useAutoCollapse = _interopRequireDefault(require("./hooks/useAutoCollapse"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }