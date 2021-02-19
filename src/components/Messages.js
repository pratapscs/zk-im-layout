import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Layout, { Root, getHeader, getContent, getFullscreen, getDrawerSidebar, getInsetFooter } from '@mui-treasury/layout';
import MessengerSearch from './MessengerSearch';
import ChatList from './ChatList';
import ConversationHead from './ConversationHead';
import ChatBar from './ChatBar';
import ChatDialog from './ChatDialog';
import Avatar from '@material-ui/core/Avatar';
import { compose } from 'redux';
import { connect } from "react-redux";
import { 
  addContact, 
  getAllRecentConversations, 
  selectContact, 
  clearDraftContact, 
  getPrivateChatMessages, 
  getChannelChatMessages,
  clearChat,
  setRecentContacts, 
  setPrivateChatMessages,
  addContactAndSendMessage,
  sendChatMessages  
} from "../Action/Action";
import {useDispatch, useSelector} from "react-redux";

const Header = getHeader(styled);
const Content = getContent(styled);
const Fullscreen = getFullscreen(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const InsetFooter = getInsetFooter(styled);

const useStyles = makeStyles((theme) => ({
  fullscreen: {
 marginLeft: '110px',
 [theme.breakpoints.down('sm')]: {
  marginLeft: '0px',
}
  },
  header: {
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .10)',
    backgroundColor: '#fff',
  },
  messageHeader: {
    fontSize: '18px',
    fontWeight: '700',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  insetBody: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
    overflowY: 'auto',
    backgroundColor: '#fff',
  },
  edit: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    marginLeft: '10px',
    // width: '2em',
    // height: '2em',
    // fontSize: '5em',
  },
  sidebar: {
    marginLeft: '84px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      zIndex:'0'
    }
  },
  footer: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '15vh'
    }
  }
}));

var isSSE = false;
var conversationHandler = null;

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(0, 153, 255)',
      },
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body1: {
        fontSize: `${15 / 16}rem`,
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'strong, b': {
            fontWeight: 'bold',
          },
        },
      },
    },
  })
);
const contactHandler = new EventSource('http://192.168.20.30:9089/api/v1.0/recent-contacts/pratap@zkteco.in');
  
const Messages = () => {
  const styles = useStyles();
  const scheme = Layout();
  const dispatch = useDispatch();
  const chatProps = useSelector(state => state.im);
  const [messageList,setMessageList] = useState([]);
  const [draftContact,setDraftContact] = useState({});
  const [displayContact, setDisplayContact] = React.useState('inline');
  const [displayChat, setDisplayChat] = React.useState('none');
  contactHandler.onmessage = e => synchRecentContact(JSON.parse(e.data))
  
  const searchContact = (query) => {
    if (!query) return [];
    const result = chatProps.contactList.map((data) => {
        if (data.email.includes(query)) {
            data.title = data.firstName+" "+data.lastName;
            return data
        }
    });
    return result;
  }

  const handleContact = (contact) => {
    
      const contactInfoDTO = {
          user_id: contact.userId,
          user_email_id: chatProps.fromContact.email,
          contact_email_id: contact.email,
          first_name: contact.firstName,
          last_name: contact.lastName,
          unread_message_count: null,
          updated_at: null
      }

      if(!chatProps.recentContacts[chatProps.recentContacts.findIndex(x => x.email == contact.email)]){
          setDraftContact(contact)
          dispatch(clearDraftContact(contact))
          setMessageList([])
          if(conversationHandler != null){
          conversationHandler.close();
        }
          dispatch(selectContact(contact))
      } else {
        setMessageList([])
        if(conversationHandler != null){
          conversationHandler.close();
        }
        dispatch(selectContact({contact}))
      }
  }
 
  
  const synchRecentContact = (data) => {
    dispatch(setRecentContacts(data ? data.data : []))
  }

  const synchRecentMessages = (messages) => {
    setMessageList(messages ? messages.data : [])
  }

  const selectChatContact = contact => {
    dispatch(selectContact(contact))
    dispatch(clearChat())

    if(!contact.channelId){
      if(isSSE){
        conversationHandler.close();
        isSSE = false;
        conversationHandler = new EventSource('http://192.168.20.30:9089/api/v1.0/chat/'+chatProps.fromContact.email+'/'+contact.email);
        conversationHandler.onmessage = e => synchRecentMessages(JSON.parse(e.data))
      } else {
        if(conversationHandler != null){
          conversationHandler.close();
        }
        isSSE = true;
        conversationHandler = new EventSource('http://192.168.20.30:9089/api/v1.0/chat/'+chatProps.fromContact.email+'/'+contact.email);
        conversationHandler.onmessage = e => synchRecentMessages(JSON.parse(e.data))
      }
      
    }
        //this.props.getPrivateChatMessages(contact.email, 10, '2020-12-19', this.props.fromContact.email);
    else
      //dispatch(getChannelChatMessages(contact.channelId, 10, '2020-12-19', this.props.fromContact.email));

    if(chatProps.recentContacts[chatProps.recentContacts.findIndex(x => x.email == contact.email)])
      setDraftContact({})
        
    

    console.log("chatProps.messageList :"+chatProps.messageList)
    
  }

  const sendMessage = (message) => {
    const messageDTO = {
        "message": message,
        "user_id": chatProps.fromContact.email,
        "date":"2021-01-11",
        "to_contact": chatProps.toContact.email
      }

      alert(JSON.stringify(messageDTO))

      //dispatch(sendChatMessages(messageDTO))
    
    if (Object.keys(draftContact).length > 0) {
        const contactInfoDTO = {
            user_id: draftContact.userId,
            user_email_id: chatProps.fromContact.email,
            contact_email_id: draftContact.email,
            first_name: draftContact.firstName,
            last_name: draftContact.lastName,
            unread_message_count: null,
            updated_at: null
        }
        dispatch(addContactAndSendMessage(contactInfoDTO,messageDTO))

    } else {
      dispatch(sendChatMessages(messageDTO))
    }
    
    
    
}

const hideOrShowContact = (state) =>{
        
  if(state){
      setDisplayContact('inline') 
      setDisplayChat('none')
  } else {
      setDisplayContact('none') 
      setDisplayChat('inline')
  }
}

  
  //const contactHandler = new EventSource('http://192.168.20.30:9089/api/v1.0/recent-contacts/pratap@zkteco.in');
  
  
  //contactHandler.onmessage = e => synchRecentContact(JSON.parse(e.data))

  
  //alert(JSON.stringify(chatProps))

  scheme.configureHeader(builder => {
    builder.create('appHeader').registerConfig('xs', {
      position: 'relative',
      initialHeight: 60,
    });
  });

  scheme.configureEdgeSidebar(builder => {
    builder
      .create('primarySidebar', { anchor: 'left' })
      .registerPermanentConfig('xs', {
        width: '25%',
        collapsible: true,
        collapsedWidth: '70px',
      });
  });
  scheme.enableAutoCollapse('primarySidebar', 'sm');
  scheme.configureInsetSidebar(builder => {
    builder
      .create('secondarySidebar', { anchor: 'right' })
      .registerAbsoluteConfig('sm', {
        width: '33%',
      });
  });

  var draftContactItem;

  if (Object.keys(draftContact).length > 0) {
    draftContactItem = <ChatListItem {...draftContact} onClick={selectChatContact} contact={draftContact}/>
  }
  return (
    <Fullscreen className={styles.fullscreen}>
      <Root theme={theme} scheme={scheme}>
        {({ state: { sidebar } }) => (
          <>
            <CssBaseline />

            <Header className={styles.header}>
              <Toolbar disableGutters>
                <ConversationHead primary={chatProps.toContact ? chatProps.toContact.firstName : ''}/>
              </Toolbar>
            </Header>

            <DrawerSidebar sidebarId={'primarySidebar'} PaperProps={{ className: styles.sidebar }}>
              {sidebar.primarySidebar.collapsed ? (
                <>
                  <Box display="flex" p={1}>
                    <Box p={1}>
                      <Avatar src={'https://i.pravatar.cc/300?img=13'} />
                    </Box>
                    <Box p={1} flexGrow={1} className={styles.messageHeader}>
                      Messages
                    </Box>
                    <Box p={1}>
                      <IconButton className={styles.edit}>
                        <AddOutlinedIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box textAlign={'center'} my={1} display='flex' p={1} >
                  <MessengerSearch getContactSuggestions = {(data) => searchContact(data)} queryAction = {(data) =>handleContact(data)}/>
                    
                  </Box>
                </>
              ) : (
                 
                    <Box display='flex' p={1}>
                      <MessengerSearch getContactSuggestions = {(data) => searchContact(data)} queryAction = {(data) =>handleContact(data)}/>
                     
                      <IconButton className={styles.edit}>
                        <AddOutlinedIcon />
                      </IconButton>
                    </Box>
            
                )}
              {draftContactItem}
              <ChatList concise={sidebar.primarySidebar.collapsed} data={chatProps.recentContacts} onClick={selectChatContact}/>
            </DrawerSidebar>

            <Content>
              <ChatDialog messageList={messageList} to={chatProps.toContact}/>
            </Content>

            <InsetFooter ContainerProps={{ disableGutters: true }} className = {styles.footer}>
              <Box display={'flex'} alignItems={'center'} p={1}>
                <ChatBar concise={sidebar.primarySidebar.collapsed} onClick={sendMessage}/>
              </Box>
            </InsetFooter>
          </>
        )}
      </Root>
    </Fullscreen>
  );
};

const mapStateToProps = state => ({
  contactList: state.im.contactList,
  recentContacts: state.im.recentContacts,
  fromContact: state.im.fromContact,
  toContact: state.im.toContact,
  draftContact: state.im.draftContact,
  messageList: state.im.messageList
});

export default compose(connect(mapStateToProps, {
  addContact, 
  getAllRecentConversations, 
  selectContact, 
  clearDraftContact, 
  getPrivateChatMessages, 
  getChannelChatMessages,
  clearChat, 
  setRecentContacts, 
  setPrivateChatMessages,
  addContactAndSendMessage,
  sendChatMessages}
  ))(Messages);
