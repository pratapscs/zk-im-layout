"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addContactAndSendMessage = exports.getChannelChatMessages = exports.sendChatMessages = exports.getPrivateChatMessages = exports.setPrivateChatMessages = exports.addUserToContacts = exports.getAllRecentConversations = exports.setRecentContacts = exports.clearChat = exports.selectContact = exports.clearDraftContact = exports.clearAllRecentContact = exports.addContact = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _EndPoints = require("../utils/EndPoints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addContact = function addContact(contact, recentContacts) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: "GET_RECENT_CONTACTS",
                payload: [{
                  name: contact.title,
                  email: contact.email,
                  message: '',
                  time: ''
                }].concat(recentContacts)
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.addContact = addContact;

var clearAllRecentContact = function clearAllRecentContact() {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: "GET_RECENT_CONTACTS",
                payload: []
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.clearAllRecentContact = clearAllRecentContact;

var clearDraftContact = function clearDraftContact(contact) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: "DRAFT_CONTACT",
                payload: contact
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

exports.clearDraftContact = clearDraftContact;

var selectContact = function selectContact(contact) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: "TO_CONTACT",
                payload: contact
              });

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

exports.selectContact = selectContact;

var clearChat = function clearChat() {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch({
                type: "GET_MESSAGES",
                payload: []
              });

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};

exports.clearChat = clearChat;

var setRecentContacts = function setRecentContacts(data) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch({
                type: "GET_RECENT_CONTACTS",
                payload: data
              });

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};

exports.setRecentContacts = setRecentContacts;

var getAllRecentConversations = function getAllRecentConversations(userId) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _axios["default"].get(_EndPoints.JAVA_URL_RECENT_CONVERSATION_LIST + userId);

            case 2:
              res = _context7.sent;
              dispatch({
                type: "GET_RECENT_CONTACTS",
                payload: res.data.data
              });
              console.log(res.data.data);

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
};

exports.getAllRecentConversations = getAllRecentConversations;

var addUserToContacts = function addUserToContacts(contactInfoDTO) {
  return /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _axios["default"].post(_EndPoints.JAVA_URL_ADD_CONTACT, contactInfoDTO);

            case 2:
              res = _context8.sent;
              dispatch({
                type: "ADD_CONTACT",
                payload: res.data
              });
              console.log(res.data);

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }();
};

exports.addUserToContacts = addUserToContacts;

var setPrivateChatMessages = function setPrivateChatMessages(messages) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(dispatch) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              dispatch({
                type: "GET_MESSAGES",
                payload: messages
              });

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x9) {
      return _ref9.apply(this, arguments);
    };
  }();
};

exports.setPrivateChatMessages = setPrivateChatMessages;

var getPrivateChatMessages = function getPrivateChatMessages(toContact, pageSize, date, userId) {
  return /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _axios["default"].get(_EndPoints.JAVA_URL_CHAT_MESSAGES_LIST, {
                params: {
                  toContact: toContact,
                  pageSize: pageSize,
                  date: date,
                  userId: userId
                }
              });

            case 2:
              res = _context10.sent;
              dispatch({
                type: "GET_MESSAGES",
                payload: res.data.data
              });
              console.log(res.data.data);

            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x10) {
      return _ref10.apply(this, arguments);
    };
  }();
};

exports.getPrivateChatMessages = getPrivateChatMessages;

var sendChatMessages = function sendChatMessages(chatMessageDTO) {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              alert(chatMessageDTO);
              _context11.next = 3;
              return _axios["default"].post(_EndPoints.JAVA_URL_CHAT_MESSAGES_LIST, chatMessageDTO);

            case 3:
              res = _context11.sent;
              console.log(res.data);
              console.log(JSON.stringify(res));

            case 6:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x11) {
      return _ref11.apply(this, arguments);
    };
  }();
};

exports.sendChatMessages = sendChatMessages;

var getChannelChatMessages = function getChannelChatMessages(toChannel, pageSize, date, userId) {
  return /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return _axios["default"].get(_EndPoints.JAVA_URL_CHAT_MESSAGES_LIST, {
                params: {
                  toChannel: toChannel,
                  pageSize: pageSize,
                  date: date,
                  userId: userId
                }
              });

            case 2:
              res = _context12.sent;
              dispatch({
                type: "GET_MESSAGES",
                payload: res.data.data
              });
              console.log(res.data);

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x12) {
      return _ref12.apply(this, arguments);
    };
  }();
};

exports.getChannelChatMessages = getChannelChatMessages;

var addContactAndSendMessage = function addContactAndSendMessage(contact, message) {
  return /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return _axios["default"].post(_EndPoints.JAVA_URL_ADD_CONTACT, contact).then(function (result) {
                _axios["default"].post(_EndPoints.JAVA_URL_CHAT_MESSAGES_LIST, message);

                dispatch({
                  type: "DRAFT_CONTACT",
                  payload: {}
                });
              });

            case 2:
              res = _context13.sent;

            case 3:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function (_x13) {
      return _ref13.apply(this, arguments);
    };
  }();
};

exports.addContactAndSendMessage = addContactAndSendMessage;