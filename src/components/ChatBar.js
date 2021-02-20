import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircle from '@material-ui/icons/AddCircle';
import Gif from '@material-ui/icons/Gif';
import Image from '@material-ui/icons/Image';
import Note from '@material-ui/icons/Note';
import SendIcon from '@material-ui/icons/Send';
import TagFaces from '@material-ui/icons/TagFaces';
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  icon: {
    color: 'rgb(0, 153, 255)',
    width: 44,
    height: 44,
    padding: 6,
    '&:not(:first-child)': {
      marginLeft: 4,
    },
  },
  input: {
    flex: 'auto',
    borderRadius: 15,
    paddingLeft: 16,
    backgroundColor: 'rgba(0,0,0,0.04)',
    margin: '0 8px',
    height: 36,
    fontSize: 13
  },
}));

const ChatBar = ({ concise,onClick }) => {
  const styles = useStyles();
  const  [message, setMessage] = useState();
  const sendMessage = () => {
    onClick(message);
    setMessage('');
  }
  return (
    <>
      {!concise && (
        <>

        </>
      )}
      <InputBase
        className={styles.input}
        placeholder={'Type a message...'}
        onChange={e => {
          setMessage(e.target.value);
        }}
        value = {message}
        // endAdornment={
        //   <InputAdornment position={'end'}>
        //     <Gif className={styles.icon} />
        //     <Note className={styles.icon} />
        //     <Image className={styles.icon} />
        //     <AddCircle className={styles.icon} />
        //     <TagFaces className={styles.icon} />
        //   </InputAdornment>
        // }
      />
      <SendIcon className={styles.icon} onClick={()=>sendMessage()}/>
    </>
  );
};

ChatBar.defaultProps = {
  onClick: () => console.log("ChatBar")
}

ChatBar.propTypes = {
  onClick: PropTypes.func
};

export default ChatBar;
