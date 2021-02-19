import axios from "axios";
import { JAVA_URL_ADD_CONTACT, JAVA_URL_RECENT_CONVERSATION_LIST, JAVA_URL_CHAT_MESSAGES_LIST} from "../utils/EndPoints";

export const addContact = (contact, recentContacts) => async dispatch => {

    dispatch({
        type: "GET_RECENT_CONTACTS",
        payload: [{ name: contact.title, email: contact.email, message: '', time: '' }].concat(recentContacts)
    });
}



export const clearAllRecentContact = () => async dispatch => {
    dispatch({
        type: "GET_RECENT_CONTACTS",
        payload: []
    });
}

export const clearDraftContact = (contact) => async dispatch => {
    dispatch({
        type: "DRAFT_CONTACT",
        payload: contact
    });
}

export const selectContact = (contact) => async dispatch => {
    dispatch({
        type: "TO_CONTACT",
        payload: contact
    });
}

export const clearChat = () => async dispatch => {
    
    dispatch({
        type: "GET_MESSAGES",
        payload: []
    })
}

export const setRecentContacts = (data) => async dispatch => {
    
    dispatch({
        type: "GET_RECENT_CONTACTS",
        payload: data
    })
};

export const getAllRecentConversations = (userId) => async dispatch => {
    
    const res = await axios.get(JAVA_URL_RECENT_CONVERSATION_LIST + userId);
    dispatch({
        type: "GET_RECENT_CONTACTS",
        payload: res.data.data
    })
    console.log(res.data.data);
};

export const addUserToContacts = (contactInfoDTO) => async dispatch => {
    const res = await axios.post(JAVA_URL_ADD_CONTACT, contactInfoDTO)
    dispatch({
        type: "ADD_CONTACT",
        payload: res.data
    })
    console.log(res.data);
};

export const setPrivateChatMessages = (messages) => async dispatch => {
    dispatch({
        type: "GET_MESSAGES",
        payload: messages
    })
};

export const getPrivateChatMessages = (toContact, pageSize, date, userId) => async dispatch => {
    const res = await axios.get(JAVA_URL_CHAT_MESSAGES_LIST, {
        params: {
            toContact,
            pageSize,
            date,
            userId
        }
    });
    dispatch({
        type: "GET_MESSAGES",
        payload: res.data.data
    })
    console.log(res.data.data);
};

export const sendChatMessages = (chatMessageDTO) => async dispatch => {
    alert(chatMessageDTO)
    const res = await axios.post(JAVA_URL_CHAT_MESSAGES_LIST, chatMessageDTO);
     
     console.log(res.data);
     console.log(JSON.stringify(res));
 };

 export const getChannelChatMessages = (toChannel, pageSize, date, userId) => async dispatch => {
    const res = await axios.get(JAVA_URL_CHAT_MESSAGES_LIST, {
        params: {
            toChannel,
            pageSize,
            date,
            userId
        }
    });
     dispatch({
        type: "GET_MESSAGES",
        payload: res.data.data
    })
    console.log(res.data);
};

export const addContactAndSendMessage = (contact,message) => async dispatch => {
    const res = await axios.post(JAVA_URL_ADD_CONTACT, contact).then(result => {
        axios.post(JAVA_URL_CHAT_MESSAGES_LIST, message)
        dispatch({
            type: "DRAFT_CONTACT",
            payload: {}
        });
         
    })
}



