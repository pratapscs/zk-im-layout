import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ChatMsg from './ChatMsg';
import PropTypes from "prop-types";

const AVATAR = 'https://i.pravatar.cc/300?img=13';

const useStyles = makeStyles(() => ({
  date: {
    fontWeight: 500,
    color: 'rgba(0,0,0,0.4)',
    margin: '12px 0',
    fontSize: 12,
    textAlign: 'center',
  },
  chatMessage: {
    width: '100%',
  }
}));

const ChatDialog = ({messageList, to}) => {
  const styles = useStyles();
  const messages = messageList ? messageList.map((item,index) => (
    <ChatMsg avatar={AVATAR} messages={[item.message]} side={to.email === item.senderEmail ? 'right' : 'left'}/>
  )) : {};
  return (
    <Box p={'16px 30px 12px 10px'} width="100%" overflow="scroll" className={styles.chatMessage}>

      {messages}
      
    </Box>
  );
};

ChatDialog.defaultProps = {
  messageList: [],
  to: {}
}

ChatDialog.propTypes = {
  messageList: PropTypes.array,
  to: PropTypes.object
};

export default ChatDialog;
