import React from 'react';
import ChatListItem from './ChatListItem';

const test = data => {
  alert(data)
}

const ChatList = ({ concise, data, onClick }) => {

  return data.map((item,index) => (
    <ChatListItem index={index} {...item} concise={concise} onClick={onClick} contact={item}/>
  ));
};

export default ChatList;
