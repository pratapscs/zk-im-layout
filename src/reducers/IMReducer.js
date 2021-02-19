import React from 'react';
import TextsmsIcon from '@material-ui/icons/Textsms';
import VideoCallIcon from '@material-ui/icons/VideoCall';
 
const initialState = {
    menuList: [
        {
            menu: <TextsmsIcon/>,
            path: "/chat"
        },
        {
            menu: <VideoCallIcon/>,
            path: "/meeting"
        }
    ],
    user: {
        email:"user@zkteco.in", 
        profile: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
    },
    contactList: [
        { firstName: "Harshitha",lastName:"P", email: "harshitha@zkteco.in" , userId : "harshitha"},
        { firstName: "Vinay",lastName:"Gy", email: "vinay@zkteco.in", userId : "vinay" },
        { firstName: "Pratap",lastName:"G", email: "pratap@zkteco.in", userId : "pratap" },
        { firstName: "Vinod",lastName:"Choudhari", email: "vinodchoudhari@zkteco.in", userId : "vinodchoudhari" },
        { firstName: "Vincen",lastName:"wen", email: "vincen.wen@zkteco.in", userId : "vincen" },
        { firstName: "Nanigopal",lastName:"Jena", email: "Nanigopal@zkteco.in", userId : "Nanigopal" }
      ],
    toContact: {},
    draftContact: {},
    fromContact: {
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
    imServiceConfig: {imServiceUrl: "http://localhost:9089"},
    meetingList: [],
    meeting: {},
    meetingParticipents: []
}
 
export default function (state = initialState,action){
 
    switch (action.type) {
        case "GET_CONTACTS":
            return {
                ...state,
                contactList: action.payload
            };
        case "TO_CONTACT":
            return {
                ...state,
                toContact: action.payload
            };
        case "FROM_CONTACT":
            return {
                ...state,
                fromContact: action.payload
            };
        case "GET_RECENT_CONTACTS":
            return {
                ...state,
                recentContacts: action.payload
            };
        case "GET_MESSAGES":
            return {
                ...state,
                messageList: action.payload
            };
        case "IM_CONFIG":
            return {
                ...state,
                imServiceConfig: action.payload
            };
        case "GET_MEETINGS":
            return {
                ...state,
                meetingList: action.payload
            };
        case "GET_MEETING":
            return {
                ...state,
                meeting: action.payload
            };
        case "GET_MEETING_PARTICIPENTS":
            return {
                ...state,
                meetingParticipents: action.payload
            };
        case "DRAFT_CONTACT":
            return {
                ...state,
                draftContact: action.payload
            }
        default:
            return state;
    }
}