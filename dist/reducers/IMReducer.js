"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _Textsms = _interopRequireDefault(require("@material-ui/icons/Textsms"));

var _VideoCall = _interopRequireDefault(require("@material-ui/icons/VideoCall"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  menuList: [{
    menu: /*#__PURE__*/_react["default"].createElement(_Textsms["default"], null),
    path: "/chat"
  }, {
    menu: /*#__PURE__*/_react["default"].createElement(_VideoCall["default"], null),
    path: "/meeting"
  }],
  user: {
    email: "user@zkteco.in",
    profile: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
  },
  contactList: [{
    firstName: "Harshitha",
    lastName: "P",
    email: "harshitha@zkteco.in",
    userId: "harshitha"
  }, {
    firstName: "Vinay",
    lastName: "Gy",
    email: "vinay@zkteco.in",
    userId: "vinay"
  }, {
    firstName: "Pratap",
    lastName: "G",
    email: "pratap@zkteco.in",
    userId: "pratap"
  }, {
    firstName: "Vinod",
    lastName: "Choudhari",
    email: "vinodchoudhari@zkteco.in",
    userId: "vinodchoudhari"
  }, {
    firstName: "Vincen",
    lastName: "wen",
    email: "vincen.wen@zkteco.in",
    userId: "vincen"
  }, {
    firstName: "Nanigopal",
    lastName: "Jena",
    email: "Nanigopal@zkteco.in",
    userId: "Nanigopal"
  }],
  toContact: {},
  draftContact: {},
  fromContact: {
    firstName: "Pratap",
    email: "pratap@zkteco.in",
    userId: "pratap@zkteco.in"
  },
  recentContacts: [{
    "email": "harshitha@zkteco.in",
    "firstName": "Harshitha",
    "lastName": "P",
    "sentTime": "2021-02-11",
    "unreadMessageCount": 1,
    "message": "ggjghj",
    "id": "0798f3af-07a4-4dac-a417-eefee695c99d"
  }, {
    "email": "vinay@zkteco.in",
    "firstName": "Vinay",
    "lastName": "Gy",
    "sentTime": "2021-02-09",
    "unreadMessageCount": 0,
    "message": "123",
    "id": "2e6eb0d0-aa89-4370-90b6-6aa8a58627ca"
  }],
  messageList: [],
  imServiceConfig: {
    imServiceUrl: "http://localhost:9089"
  },
  meetingList: [],
  meeting: {},
  meetingParticipents: []
};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_CONTACTS":
      return _objectSpread(_objectSpread({}, state), {}, {
        contactList: action.payload
      });

    case "TO_CONTACT":
      return _objectSpread(_objectSpread({}, state), {}, {
        toContact: action.payload
      });

    case "FROM_CONTACT":
      return _objectSpread(_objectSpread({}, state), {}, {
        fromContact: action.payload
      });

    case "GET_RECENT_CONTACTS":
      return _objectSpread(_objectSpread({}, state), {}, {
        recentContacts: action.payload
      });

    case "GET_MESSAGES":
      return _objectSpread(_objectSpread({}, state), {}, {
        messageList: action.payload
      });

    case "IM_CONFIG":
      return _objectSpread(_objectSpread({}, state), {}, {
        imServiceConfig: action.payload
      });

    case "GET_MEETINGS":
      return _objectSpread(_objectSpread({}, state), {}, {
        meetingList: action.payload
      });

    case "GET_MEETING":
      return _objectSpread(_objectSpread({}, state), {}, {
        meeting: action.payload
      });

    case "GET_MEETING_PARTICIPENTS":
      return _objectSpread(_objectSpread({}, state), {}, {
        meetingParticipents: action.payload
      });

    case "DRAFT_CONTACT":
      return _objectSpread(_objectSpread({}, state), {}, {
        draftContact: action.payload
      });

    default:
      return state;
  }
}