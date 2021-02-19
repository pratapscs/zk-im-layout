"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createMuiTreasuryLayout = exports.createCozyLayout = exports.createContentBasedLayout = exports.createFixedLayout = exports.createStandardLayout = exports.createDefaultLayout = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createDefaultLayout = function createDefaultLayout(config) {
  return _objectSpread({
    navWidth: 256,
    navAnchor: 'left',
    navVariant: 'temporary',
    collapsible: false,
    collapsedWidth: 64,
    collapsedBreakpoint: 'md',
    autoCollapsedDisabled: false,
    clipped: false,
    heightAdjustmentDisabled: false,
    initialAdjustmentHeight: {
      xs: 56,
      sm: 64
    },
    // toolbar's height in xs is 56px
    heightAdjustmentSpeed: 144,
    headerPosition: 'relative',
    squeezed: false,
    footerShrink: true
  }, config);
};

exports.createDefaultLayout = createDefaultLayout;

var createStandardLayout = function createStandardLayout(config) {
  return _objectSpread(_objectSpread({}, createDefaultLayout()), {}, {
    clipped: true,
    navVariant: {
      xs: 'temporary',
      sm: 'permanent'
    },
    collapsible: {
      xs: false,
      sm: true
    }
  }, config);
};

exports.createStandardLayout = createStandardLayout;

var createFixedLayout = function createFixedLayout(config) {
  return _objectSpread(_objectSpread({}, createDefaultLayout()), {}, {
    navVariant: {
      xs: 'temporary',
      md: 'permanent'
    },
    collapsible: {
      xs: false,
      md: true
    },
    squeezed: true,
    headerPosition: 'sticky'
  }, config);
};

exports.createFixedLayout = createFixedLayout;

var createContentBasedLayout = function createContentBasedLayout(config) {
  return _objectSpread(_objectSpread({}, createDefaultLayout()), {}, {
    navWidth: {
      sm: 200,
      md: 256
    },
    navVariant: {
      xs: 'temporary',
      sm: 'persistent'
    },
    collapsible: false
  }, config);
};

exports.createContentBasedLayout = createContentBasedLayout;

var createCozyLayout = function createCozyLayout(config) {
  return _objectSpread(_objectSpread({}, createDefaultLayout()), {}, {
    navVariant: {
      xs: 'persistent',
      sm: 'permanent'
    },
    navWidth: {
      sm: 200,
      md: 256,
      xs: 64
    },
    collapsible: {
      xs: false,
      sm: true
    },
    clipped: false
  }, config);
};

exports.createCozyLayout = createCozyLayout;

var createMuiTreasuryLayout = function createMuiTreasuryLayout(config) {
  return _objectSpread(_objectSpread({}, createDefaultLayout()), {}, {
    navWidth: 200,
    navVariant: {
      xs: 'temporary',
      md: 'permanent'
    },
    heightAdjustmentDisabled: true,
    clipped: true,
    collapsible: false
  }, config);
};

exports.createMuiTreasuryLayout = createMuiTreasuryLayout;
var _default = {
  createDefaultLayout: createDefaultLayout,
  createStandardLayout: createStandardLayout,
  createFixedLayout: createFixedLayout,
  createContentBasedLayout: createContentBasedLayout,
  createCozyLayout: createCozyLayout,
  createMuiTreasuryLayout: createMuiTreasuryLayout
};
exports["default"] = _default;