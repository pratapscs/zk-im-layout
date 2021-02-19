"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _react = require("react");

var _core = require("@material-ui/core");

var _createGetScreenValue = _interopRequireDefault(require("../utils/createGetScreenValue"));

var _someIs = _interopRequireDefault(require("../utils/someIs"));

var _useConfig2 = _interopRequireDefault(require("./useConfig"));

var _useWidth = _interopRequireDefault(require("./useWidth"));

var _useEventListener = _interopRequireDefault(require("./useEventListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default() {
  var _useTheme = (0, _core.useTheme)(),
      keys = _useTheme.breakpoints.keys;

  var _useConfig = (0, _useConfig2["default"])(),
      clipped = _useConfig.clipped,
      headerPosition = _useConfig.headerPosition,
      initialAdjustmentHeight = _useConfig.initialAdjustmentHeight,
      heightAdjustmentSpeed = _useConfig.heightAdjustmentSpeed,
      heightAdjustmentDisabled = _useConfig.heightAdjustmentDisabled,
      navVariant = _useConfig.navVariant;

  var currentScreen = (0, _useWidth["default"])();
  var getScreenValue = (0, _createGetScreenValue["default"])(keys, currentScreen);
  var initialHeight = getScreenValue(initialAdjustmentHeight);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  (0, _react.useEffect)(function () {
    if (typeof initialHeight === 'number') {
      setHeight(initialHeight);
    }
  }, [initialHeight]);
  var handler = (0, _react.useCallback)((0, _debounce["default"])(function () {
    // Update height
    if (typeof initialHeight === 'number') {
      var offset = initialHeight - window.scrollY;
      setHeight(offset < 0 ? 0 : offset);
    }
  }, heightAdjustmentSpeed, {
    leading: true,
    trailing: true
  }), [setHeight, initialHeight]);
  (0, _useEventListener["default"])('scroll', handler);
  if (heightAdjustmentDisabled) return 0; // disabled by user.

  if (navVariant === 'temporary') return 0;

  if (!clipped) {
    // do not run the effect below if behavior is not right.
    return 0;
  }

  if (clipped && (0, _someIs["default"])(['sticky', 'fixed'], headerPosition)) {
    return initialHeight;
  }

  return height;
};

exports["default"] = _default;