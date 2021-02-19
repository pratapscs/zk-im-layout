"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _AddOutlined = _interopRequireDefault(require("@material-ui/icons/AddOutlined"));

var _styles = require("@material-ui/core/styles");

var _layout = _interopRequireWildcard(require("@mui-treasury/layout"));

var _messenger = require("../messenger");

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _Action = require("../Action/Action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    }),
    footer: _defineProperty({}, theme.breakpoints.down('sm'), {
      marginBottom: '15vh'
    })
  };
});
var isSSE = false;
var conversationHandler = null;
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
var contactHandler = new EventSource('http://192.168.20.30:9089/api/v1.0/recent-contacts/pratap@zkteco.in');

var Messages = function Messages() {
  var styles = useStyles();
  var scheme = (0, _layout["default"])();
  var dispatch = (0, _reactRedux.useDispatch)();
  var chatProps = (0, _reactRedux.useSelector)(function (state) {
    return state.im;
  });

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      messageList = _useState2[0],
      setMessageList = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      draftContact = _useState4[0],
      setDraftContact = _useState4[1];

  var _React$useState = _react["default"].useState('inline'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      displayContact = _React$useState2[0],
      setDisplayContact = _React$useState2[1];

  var _React$useState3 = _react["default"].useState('none'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      displayChat = _React$useState4[0],
      setDisplayChat = _React$useState4[1];

  contactHandler.onmessage = function (e) {
    return synchRecentContact(JSON.parse(e.data));
  };

  var searchContact = function searchContact(query) {
    if (!query) return [];
    var result = chatProps.contactList.map(function (data) {
      if (data.email.includes(query)) {
        data.title = data.firstName + " " + data.lastName;
        return data;
      }
    });
    return result;
  };

  var handleContact = function handleContact(contact) {
    var contactInfoDTO = {
      user_id: contact.userId,
      user_email_id: chatProps.fromContact.email,
      contact_email_id: contact.email,
      first_name: contact.firstName,
      last_name: contact.lastName,
      unread_message_count: null,
      updated_at: null
    };

    if (!chatProps.recentContacts[chatProps.recentContacts.findIndex(function (x) {
      return x.email == contact.email;
    })]) {
      setDraftContact(contact);
      dispatch((0, _Action.clearDraftContact)(contact));
      setMessageList([]);

      if (conversationHandler != null) {
        conversationHandler.close();
      }

      dispatch((0, _Action.selectContact)(contact));
    } else {
      setMessageList([]);

      if (conversationHandler != null) {
        conversationHandler.close();
      }

      dispatch((0, _Action.selectContact)({
        contact: contact
      }));
    }
  };

  var synchRecentContact = function synchRecentContact(data) {
    dispatch((0, _Action.setRecentContacts)(data ? data.data : []));
  };

  var synchRecentMessages = function synchRecentMessages(messages) {
    setMessageList(messages ? messages.data : []);
  };

  var selectChatContact = function selectChatContact(contact) {
    dispatch((0, _Action.selectContact)(contact));
    dispatch((0, _Action.clearChat)());

    if (!contact.channelId) {
      if (isSSE) {
        conversationHandler.close();
        isSSE = false;
        conversationHandler = new EventSource('http://192.168.20.30:9089/api/v1.0/chat/' + chatProps.fromContact.email + '/' + contact.email);

        conversationHandler.onmessage = function (e) {
          return synchRecentMessages(JSON.parse(e.data));
        };
      } else {
        if (conversationHandler != null) {
          conversationHandler.close();
        }

        isSSE = true;
        conversationHandler = new EventSource('http://192.168.20.30:9089/api/v1.0/chat/' + chatProps.fromContact.email + '/' + contact.email);

        conversationHandler.onmessage = function (e) {
          return synchRecentMessages(JSON.parse(e.data));
        };
      }
    } //this.props.getPrivateChatMessages(contact.email, 10, '2020-12-19', this.props.fromContact.email);
    else //dispatch(getChannelChatMessages(contact.channelId, 10, '2020-12-19', this.props.fromContact.email));
      if (chatProps.recentContacts[chatProps.recentContacts.findIndex(function (x) {
        return x.email == contact.email;
      })]) setDraftContact({});

    console.log("chatProps.messageList :" + chatProps.messageList);
  };

  var sendMessage = function sendMessage(message) {
    var messageDTO = {
      "message": message,
      "user_id": chatProps.fromContact.email,
      "date": "2021-01-11",
      "to_contact": chatProps.toContact.email
    };
    alert(JSON.stringify(messageDTO)); //dispatch(sendChatMessages(messageDTO))

    if (Object.keys(draftContact).length > 0) {
      var contactInfoDTO = {
        user_id: draftContact.userId,
        user_email_id: chatProps.fromContact.email,
        contact_email_id: draftContact.email,
        first_name: draftContact.firstName,
        last_name: draftContact.lastName,
        unread_message_count: null,
        updated_at: null
      };
      dispatch((0, _Action.addContactAndSendMessage)(contactInfoDTO, messageDTO));
    } else {
      dispatch((0, _Action.sendChatMessages)(messageDTO));
    }
  };

  var hideOrShowContact = function hideOrShowContact(state) {
    if (state) {
      setDisplayContact('inline');
      setDisplayChat('none');
    } else {
      setDisplayContact('none');
      setDisplayChat('inline');
    }
  }; //const contactHandler = new EventSource('http://192.168.20.30:9089/api/v1.0/recent-contacts/pratap@zkteco.in');
  //contactHandler.onmessage = e => synchRecentContact(JSON.parse(e.data))
  //alert(JSON.stringify(chatProps))


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
      collapsedWidth: '70px'
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
  var draftContactItem;

  if (Object.keys(draftContact).length > 0) {
    draftContactItem = /*#__PURE__*/_react["default"].createElement(_messenger.ChatListItem, _extends({}, draftContact, {
      onClick: selectChatContact,
      contact: draftContact
    }));
  }

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
    }, /*#__PURE__*/_react["default"].createElement(_messenger.ConversationHead, {
      primary: chatProps.toContact ? chatProps.toContact.firstName : ''
    }))), /*#__PURE__*/_react["default"].createElement(DrawerSidebar, {
      sidebarId: 'primarySidebar',
      PaperProps: {
        className: styles.sidebar
      }
    }, sidebar.primarySidebar.collapsed ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex",
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      src: 'https://i.pravatar.cc/300?img=13'
    })), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 1,
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
    }, /*#__PURE__*/_react["default"].createElement(_messenger.MessengerSearch, {
      getContactSuggestions: function getContactSuggestions(data) {
        return searchContact(data);
      },
      queryAction: function queryAction(data) {
        return handleContact(data);
      }
    }))) : /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex",
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_messenger.MessengerSearch, {
      getContactSuggestions: function getContactSuggestions(data) {
        return searchContact(data);
      },
      queryAction: function queryAction(data) {
        return handleContact(data);
      }
    }), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      className: styles.edit
    }, /*#__PURE__*/_react["default"].createElement(_AddOutlined["default"], null))), draftContactItem, /*#__PURE__*/_react["default"].createElement(_messenger.ChatList, {
      concise: sidebar.primarySidebar.collapsed,
      data: chatProps.recentContacts,
      onClick: selectChatContact
    })), /*#__PURE__*/_react["default"].createElement(Content, null, /*#__PURE__*/_react["default"].createElement(_messenger.ChatDialog, {
      messageList: messageList,
      to: chatProps.toContact
    })), /*#__PURE__*/_react["default"].createElement(InsetFooter, {
      ContainerProps: {
        disableGutters: true
      },
      className: styles.footer
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: 'flex',
      alignItems: 'center',
      p: 1
    }, /*#__PURE__*/_react["default"].createElement(_messenger.ChatBar, {
      concise: sidebar.primarySidebar.collapsed,
      onClick: sendMessage
    }))));
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    contactList: state.im.contactList,
    recentContacts: state.im.recentContacts,
    fromContact: state.im.fromContact,
    toContact: state.im.toContact,
    draftContact: state.im.draftContact,
    messageList: state.im.messageList
  };
};

var _default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, {
  addContact: _Action.addContact,
  getAllRecentConversations: _Action.getAllRecentConversations,
  selectContact: _Action.selectContact,
  clearDraftContact: _Action.clearDraftContact,
  getPrivateChatMessages: _Action.getPrivateChatMessages,
  getChannelChatMessages: _Action.getChannelChatMessages,
  clearChat: _Action.clearChat,
  setRecentContacts: _Action.setRecentContacts,
  setPrivateChatMessages: _Action.setPrivateChatMessages,
  addContactAndSendMessage: _Action.addContactAndSendMessage,
  sendChatMessages: _Action.sendChatMessages
}))(Messages);

exports["default"] = _default;