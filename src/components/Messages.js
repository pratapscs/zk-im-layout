import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Layout, { Root, getHeader, getContent, getFullscreen, getDrawerSidebar, getInsetFooter } from '@mui-treasury/layout';
import MessengerSearch from './MessengerSearch';
import ConversationHead from './ConversationHead';
import ChatBar from './ChatBar';
import ChatDialog from './ChatDialog';
import ChatListItem from './ChatListItem';
import ChatList from './ChatList';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import PropTypes from "prop-types";
 
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
    marginLeft: '10px'
  },
  sidebar: {
    marginLeft: '84px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      zIndex:'0',
      '&:hover': {
        width: '80% !important',
        zIndex:'999',
      }
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


const Messages = ({contacts,user,config,getOrganizationContact}) => {
  const styles = useStyles();
  const scheme = Layout();
  const [messageList,setMessageList] = useState([]);
  const [draftContact,setDraftContact] = useState({});
  const [fromContact, setFromContact] = useState(user);
  const [toContact, setToContact] = useState({});
  const [contactList, setContactList] = useState(contacts);
  const [recentContacts, setRecentContacts] = useState([]);
  const [displayContact, setDisplayContact] = React.useState('inline');
  const [displayChat, setDisplayChat] = React.useState('none');
  const imServiceUrl = config.imServiceUrl;
  
  var contactHandler;
  
  useEffect(() => {
    contactHandler = new EventSource(imServiceUrl+'/api/v1.0/recent-contacts/pratap@zkteco.in');
    contactHandler.onmessage = e => synchRecentContact(JSON.parse(e.data));
  }, []);
  
  const searchContact = (query) => {
    return getOrganizationContact(query);
  }
 
  const handleContact = (contact) => {
    
      const contactInfoDTO = {
          user_id: contact.userId,
          user_email_id: fromContact.email,
          contact_email_id: contact.email,
          first_name: contact.firstName,
          last_name: contact.lastName,
          unread_message_count: null,
          updated_at: null
      }
 
      if(!recentContacts[recentContacts.findIndex(x => x.email == contact.email)]){
          setDraftContact(contact)
          setMessageList([])
          if(conversationHandler != null){
            conversationHandler.close();
          }
          setToContact(contact)
      } else {
        setMessageList([])
        if(conversationHandler != null){
          conversationHandler.close();
        }
        setToContact(contact)
        selectChatContact(contact)
      }
  }
 
  
  const synchRecentContact = (data) => {
    setRecentContacts(data ? data.data : [])
  }
 
  const synchRecentMessages = (messages) => {
    setMessageList(messages ? messages.data : [])
  }
 
  const selectChatContact = contact => {
    setToContact(contact)
    setMessageList([])
 
    if(!contact.channelId){
      if(isSSE){
        conversationHandler.close();
        isSSE = false;
        conversationHandler = new EventSource(imServiceUrl+'/api/v1.0/chat/'+fromContact.email+'/'+contact.email);
        conversationHandler.onmessage = e => synchRecentMessages(JSON.parse(e.data))
      } else {
        if(conversationHandler != null){
          conversationHandler.close();
        }
        isSSE = true;
        conversationHandler = new EventSource(imServiceUrl+'/api/v1.0/chat/'+fromContact.email+'/'+contact.email);
        conversationHandler.onmessage = e => synchRecentMessages(JSON.parse(e.data))
      }
      
    }
 
    if(recentContacts[recentContacts.findIndex(x => x.email == contact.email)]){
        setDraftContact({})
    }
      
  }

  const sendMessage = (message) => {
      
    const messageDTO = {
        "message": message,
        "user_id": fromContact.email,
        "date":"2021-01-11",
        "to_contact": toContact.email
      }
 
    if (Object.keys(draftContact).length > 0) {
        const contactInfoDTO = {
            user_id: draftContact.userId,
            user_email_id: fromContact.email,
            contact_email_id: draftContact.email,
            first_name: draftContact.firstName,
            last_name: draftContact.lastName,
            unread_message_count: null,
            updated_at: null
        }
        addContactAndSendMessage(contactInfoDTO,messageDTO)
 
    } else {
        sendChatMessages(messageDTO)
    }
    
}
 
const addContactAndSendMessage = (contact,message) => {
    const res = axios.post("/api/v1.0/contact/addContact", contact).then(result => {
        axios.post("/api/v1.0/chat", message)
        setDraftContact({})
    })
}
 
const sendChatMessages = (chatMessageDTO) => {
    const res = axios.post("/api/v1.0/chat", chatMessageDTO);
 };
 
const hideOrShowContact = (state) =>{
        
  if(state){
      setDisplayContact('inline') 
      setDisplayChat('none')
  } else {
      setDisplayContact('none') 
      setDisplayChat('inline')
  }
}
 
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
        '&:hover': {
          collapsedWidth: '100%',
        },
 
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
              <ConversationHead primary={toContact ? toContact.firstName : ''}/>
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
            <ChatList concise={sidebar.primarySidebar.collapsed} data={recentContacts} onClick={selectChatContact}/>
          </DrawerSidebar>

          <Content>
            <ChatDialog messageList={messageList} to={toContact}/>
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


Messages.defaultProps = {
    config: {imServiceUrl: "http://localhost:9089"},
    contacts: [
        { firstName: "Harshitha",lastName:"P", email: "harshitha@zkteco.in" , userId : "harshitha"},
        { firstName: "Vinay",lastName:"Gy", email: "vinay@zkteco.in", userId : "vinay" },
        { firstName: "Pratap",lastName:"G", email: "pratap@zkteco.in", userId : "pratap" },
        { firstName: "Vinod",lastName:"Choudhari", email: "vinodchoudhari@zkteco.in", userId : "vinodchoudhari" },
        { firstName: "Vincen",lastName:"wen", email: "vincen.wen@zkteco.in", userId : "vincen" },
        { firstName: "Nanigopal",lastName:"Jena", email: "Nanigopal@zkteco.in", userId : "Nanigopal" }
      ],
    toContact: {},
    draftContact: {},
    user: {
        firstName: "Pratap", email: "pratap@zkteco.in", userId : "pratap@zkteco.in"
    },
    recentContacts: [
        {
            "email": "harshitha@zkteco.in",
            "firstName": "Harshitha",
            "lastName": "P",
            "sentTime": "2021-02-11",
            "unreadMessageCount": 1,
            "message": "ggjghj",
            "id": "0798f3af-07a4-4dac-a417-eefee695c99d"
          },
          {
            "email": "vinay@zkteco.in",
            "firstName": "Vinay",
            "lastName": "Gy",
            "sentTime": "2021-02-09",
            "unreadMessageCount": 0,
            "message": "123",
            "id": "2e6eb0d0-aa89-4370-90b6-6aa8a58627ca"
          }
    ],
    messageList: [],
    getOrganizationContact: (query) => {
      const contacts = [
        { firstName: "Harshitha",lastName:"P", email: "harshitha@zkteco.in" , userId : "harshitha"},
        { firstName: "Vinay",lastName:"Gy", email: "vinay@zkteco.in", userId : "vinay" },
        { firstName: "Pratap",lastName:"G", email: "pratap@zkteco.in", userId : "pratap" },
        { firstName: "Vinod",lastName:"Choudhari", email: "vinodchoudhari@zkteco.in", userId : "vinodchoudhari" },
        { firstName: "Vincen",lastName:"wen", email: "vincen.wen@zkteco.in", userId : "vincen" },
        { firstName: "Nanigopal",lastName:"Jena", email: "Nanigopal@zkteco.in", userId : "Nanigopal" }
      ]
  
      if (!query) return [];
      var result = []; 
      contacts.map((data,index) => {
          if (data.email.includes(query)) {
            data.title = data.firstName+" "+data.lastName;
            result.push(data);
          }
      });
      return result;
    }
  };
 
/*
    variant, href, as, type, value, size, block, active, disabled, onClick
*/
 
Messages.propTypes = {
    config: PropTypes.object,
    contacts: PropTypes.array,
    toContact: PropTypes.object,
    draftContact: PropTypes.object,
    user: PropTypes.object,
    recentContacts: PropTypes.array,
    messageList: PropTypes.array,
    getOrganizationContact: PropTypes.func
};
 
export default Messages;