import React from 'react';
import ChatListItem from './ChatListItem';
import PropTypes from "prop-types";

const ChatList = ({ concise, data, onClick }) => {

  return data.map((item,index) => (
    <ChatListItem index={index} {...item} concise={concise} onClick={onClick} contact={item}/>
  ));
};

ChatList.defaultProps = {
  data: [],
  onClick: () => console.log("ChatList")
}

ChatList.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func
};

export default ChatList;
